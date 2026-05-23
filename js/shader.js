const canvas = document.getElementById("shaderCanvas")
const gl = canvas.getContext("webgl")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  gl.viewport(0, 0, canvas.width, canvas.height)
})

gl.viewport(0, 0, canvas.width, canvas.height)

const vertexShaderSource = `
  attribute vec2 a_position;
  attribute float a_size;
  attribute float a_alpha;
  varying float v_alpha;
  void main() {
    v_alpha = a_alpha;
    gl_Position = vec4(a_position, 0.0, 1.0);
    gl_PointSize = a_size;
  }
`

const fragmentShaderSource = `
  precision mediump float;
  varying float v_alpha;
  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;
    gl_FragColor = vec4(1.0, 1.0, 1.0, v_alpha * (1.0 - dist * 2.0));
  }
`

function compileShader(type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader error:", gl.getShaderInfoLog(shader))
    return null
  }
  return shader
}

const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource)
const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource)
const program = gl.createProgram()
gl.attachShader(program, vertexShader)
gl.attachShader(program, fragmentShader)
gl.linkProgram(program)
gl.useProgram(program)

gl.enable(gl.BLEND)
gl.blendFunc(gl.SRC_ALPHA, gl.ONE)

const NUM = 1200
const positions = new Float32Array(NUM * 2)
const sizes = new Float32Array(NUM)
const alphas = new Float32Array(NUM)
const velocities = []
const origins = []

for (let i = 0; i < NUM; i++) {
  const x = (Math.random() * 2) - 1
  const y = (Math.random() * 2) - 1
  positions[i * 2]     = x
  positions[i * 2 + 1] = y
  origins.push({ x, y })
  sizes[i] = Math.random() * 3 + 1
  alphas[i] = Math.random() * 0.5 + 0.3
  velocities.push({ x: 0, y: 0 })
}

let mouseX = 9999
let mouseY = 9999

window.addEventListener("mousemove", function(e) {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1
  mouseY = -((e.clientY / window.innerHeight) * 2 - 1)
})

const posBuffer = gl.createBuffer()
const sizeBuffer = gl.createBuffer()
const alphaBuffer = gl.createBuffer()

const aPosition = gl.getAttribLocation(program, "a_position")
const aSize = gl.getAttribLocation(program, "a_size")
const aAlpha = gl.getAttribLocation(program, "a_alpha")

// Upload sizes and alphas once
gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer)
gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW)

gl.bindBuffer(gl.ARRAY_BUFFER, alphaBuffer)
gl.bufferData(gl.ARRAY_BUFFER, alphas, gl.STATIC_DRAW)

const REPULSION_RADIUS = 0.25
const REPULSION_STRENGTH = 0.003
const RETURN_STRENGTH = 0.02
const DAMPING = 0.85

function animate() {
  requestAnimationFrame(animate)

  for (let i = 0; i < NUM; i++) {
    const px = positions[i * 2]
    const py = positions[i * 2 + 1]

    // Vector from mouse to particle
    const dx = px - mouseX
    const dy = py - mouseY
    const dist = Math.sqrt(dx * dx + dy * dy)

    // Repulsion
    if (dist < REPULSION_RADIUS && dist > 0) {
      const force = (REPULSION_RADIUS - dist) / REPULSION_RADIUS
      velocities[i].x += (dx / dist) * force * REPULSION_STRENGTH * 10
      velocities[i].y += (dy / dist) * force * REPULSION_STRENGTH * 10
    }

    // Return to original position
    velocities[i].x += (origins[i].x - px) * RETURN_STRENGTH
    velocities[i].y += (origins[i].y - py) * RETURN_STRENGTH

    // Damping — slow down over time
    velocities[i].x *= DAMPING
    velocities[i].y *= DAMPING

    positions[i * 2]     += velocities[i].x
    positions[i * 2 + 1] += velocities[i].y
  }

  gl.clearColor(0, 0, 0, 0)
  gl.clear(gl.COLOR_BUFFER_BIT)

  gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.DYNAMIC_DRAW)
  gl.enableVertexAttribArray(aPosition)
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)

  gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer)
  gl.enableVertexAttribArray(aSize)
  gl.vertexAttribPointer(aSize, 1, gl.FLOAT, false, 0, 0)

  gl.bindBuffer(gl.ARRAY_BUFFER, alphaBuffer)
  gl.enableVertexAttribArray(aAlpha)
  gl.vertexAttribPointer(aAlpha, 1, gl.FLOAT, false, 0, 0)

  gl.drawArrays(gl.POINTS, 0, NUM)
}

animate()