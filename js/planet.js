// Data for each planet
const planets = [
  {
    id: "p1",
    title: "About Me",
    text: "Hi, I'm Krish. A creative soul with a love for technology, art, and storytelling. Welcome to my universe!",
    details: "I'm a first year Creative Technology student at UCA Farnham. Adobe Student Ambassador, photographer, musician, and builder. Originally from India, currently making things in the UK.",
    images: []
  },
  {
    id: "p2",
    title: "Photography",
    text: "I have a passion for capturing moments that tell stories.",
    details: "I shoot street, portrait and travel photography. You can find my work on Instagram @krishnandiofficial.",
    images: []
  },
  {
    id: "p3",
    title: "Coding",
    text: "From Java games to React apps. I love creating and problem-solving through code.",
    details: "I built Space Raiders in Java, a STEM AI coaching app in React with Groq API, and various web projects. Currently learning Python, cybersecurity and Arduino.",
    images: []
  },
  {
    id: "p4",
    title: "Art",
    text: "Fine art, digital illustration, visual thinking.",
    details: "I work across traditional and digital mediums. Art is how I think visually before I build anything.",
    images: []
  },
  {
    id: "p5",
    title: "Work Experience",
    text: "Interned at Eleven Studios. Adobe Student Ambassador. UCA Student Ambassador.",
    details: "At Eleven Studios I worked on brand systems, Figma and Framer prototyping, and digital marketing. As Adobe Ambassador I represent Adobe tools across campus. As UCA Ambassador I lead campus tours and represent the university at events.",
    images: []
  },
  {
    id: "p6",
    title: "Certifications",
    text: "TryHackMe, Adobe certifications and more in progress.",
    details: "Currently working through TryHackMe cybersecurity paths, Adobe Creative Cloud certifications, Cisco Python Essentials, and CS50P.",
    images: []
  },
  {
    id: "p7",
    title: "Side Quests",
    text: "Spanish, cybersecurity, mathematics, drone building, reading.",
    details: "Learning Spanish through Language Transfer and Dreaming Spanish. Working through the Humongous Book of Calculus Problems. Reading list includes Dark Matter, Meditations, Zero to One and more.",
    images: []
  }
]

// Grab modal elements
const modal = document.getElementById("modal")
const modalTitle = document.getElementById("modalTitle")
const modalText = document.getElementById("modalText")
const modalDetails = document.getElementById("modalDetails")
const modalDetailsText = document.getElementById("modalDetailsText")
const modalImages = document.getElementById("modalImages")
const exploreBtn = document.getElementById("exploreBtn")
const closeModal = document.getElementById("closeModal")

// Each planet opens the modal with its own content
planets.forEach(function(planet) {
  const element = document.getElementById(planet.id)

  element.addEventListener("click", function() {
    // Fill in the content
    modalTitle.textContent = planet.title
    modalText.textContent = planet.text
    modalDetailsText.textContent = planet.details

    // Fill in images if any
    modalImages.innerHTML = ""
    planet.images.forEach(function(src) {
      const img = document.createElement("img")
      img.src = src
      img.style.width = "100%"
      img.style.borderRadius = "8px"
      img.style.marginBottom = "12px"
      modalImages.appendChild(img)
    })

    // Reset — hide details, show explore button
    modalDetails.classList.add("hidden")
    exploreBtn.classList.remove("hidden")
    modal.classList.remove("hidden")
  })
})

// Explore button expands the modal
exploreBtn.addEventListener("click", function() {
  modalDetails.classList.remove("hidden")
  exploreBtn.classList.add("hidden")
})

// Close button hides the modal
closeModal.addEventListener("click", function() {
  modal.classList.add("hidden")
})

window.addEventListener('click', () => {
  const audio = document.getElementById('bgAudio');
  
  // Check if audio is paused, then play it
  if (audio && audio.paused) {
    audio.play().catch(error => {
      console.log("Audio play blocked by browser:", error);
    });
  }
}, { once: true });

const audio = document.getElementById('bgAudio');
const audioToggle = document.getElementById('audioToggle');


window.addEventListener('click', () => {
  if (audio && audio.paused) {
    audio.play().catch(err => console.log("Playback blocked:", err));
  }
}, { once: true });

// 2. Handle the Mute/Unmute button toggle
audioToggle.addEventListener('click', (e) => {
  e.stopPropagation(); 
  
  if (!audio) return;

  if (audio.muted) {
    audio.muted = false;
    audioToggle.innerHTML = "🔊 Mute";
  } else {
    audio.muted = true;
    audioToggle.innerHTML = "🔇 Unmute";
  }
});
