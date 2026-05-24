'use strict';

(function () {

  const W = window.innerWidth;
  const H = window.innerHeight;
  const N = 7;

  // ── Timing (seconds) ─────────────────────────────────────────────
  const T_STAGGER  = 0.28;              // delay between each planet entering
  const T_TRAVEL   = 1.9;              // each planet's travel duration
  const T_ALL_IN   = T_STAGGER * (N - 1) + T_TRAVEL; // 3.5s — last planet arrives
  const T_GATHER   = T_ALL_IN + 0.2;  // brief beat before orbit
  const T_ORBIT    = T_GATHER + 3.0;  // orbit for 3s
  const T_SCATTER  = T_ORBIT  + 2.2;  // scatter for 2.2s
  const T_DONE     = T_SCATTER + 1.0; // fade & hand off to DOM

  // ── Planet definitions ─────────
  const PLANET_DATA = [
    { id: 'p1', src: 'assets/p1.png', size: 180 },
    { id: 'p2', src: 'assets/p2.png', size: 120 },
    { id: 'p3', src: 'assets/p3.png', size: 120 },
    { id: 'p4', src: 'assets/p4.png', size: 140 },
    { id: 'p5', src: 'assets/p5.png', size: 180 },
    { id: 'p6', src: 'assets/p6.png', size: 170 },
    { id: 'p7', src: 'assets/p7.png', size: 130 },
  ];

  // ── Hide DOM planets while WebGL takes over ───────────────────────
  const containers = document.querySelectorAll('.planet-container');
  containers.forEach(c => {
    c.style.opacity       = '0';
    c.style.pointerEvents = 'none';
    c.style.transition    = 'opacity 0.9s ease';
  });

  // ── Fallback: if Three.js isn't loaded, reveal planets anyway ─────
  const fallbackTimer = setTimeout(() => {
    containers.forEach(c => { c.style.opacity = '1'; c.style.pointerEvents = ''; });
  }, 15000);

  // ── Three.js renderer ─────────────────────────────────────────────
  const canvas = document.getElementById('shaderCanvas');
  canvas.style.zIndex        = '500';
  canvas.style.pointerEvents = 'none';
  canvas.style.transition    = 'opacity 0.7s ease';

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-W / 2, W / 2, H / 2, -H / 2, 0.1, 1000);
  camera.position.z = 100;

  // ── Ambient glow sprite at centre ─────────
  const glowCanvas = document.createElement('canvas');
  glowCanvas.width = glowCanvas.height = 512;
  const gctx = glowCanvas.getContext('2d');
  const grad = gctx.createRadialGradient(256, 256, 0, 256, 256, 256);
  grad.addColorStop(0,   'rgba(120,160,255,0.35)');
  grad.addColorStop(0.4, 'rgba(80,100,220,0.12)');
  grad.addColorStop(1,   'rgba(0,0,0,0)');
  gctx.fillStyle = grad;
  gctx.fillRect(0, 0, 512, 512);
  const glowTex  = new THREE.CanvasTexture(glowCanvas);
  const glowMat  = new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, opacity: 0, depthWrite: false });
  const glowMesh = new THREE.Mesh(new THREE.PlaneGeometry(500, 500), glowMat);
  glowMesh.position.z = -1;
  scene.add(glowMesh);

  // ── Easing helpers
  const easeOut3  = t => 1 - Math.pow(1 - t, 3);
  const easeInOut = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const easeOut5  = t => 1 - Math.pow(1 - t, 5);
  const lerp      = (a, b, t) => a + (b - a) * t;
  const clamp01   = t => Math.max(0, Math.min(1, t));

  // Convert CSS-positioned element centre to Three.js world co-ordinates
  function domToWorld(id) {
    const el = document.getElementById(id);
    const r  = el.getBoundingClientRect();
    return {
      x:  (r.left + r.width  / 2) - W / 2,
      y:  H / 2 - (r.top  + r.height / 2),
    };
  }

  // ── Load textures and create meshes 
  const loader  = new THREE.TextureLoader();
  const meshes  = new Array(N).fill(null);
  let loaded    = 0;

  PLANET_DATA.forEach((p, i) => {
    loader.load(p.src, tex => {
      const geo  = new THREE.PlaneGeometry(p.size, p.size);
      const mat  = new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.01 });
      const mesh = new THREE.Mesh(geo, mat);

      // Off-screen starting position: upper-right, staggered diagonally
      // Each subsequent planet starts slightly further right + up
      const sx = W * 0.55 + i * 18;
      const sy = H * 0.50 + i * 12;
      mesh.position.set(sx, sy, i * 0.5);
      mesh.scale.setScalar(0.01);

      mesh.userData = {
        i,
        startX:     sx,
        startY:     sy,
        finalPos:   domToWorld(p.id),
        orbitAngle: (i / N) * Math.PI * 2,   // initial angle in orbit ring
        spinDir:    i % 2 === 0 ? 1 : -1,     // alternating spin
      };

      scene.add(mesh);
      meshes[i] = mesh;
      loaded++;
      if (loaded === N) startAnimation();
    });
  });

  // ── Main animation loop ───────────────────────────────────────────
  function startAnimation() {
    clearTimeout(fallbackTimer);
    const t0 = performance.now();
    let revealed = false;
    let finished = false;

    const ORBIT_R      = Math.min(H * 0.175, 155);
    const ORBIT_SPEED  = 1.35; // rad/s

    function loop() {
      if (finished) return;
      requestAnimationFrame(loop);

      const el = (performance.now() - t0) / 1000; // seconds elapsed

      meshes.forEach((mesh, i) => {
        if (!mesh) return;
        const { startX, startY, finalPos, orbitAngle, spinDir } = mesh.userData;

        const enterAt  = i * T_STAGGER;
        const arriveAt = enterAt + T_TRAVEL;

        // Phase 1: Descent 
        // Draw a slight S-curve: perpendicular oscillation fades to zero
        let x, y, s, rz;

        if (el < enterAt) {
          x = startX; y = startY; s = 0; rz = 0;

        } else if (el < arriveAt) {
          const localT = (el - enterAt) / T_TRAVEL;
          const t      = easeOut5(localT);

          // S-curve: sine wave perpendicular to the main direction
          // Main direction vector
          const len   = Math.hypot(startX, startY);
          const nx    = -startX / len;   // unit vec toward origin
          const ny    = -startY / len;
          const perp  = Math.sin(localT * Math.PI) * 55 * spinDir;

          x  = lerp(startX, 0, t) + (-ny) * perp;
          y  = lerp(startY, 0, t) + ( nx) * perp;
          s  = lerp(0.05, 1.0, easeOut3(Math.min(localT * 2, 1)));
          rz = spinDir * (1 - t) * 1.8;  // spin slows to 0 on arrival

        // ── Phase 2: Hold at centre 
        } else if (el < T_GATHER) {
          x = 0; y = 0; s = 1; rz = 0;

        // ── Phase 3: Spread into orbit ring + continue orbiting 
        } else if (el < T_ORBIT) {
          const spreadT   = clamp01((el - T_GATHER) / 0.9);
          const orbitTime = Math.max(0, el - T_GATHER - 0.9);
          const angle     = orbitAngle + ORBIT_SPEED * orbitTime;
          const r         = lerp(0, ORBIT_R, easeOut3(spreadT));
          x  = Math.cos(angle) * r;
          y  = Math.sin(angle) * r;
          s  = 1;
          rz = spinDir * 0.12 * Math.sin(el * 2 + i);   // gentle pulse rotation

          // Ramp glow in/out
          const glowT = clamp01((el - T_GATHER) / 1.0);
          glowMat.opacity = lerp(0, 0.85, easeOut3(glowT));

        // ── Phase 4: Scatter to DOM final position
        } else if (el < T_SCATTER) {
          const scatterT = clamp01((el - T_ORBIT) / (T_SCATTER - T_ORBIT));
          const t        = easeInOut(scatterT);

          // Compute orbit position at the moment scatter begins
          const angleAtEnd = orbitAngle + ORBIT_SPEED * (T_ORBIT - T_GATHER - 0.9);
          const ox = Math.cos(angleAtEnd) * ORBIT_R;
          const oy = Math.sin(angleAtEnd) * ORBIT_R;

          x  = lerp(ox, finalPos.x, t);
          y  = lerp(oy, finalPos.y, t);
          s  = 1;
          rz = spinDir * 0.12 * (1 - t);   // settle rotation

          // Fade glow out
          const glowOut = clamp01((el - T_ORBIT) / 0.8);
          glowMat.opacity = lerp(0.85, 0, glowOut);

        // Phase 5: Fade WebGL mesh out (DOM takes over) 
        } else {
          const fadeT = clamp01((el - T_SCATTER) / (T_DONE - T_SCATTER));
          x  = finalPos.x;
          y  = finalPos.y;
          s  = 1 - fadeT;
          rz = 0;
          glowMat.opacity = 0;
        }

        mesh.position.x  = x;
        mesh.position.y  = y;
        mesh.scale.setScalar(Math.max(0.001, s));
        mesh.rotation.z  = rz;
      });

      renderer.render(scene, camera);

      // Reveal DOM planets as WebGL sprites fade out
      if (!revealed && el >= T_SCATTER) {
        revealed = true;
        containers.forEach(c => {
          c.style.opacity       = '1';
          c.style.pointerEvents = '';
        });
      }

      // Retire canvas
      if (el >= T_DONE) {
        canvas.style.opacity = '0';
        canvas.style.zIndex  = '100';
        finished = true;
      }
    }

    loop();
  }

})();