// PLANET DATA
const planets = [
  {
    id: "p1",
    title: "About Me",
    images: [],
    text: [
      "Hi! My name is Krish Nandi.",
      "I am a Computer Science student at UCA, Farnham. Originally from Delhi, India. I am an extremely creative and a multifaceted person. I have a lot of hobbies and interests that I am passionate about.",
      "Where did I get this passion?",
      "At 5, I got my first lego set. It was the first thing after painting that honed my creativity. I've been building, breaking and rebuilding things ever since.",
      "This curiosity and restlessness has taken me everywhere, from winning art competitions to picking up a camera to writing songs and eventually, writing code.",
      "Now I'm building apps, shipping prototypes, experimenting with AI, and figuring out what's actually possible when you stay curious.",
      "I'm a first year Creative Technology student at UCA Farnham. Adobe Student Ambassador, photographer, musician, and builder. Originally from India, currently making things in the UK."
    ]
  },
  {
    id: "p2",
    title: "Photography",
    text: "I have a passion for capturing moments that tell stories.",
    images: [
      "portfolio/img1.jpg",
      "portfolio/img12.jpg",
      "portfolio/img9.jpg",
      "portfolio/img18.jpg",
      "portfolio/img21.jpg",
      "portfolio/img28.jpg",
      "portfolio/img31.jpg",
      "portfolio/img5.jpg",
      "portfolio/img11.jpg",
      "portfolio/img15.jpg",
      "portfolio/img17.jpg",
      "portfolio/img22.jpg",
      "portfolio/img32.jpg"
    ]
  },
  {
    id: "p3",
    title: "Coding",
    text: "From Java games to React apps. I love creating and problem-solving through code.",
    details: "I built Space Raiders in Java, Interactive media in Processing, an easy to do list app that breaks down complex tasks into smallest steps (especially for neurodivergent people with ADHD), and various web projects. Currently learning Python, React, cybersecurity and Arduino.",
    images: []
  },
  {
    id: "p4",
    title: "Art",
    images: [],
    artImages: [
      {
        src: "art/img1.jpg",
        title: "Vintage Wheels",
        medium: "Charcoal · 2022",
        description: "I made this charcoal artwork of a vintage car in 2022. It was one of the first pieces where I really focused on shading and texture to bring the subject to life. I wanted to capture the rugged, worn feel of the old car, and I experimented with different techniques to create depth and contrast. It was a rewarding process that taught me a lot about working with charcoal and observing details. This is also one of the biggest pieces I've done, measuring close to 4 feet, which was a fun challenge to manage the composition and proportions on a larger scale."
      },
      {
        src: "art/img2.jpg",
        title: "Harley",
        medium: "Charcoal · 2023",
        description: "This is a charcoal drawing of a Harley Davidson motorcycle that I completed in 2023. I was drawn to the sleek design and iconic status of the Harley, and I wanted to capture its essence through my art. For this piece, I focused on creating strong contrasts to highlight the bike's curves and metallic surfaces. I also paid close attention to the details, like the engine components and the reflections on the chrome parts. This artwork was a great exercise in rendering complex shapes and textures with charcoal, and it remains one of my favorite pieces in my collection."
      },
      {
        src: "art/img3.jpg",
        title: "Jordans",
        medium: "Charcoal and Oil on Canvas · 2022",
        description: "This mixed media piece combines charcoal and oil paint to depict a pair of iconic Air Jordan sneakers. I created this artwork in 2022 as a tribute to sneaker culture and its influence on fashion and art. The charcoal was used to sketch the initial outline and add depth through shading, while the oil paint brought vibrant colors and a glossy finish to the shoes. I aimed to capture the texture of the leather and the intricate details of the design, making it feel almost tangible. This piece was a fun exploration of blending traditional drawing techniques with painting, and it allowed me to experiment with different materials to achieve a dynamic result."
      },
      {
        src: "art/img4.jpg",
        title: "The Voyage against the tide",
        medium: "Charcoal · 2023",
        description: "This charcoal drawing, titled 'The Voyage against the tide,' was created in 2023. It depicts an 18th Century sailing ship battling rough seas, symbolizing resilience and determination in the face of adversity. I was inspired by historical maritime art and wanted to capture the drama and intensity of a storm at sea. The piece features strong contrasts between the dark, turbulent waters and the lighter tones of the ship, emphasizing the struggle against nature. I focused on conveying movement and emotion through dynamic lines and shading, making it feel as though the viewer is right there in the midst of the storm. This artwork is one of my more narrative-driven pieces, allowing me to explore storytelling through visual art. This also took me about 4 months to complete, as I worked on it intermittently while balancing other projects, which made the process feel like a true voyage in itself."
      },
      {
        src: "art/img5.jpg",
        title: "Monaghan Boy",
        medium: "Charcoal · 2023",
        description: "This is the biggest painting from my art collection, measuring around 5 feet. Titled 'Monaghan Boy,' It was a homage to one of my favorite TV shows, Peaky Blinders. I was captivated by the show's gritty atmosphere and complex characters, and I wanted to create a piece that reflected that mood. The painting features a portrait of a character from the show, rendered in charcoal to enhance the dark and brooding aesthetic. I focused on capturing the intense expression and the intricate details of the character's attire, which are iconic elements of the series. This piece was a significant undertaking due to its size and the level of detail involved, but it was incredibly rewarding to see it come together. It remains one of my most ambitious artworks and a personal favorite in my collection. This took me about 5 months to complete, as I worked on it alongside my studies and other creative projects, making it a true labor of love that I returned to whenever I had the chance. I also presented this piece at Haat of Art, a massive art exhibition in Mumbai, India, which was an amazing experience to share my work with a larger audience and connect with fellow artists."
      },
      {
        src: "art/img6.jpg",
        title: "Time",
        medium: "Linocut · 2023",
        description: "This linocut print, titled 'Time,' was created in 2023 as an inspiration to chase something greater than humanity can comprehend. It features an astronaut looking at a massive blackhole in space, symbolizing the vastness of the universe and the mysteries that lie beyond our understanding. The piece was made using the linocut technique, which involves carving a design into a linoleum block and then using it to create prints. I chose this medium for its bold, graphic quality, which I felt would suit the cosmic theme of the artwork. The stark contrasts between black and white in the print help to convey the awe-inspiring nature of space and the concept of time as an infinite, unfathomable force. This piece was a great opportunity for me to experiment with printmaking techniques and explore philosophical themes through my art. I wanted to give it some color inspired by interstellar as well."
      },
      {
        src: "art/img7.jpg",
        title: "Rock & Roll",
        medium: "Clay · 2023",
        description: "This is a clay piece I sculpted in 2023, inspired by my love for music and the raw energy of rock & roll. The sculpture features a figure playing an electric guitar, with exaggerated, dynamic forms that capture the movement and intensity of a live performance. I chose clay as the medium for this piece because of its versatility and tactile nature, which allowed me to mold and shape the figure in a way that felt organic and expressive. The rough texture of the clay adds to the gritty, rebellious vibe of the artwork, reflecting the spirit of rock music. This sculpture was a fun departure from my usual 2D work and gave me a chance to explore three-dimensional art as a means of expressing my passion for music visually."
      },
      {
        src: "art/img8.jpeg",
        title: "Exhibitions",
        medium: "Charcoal · 2022-2024",
        description: "I've showcased my art in various exhibitions in Mumbai Art fair and Haat of Art, where I presented all my charcoal pieces. It was an incredible experience to share my work with a wider audience and connect with fellow artists and art enthusiasts. Exhibiting my art allowed me to gain valuable feedback and insights, which have been instrumental in my growth as an artist. It also gave me the confidence to continue pursuing my passion for art alongside my studies and other creative endeavors. Being part of these exhibitions was a significant milestone in my artistic journey, and it has motivated me to keep creating and sharing my work with the world."
      }
    ]
  },
  {
    id: "p5",
    title: "Work Experience",
    images: [],
    timeline: [
      {
        date: "Mar 2026",
        company: "Game Dev Local",
        role: "Volunteer",
        points: [
          "Volunteered at the GDLX games event",
          "Helped staff and participants with setup and dismantling the setup",
          "Led visitors and exhibitors to the right locations"
        ]
      },
      {
        date: "Mar 2026 – Now",
        company: "Adobe",
        role: "Student Ambassador",
        points: [
          "Promoting Adobe products within student clubs and major campus events",
          "Producing social media content showcasing Adobe tools for academic and personal projects",
          "Acting as a liaison providing user feedback on product features to Adobe"
        ]
      },
      {
        date: "Nov 2025 – Now",
        company: "UCA Farnham",
        role: "Student Ambassador",
        points: [
          "Representing the university on campus and within student communities",
          "Driving awareness through peer-to-peer outreach, events and online engagement",
          "Developing communication, leadership and community-building skills"
        ]
      },
      {
        date: "Jun – Aug 2025",
        company: "Eleven Studios",
        role: "Growth Intern",
        points: [
          "Worked with the design team helping startups build brands and digital experiences",
          "Designed visual and digital assets contributing to layout development and web concepts",
          "Developed a centralised client and project tracking system improving workflow visibility",
          "Built and iterated on a prototype of the studio website using Figma and Framer"
        ]
      }
    ]
  },
  {
    id: "p6",
    title: "Certifications",
    text: "Courses in Python, Programming, Finance, Digital Marketing and more.",
    images: [
      "certificates/cert (0).png",
      "certificates/cert (1).jpg",
      "certificates/cert (2).jpg",
      "certificates/cert (3).jpg",
      "certificates/cert (4).jpg",
      "certificates/cert (5).jpg",
      "certificates/cert (6).jpg"
    ]
  },
  {
    id: "p7",
    title: "Side Quests",
    text: "Jack of all trades, master of some. Always exploring new interests and hobbies outside of my main creative pursuits.",
    images: [],
    quests: [
      {
        name: "Spanish",
        desc: "Learning through comprehensive and well known resources. Full immersion. Currently at conversational level."
      },
      {
        name: "Mathematics",
        desc: "Working though Calculus, Linear Algebra and Discrete Mathematics to strengthen my problem solving and logical thinking skills through Wolfram courses and Khan Academy."
      },
      {
        name: "Cybersecurity",
        desc: "Following a structured roadmap through TryHackMe, Linux, networking and hardware tools."
      },
      {
        name: "Music",
        desc: "Writing and producing original songs. I regularly perform at open mics. Music is how I process everything else."
      },
      {
        name: "Reading",
        desc: "Current list includes Dark Matter, Meditations, Zero to One, and Artificial Intelligence by Melanie Mitchell."
      }
    ]
  }
]

