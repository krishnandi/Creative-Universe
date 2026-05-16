// Data for each planet
const planets = [
  {
    id: "p1",
    title: "About Me",
    text: "Hi, I'm Krish. A creative soul with a love for technology, art, and storytelling. Welcome to my universe!"
  },
  {
    id: "p2",
    title: "Photography",
    text: "I have a passion for capturing moments that tell stories."
  },
  {
    id: "p3",
    title: "Coding",
    text: "From Java games to React apps. I love creating and problem-solving through code."
  },
  {
    id: "p4",
    title: "Art",
    text: "Fine art, digital illustration, visual thinking. I enjoy expressing creativity through various mediums."
  },
  {
    id: "p5",
    title: "Work Experience",
    text: "Interned at Eleven Studios. Adobe Student Ambassador. UCA Student Ambassador."
  },
  {
    id: "p6",
    title: "Certifications",
    text: "TryHackMe, Adobe certifications and more in progress."
  },
  {
    id: "p7",
    title: "Side Quests",
    text: "Spanish, cybersecurity, mathematics, drone building, reading. Always something on the side."
  }
]

// Grab the modal elements from the HTML
const modal = document.getElementById("modal")
const modalTitle = document.getElementById("modalTitle")
const modalText = document.getElementById("modalText")
const closeModal = document.getElementById("closeModal")

// Loop through each planet and add a click listener
planets.forEach(function(planet) {
  const element = document.getElementById(planet.id)
  
  element.addEventListener("click", function() {
    modalTitle.textContent = planet.title
    modalText.textContent = planet.text
    modal.classList.remove("hidden")
  })
})

// Close modal when X is clicked
closeModal.addEventListener("click", function() {
  modal.classList.add("hidden")
})