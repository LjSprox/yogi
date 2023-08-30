console.log("JavaScript Connected")
let fadingInterval;

function fadeOut(element) {
  element.style.opacity = 0;
}

function fadeIn(element) {
  element.style.opacity = 1;
}

function fadeElements() {
  const fade1 = document.getElementById('fade1');
  const fade2 = document.getElementById('fade2');

  fadeOut(fade1);
  setTimeout(() => {
    fadeOut(fade2);
    setTimeout(() => {
      fadeIn(fade2);
      setTimeout(() => {
        fadeIn(fade1);
      }, 1000);
    }, 1000);
  }, 1000);
  console.log("fading funct")
}

function startFading() {
  fadeElements();
  fadingInterval = setInterval(fadeElements, 4000); // Repeat the fading loop every 4 seconds (1s + 1s + 1s + 1s)
  console.log("fading started?")
}

function stopFading() {
  clearInterval(fadingInterval);
}

window.addEventListener('load', () => {
  if (window.location.pathname === '/index.html') {
    startFading();
  }
});

window.addEventListener('beforeunload', stopFading);

  // *******************Tablet Version**********************

  function setupTabletCardHalves() {
    let benefitsOfYogaCards = document.getElementsByClassName("benefits-of-yoga-card");
    let benefitsOfYogaArray = Array.from(benefitsOfYogaCards);
    
    const middleIndex = Math.ceil(benefitsOfYogaArray.length / 2);
    const firstHalf = benefitsOfYogaArray.slice(0, middleIndex);
    const secondHalf = benefitsOfYogaArray.slice(middleIndex);
    
    const circle1 = document.getElementById("circle1");
    const circle2 = document.getElementById("circle2");
    
    secondHalf.forEach(function(card) {
      card.style.display = "none";
    });
    
    function toggleHalvesAndCircleColor() {
      firstHalf.forEach(function(card) {
        card.style.display = card.style.display === "none" ? "block" : "none";
      });
      secondHalf.forEach(function(card) {
        card.style.display = card.style.display === "none" ? "block" : "none";
      });
    
      if (circle1.style.backgroundColor === "rgb(163, 177, 138)") {
        circle1.style.backgroundColor = "#D9D9D9";
        circle2.style.backgroundColor = "#A3B18A";
      } else {
        circle1.style.backgroundColor = "#A3B18A";
        circle2.style.backgroundColor = "#D9D9D9";
      }
    }
    
    circle1.style.backgroundColor = "#A3B18A";
    circle2.style.backgroundColor = "#D9D9D9";
    
    benefitsOfYogaArray
    .forEach(function(card) {
      card.addEventListener('click', toggleHalvesAndCircleColor);
    });

    circle1.addEventListener('click', toggleHalvesAndCircleColor);
    circle2.addEventListener('click', toggleHalvesAndCircleColor);

  }

//**************Phone Version********************* 

function setupCardSection(cardsContainerId, circlesContainerId) {
  const cardsContainer = document.getElementById(cardsContainerId);
   if (cardsContainer != null) {
    const cards = cardsContainer.getElementsByClassName("card");
  const circlesContainer = document.getElementById(circlesContainerId);
  const circles = circlesContainer.getElementsByClassName("circle");

  let currentIndex = 0;

  function showCurrentCard() {
    Array.from(cards).forEach(function (card, index) {
      if (index === currentIndex) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function toggleCircleColor() {
    circles[currentIndex].style.backgroundColor = "#A3B18A";
    circles[currentIndex].classList.add('active')
    for (let i = 0; i < circles.length; i++) {
      if (i !== currentIndex) {
        circles[i].style.backgroundColor = "#D9D9D9";
        circles[i].classList.remove('active')
      }
    }
   }
   showCurrentCard();
  toggleCircleColor();

  function showNextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCurrentCard();
    toggleCircleColor();
  }

  cardsContainer.addEventListener("click", function () {
    showNextCard();
  });

  circlesContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("circle")) {
      currentIndex = Array.from(circles).indexOf(event.target);
      showCurrentCard();
      toggleCircleColor();
    }
  })
  }

  ;
}

  function handleWindowResize() {
    if (window.innerWidth >= 1024 && window.innerWidth <= 1366 && window.location.pathname === '/index.html') {
      setupTabletCardHalves();
    } else if (window.innerWidth >= 769 && window.innerWidth <= 1023 && window.location.pathname === '/pages/aboutUs/aboutUsPage.html'){
      setupCardSection("testimonial-cards", "circles-container-testimonials");
      console.log("this is workinf")
    } else if ((window.innerWidth >= 769 && window.innerWidth <= 1023 && window.location.pathname === '/index.html')) {
      setupTabletCardHalves();
    }
        else if (window.innerWidth >= 320 && window.innerWidth <= 767){
      if(window.location.pathname === '/index.html') {
        console.log("is this working")
        setupCardSection("benefits-of-yoga-cards", "circles-container");
        setupCardSection("unsere-prinzipien-cards", "circles-container-unsere-prinzipien");
        setupCardSection("meet-us-cards", "circles-container-meet-us-section");
      }
      else if (window.location.pathname === '/pages/aboutUs/aboutUsPage.html')
      setupCardSection("mission-and-vision-cards", "circles-container-mission-and-vision")
      setupCardSection("meet-us-cards-about-us-page", "circles-container-meet-us-section-about-us-page");
      setupCardSection("testimonial-cards", "circles-container-testimonials");
    }
  }
  
  // Call the respective function initially
  handleWindowResize();
  
  // Add event listener for window resize
  window.addEventListener('resize', handleWindowResize);



  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navigation = document.querySelector('.navigation');
  const contactBtnHeader = document.querySelector('.contact-btn-header');
  const navLogo = document.getElementById('logo');
  const pageHeader = document.querySelector('.page-header');
  const pageBody = document.body;
  
  function navElementsWaiting() {
    setTimeout(() => {
      navigation.classList.toggle('show');
      navLogo.classList.toggle('show');
      contactBtnHeader.classList.toggle('show');
    }, 200); // 200 milliseconds delay
  }
  
  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('hide');
    pageHeader.classList.toggle('show');
    navElementsWaiting();
    pageBody.classList.add('hamburgerOpened');
  });
  
  document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (!targetElement.closest('.page-header')) {
      pageHeader.classList.remove('show');
      navigation.classList.remove('show');
      contactBtnHeader.classList.remove('show');
      hamburgerBtn.classList.remove('hide');
      navLogo.classList.remove('show');
      pageBody.classList.remove('hamburgerOpened');
    }
  });
  
// Prevent closing the menu when clicking inside the container
document.querySelector('.container').addEventListener('click', (event) => {
  event.stopPropagation();
});

//CONTACT PAGE***************

function sendEmail() {
  Email.send({
    SecureToken: "b8d893a8-c4c5-446c-99f4-d255ecb27a09",
    To: 'ljsprox42@gmail.com',
    From: document.getElementById("email").value,
    Subject: "Contact Form Message",
    Body: "Name " + document.getElementById("name").value 
        + "<br> Surname: " + document.getElementById("surname").value 
        + "<br> Email: " + document.getElementById("email").value 
        + "<br> Message: " + document.getElementById("message").value 
      }).then(
    message => alert(message)
  );
}

//GALLERY PAGE*************************


document.addEventListener('DOMContentLoaded', function() {
  setupGallery();
});


function setupGallery() {
  const galleryList = document.getElementById('galleryList');

  const gallery = new Viewer(galleryList);
}