// MODAL ELEMENTS

const modal            = document.getElementById("modal")
const modalTitle       = document.getElementById("modalTitle")
const modalText        = document.getElementById("modalText")
const modalDetails     = document.getElementById("modalDetails")
const modalDetailsText = document.getElementById("modalDetailsText")
const modalImages      = document.getElementById("modalImages")
const closeModal       = document.getElementById("closeModal")

// CAROUSEL (Photography)

let carouselIndex  = 0
let carouselImages = []

function buildCarousel(images, planetId) {
  modalImages.innerHTML = ""
  if (!images || images.length === 0 || planetId === "p6") return

  carouselImages = images
  carouselIndex  = 0

  const wrapper = document.createElement("div")
  wrapper.className = "carousel"

  const imgEl = document.createElement("img")
  imgEl.className = "carousel-img"
  imgEl.src = images[0]
  imgEl.alt = "Photo 1"

  const prevBtn = document.createElement("button")
  prevBtn.className = "carousel-btn carousel-prev"
  prevBtn.innerHTML = "&#8249;"
  prevBtn.addEventListener("click", function () {
    carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length
    updateCarousel(imgEl, dotsContainer)
  })

  const nextBtn = document.createElement("button")
  nextBtn.className = "carousel-btn carousel-next"
  nextBtn.innerHTML = "&#8250;"
  nextBtn.addEventListener("click", function () {
    carouselIndex = (carouselIndex + 1) % carouselImages.length
    updateCarousel(imgEl, dotsContainer)
  })

  const dotsContainer = document.createElement("div")
  dotsContainer.className = "carousel-dots"
  images.forEach(function (_, i) {
    const dot = document.createElement("span")
    dot.className = "carousel-dot" + (i === 0 ? " active" : "")
    dot.addEventListener("click", function () {
      carouselIndex = i
      updateCarousel(imgEl, dotsContainer)
    })
    dotsContainer.appendChild(dot)
  })

  let touchStartX = 0
  wrapper.addEventListener("touchstart", function (e) {
    touchStartX = e.touches[0].clientX
  }, { passive: true })
  wrapper.addEventListener("touchend", function (e) {
    const dx = e.changedTouches[0].clientX - touchStartX
    if (Math.abs(dx) > 40) {
      carouselIndex = dx < 0
        ? (carouselIndex + 1) % carouselImages.length
        : (carouselIndex - 1 + carouselImages.length) % carouselImages.length
      updateCarousel(imgEl, dotsContainer)
    }
  }, { passive: true })

  wrapper.appendChild(prevBtn)
  wrapper.appendChild(imgEl)
  wrapper.appendChild(nextBtn)
  modalImages.appendChild(wrapper)
  modalImages.appendChild(dotsContainer)
}

