// burger menu
const menu = document.querySelector(".navigation");
const menuItems = document.querySelectorAll(".menu__link");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showNavigation")) {
    menu.classList.remove("showNavigation");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showNavigation");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)



// timer
let hours = 59;
let minutes = 59;
let seconds = 59;

function updateTimer() {
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
                clearInterval(timerInterval);
                document.querySelector('.timer').textContent = "Time is out!";
                return;
            }
        }
    }

    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

const timerInterval = setInterval(updateTimer, 1000);