function updateCarousel(imgEl, dotsContainer) {
  imgEl.classList.add("carousel-fade")
  setTimeout(function () {
    imgEl.src = carouselImages[carouselIndex]
    imgEl.alt = "Photo " + (carouselIndex + 1)
    imgEl.classList.remove("carousel-fade")
  }, 150)
  dotsContainer.querySelectorAll(".carousel-dot").forEach(function (dot, i) {
    dot.classList.toggle("active", i === carouselIndex)
  })
}

// ART CAROUSEL (with description panel)

let artData  = []
let artIndex = 0

function buildArtCarousel(artImages) {
  modalImages.innerHTML = ""
  if (!artImages || artImages.length === 0) return

  artData  = artImages
  artIndex = 0

  const wrapper = document.createElement("div")
  wrapper.className = "art-carousel-wrapper"

  const carousel = document.createElement("div")
  carousel.className = "carousel"

  const imgEl = document.createElement("img")
  imgEl.className = "carousel-img"
  imgEl.src = artImages[0].src
  imgEl.alt = artImages[0].title || "Art"

  const prevBtn = document.createElement("button")
  prevBtn.className = "carousel-btn carousel-prev"
  prevBtn.innerHTML = "&#8249;"

  const nextBtn = document.createElement("button")
  nextBtn.className = "carousel-btn carousel-next"
  nextBtn.innerHTML = "&#8250;"

  const dotsContainer = document.createElement("div")
  dotsContainer.className = "carousel-dots"
  artImages.forEach(function (_, i) {
    const dot = document.createElement("span")
    dot.className = "carousel-dot" + (i === 0 ? " active" : "")
    dot.addEventListener("click", function () {
      artIndex = i
      updateArtCarousel(imgEl, dotsContainer, descPanel)
    })
    dotsContainer.appendChild(dot)
  })

  const descPanel = document.createElement("div")
  descPanel.className = "art-desc-panel"
  renderArtDesc(descPanel, artImages[0])

  prevBtn.addEventListener("click", function () {
    artIndex = (artIndex - 1 + artData.length) % artData.length
    updateArtCarousel(imgEl, dotsContainer, descPanel)
  })
  nextBtn.addEventListener("click", function () {
    artIndex = (artIndex + 1) % artData.length
    updateArtCarousel(imgEl, dotsContainer, descPanel)
  })

  let touchStartX = 0
  carousel.addEventListener("touchstart", function (e) {
    touchStartX = e.touches[0].clientX
  }, { passive: true })
  carousel.addEventListener("touchend", function (e) {
    const dx = e.changedTouches[0].clientX - touchStartX
    if (Math.abs(dx) > 40) {
      artIndex = dx < 0
        ? (artIndex + 1) % artData.length
        : (artIndex - 1 + artData.length) % artData.length
      updateArtCarousel(imgEl, dotsContainer, descPanel)
    }
  }, { passive: true })

  carousel.appendChild(prevBtn)
  carousel.appendChild(imgEl)
  carousel.appendChild(nextBtn)
  wrapper.appendChild(carousel)
  wrapper.appendChild(dotsContainer)
  wrapper.appendChild(descPanel)
  modalImages.appendChild(wrapper)
}

function renderArtDesc(panel, item) {
  panel.innerHTML =
    '<div class="art-desc-title">'  + (item.title       || "") + '</div>' +
    '<div class="art-desc-medium">' + (item.medium      || "") + '</div>' +
    '<div class="art-desc-text">'   + (item.description || "") + '</div>'
}

function updateArtCarousel(imgEl, dotsContainer, descPanel) {
  const item = artData[artIndex]

  imgEl.classList.add("carousel-fade")
  setTimeout(function () {
    imgEl.src = item.src
    imgEl.alt = item.title || "Art"
    imgEl.classList.remove("carousel-fade")
  }, 150)

  dotsContainer.querySelectorAll(".carousel-dot").forEach(function (dot, i) {
    dot.classList.toggle("active", i === artIndex)
  })

  descPanel.classList.add("art-desc-fade")
  setTimeout(function () {
    renderArtDesc(descPanel, item)
    descPanel.scrollTop = 0
    descPanel.classList.remove("art-desc-fade")
  }, 150)
}

// OPEN PLANET MODAL

planets.forEach(function (planet) {
  const element = document.getElementById(planet.id)
  element.addEventListener("click", function () {

    // Title
    modalTitle.textContent = planet.title

    // About Me photo
    const modalPhoto = document.getElementById("modalPhoto")
    if (planet.id === "p1") {
      modalPhoto.src = "me.JPG"
      modalPhoto.classList.remove("hidden")
    } else {
      modalPhoto.classList.add("hidden")
    }

    // Main text
    modalText.innerHTML = ""
    if (Array.isArray(planet.text)) {
      planet.text.forEach(function (line) {
        const p = document.createElement("p")
        p.textContent = line
        p.style.marginBottom = "10px"
        modalText.appendChild(p)
      })
    } else {
      modalText.textContent = planet.text || ""
    }

    // Details text
    modalDetailsText.textContent = planet.details || ""

    // GitHub link (Coding planet only)
    const githubDiv = document.getElementById("modalGithub")
    if (githubDiv) {
      githubDiv.innerHTML = planet.id === "p3"
        ? '<a href="https://github.com/krishnandi" target="_blank" style="display:inline-block; margin-top:20px;">View GitHub →</a>'
        : ""
    }

    // Remove any previously injected dynamic sections
    const existingCerts    = document.getElementById("modalCerts")
    const existingTimeline = document.getElementById("modalTimeline")
    const existingQuests   = document.getElementById("modalQuests")
    if (existingCerts)    existingCerts.remove()
    if (existingTimeline) existingTimeline.remove()
    if (existingQuests)   existingQuests.remove()

    // Certifications scroll (p6)
    if (planet.id === "p6" && planet.images && planet.images.length > 0) {
      const certScroll = document.createElement("div")
      certScroll.className = "cert-scroll"
      certScroll.id = "modalCerts"
      planet.images.forEach(function (src) {
        const img = document.createElement("img")
        img.src = src
        certScroll.appendChild(img)
      })
      modalDetails.appendChild(certScroll)
    }

    // Work Experience timeline (p5)
    if (planet.timeline && planet.timeline.length > 0) {
      const timelineEl = document.createElement("div")
      timelineEl.className = "timeline"
      timelineEl.id = "modalTimeline"
      planet.timeline.forEach(function (item) {
        const itemEl = document.createElement("div")
        itemEl.className = "timeline-item"
        itemEl.innerHTML = `
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-company">${item.company}</div>
            <div class="timeline-role">${item.role}</div>
            <ul class="timeline-points">
              ${item.points ? item.points.map(p => `<li>${p}</li>`).join("") : item.desc || ""}
            </ul>
          </div>
        `
        timelineEl.appendChild(itemEl)
      })
      modalDetails.appendChild(timelineEl)
    }

    // Side Quests plain list (p7)
    if (planet.quests && planet.quests.length > 0) {
      const questsList = document.createElement("div")
      questsList.className = "quests-list"
      questsList.id = "modalQuests"
      planet.quests.forEach(function (quest) {
        const item = document.createElement("div")
        item.className = "quest-item"
        item.innerHTML = `
          <div class="quest-name">${quest.name}</div>
          <div class="quest-desc">${quest.desc}</div>
        `
        questsList.appendChild(item)
      })
      modalDetails.appendChild(questsList)
    }

    // Images / art carousel
    if (planet.artImages && planet.artImages.length > 0) {
      buildArtCarousel(planet.artImages)
    } else {
      buildCarousel(planet.images, planet.id)
    }

    modal.classList.remove("hidden")
  })
})

// Close modal
closeModal.addEventListener("click", function () {
  modal.classList.add("hidden")
})

modal.addEventListener("click", function (e) {
  if (e.target === modal) modal.classList.add("hidden")
})

// AUDIO

window.addEventListener("click", function () {
  const audio = document.getElementById("bgAudio")
  if (audio && audio.paused) audio.play().catch(err => console.log("Audio blocked:", err))
}, { once: true })

const audio       = document.getElementById("bgAudio")
const audioToggle = document.getElementById("audioToggle")

audioToggle.addEventListener("click", function (e) {
  e.stopPropagation()
  if (!audio) return
  if (audio.muted) {
    audio.muted = false
    audioToggle.innerHTML = "🔊 Mute"
  } else {
    audio.muted = true
    audioToggle.innerHTML = "🔇 Unmute"
  }
})

// INFO BUTTON

const infoBtn   = document.getElementById("infoBtn")
const infoPopup = document.getElementById("infoPopup")
let holdTimer   = null

function showInfo()   { infoPopup.classList.remove("hidden") }
function hideInfo()   { infoPopup.classList.add("hidden") }
function toggleInfo() { infoPopup.classList.contains("hidden") ? showInfo() : hideInfo() }

infoBtn.addEventListener("click", function (e) {
  e.stopPropagation()
  toggleInfo()
})

infoBtn.addEventListener("touchstart", function () {
  holdTimer = setTimeout(showInfo, 500)
}, { passive: true })

infoBtn.addEventListener("touchend", function () {
  clearTimeout(holdTimer)
})

document.addEventListener("click", function (e) {
  if (!infoPopup.classList.contains("hidden") &&
      !infoPopup.contains(e.target) &&
      e.target !== infoBtn) {
    hideInfo()
  }
})

// CONTACT BUTTON
const contactBtn   = document.getElementById("contactBtn")
const contactModal = document.getElementById("contactModal")
const closeContact = document.getElementById("closeContact")

contactBtn.addEventListener("click", function (e) {
  e.stopPropagation()
  contactModal.classList.remove("hidden")
})

closeContact.addEventListener("click", function () {
  contactModal.classList.add("hidden")
})

contactModal.addEventListener("click", function (e) {
  if (e.target === contactModal) contactModal.classList.add("hidden")
})


// START SCREEN

const startMenu = document.getElementById("startMenu")
const enterBtn  = document.getElementById("enterBtn")

enterBtn.addEventListener("click", function () {
  startMenu.style.opacity = "0"
  setTimeout(function () {
    startMenu.style.display = "none"
  }, 900)
})