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


// copy button 
document.getElementById("copyButton").addEventListener("click", function() {
  const textToCopy = this.innerText;
  navigator.clipboard.writeText(textToCopy).then(function() {
    alert("Текст скопійовано: " + textToCopy);
  }, function(err) {
    console.error("Помилка при копіюванні: ", err);
  });
});

// follow button 
document.getElementById("followButton").addEventListener("click", function () {
  const followIcon = document.getElementById("followIcon");

  if (this.innerText.includes("Follow")) {
    // SVG на галочку і зміна кольору
    followIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.707 5.707C16.898 5.516 16.898 5.22 16.707 5.029C16.516 4.838 16.22 4.838 16.029 5.029L8.5 12.558L4.471 8.529C4.28 8.338 3.984 8.338 3.793 8.529C3.602 8.72 3.602 9.016 3.793 9.207L8.207 13.621C8.398 13.812 8.694 13.812 8.885 13.621L16.707 5.707Z" fill="white"/>
      </svg>`;
    this.innerHTML = followIcon.outerHTML + ' Subscribed';
  } else {
    // SVG плюс і зміна кольору
    followIcon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 10C2.5 9.65482 2.77982 9.375 3.125 9.375H16.875C17.2202 9.375 17.5 9.65482 17.5 10C17.5 10.3452 17.2202 10.625 16.875 10.625H3.125C2.77982 10.625 2.5 10.3452 2.5 10Z" fill="whiteF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.5C10.3452 2.5 10.625 2.77982 10.625 3.125V16.875C10.625 17.2202 10.3452 17.5 10 17.5C9.65482 17.5 9.375 17.2202 9.375 16.875V3.125C9.375 2.77982 9.65482 2.5 10 2.5Z" fill="white"/>
      </svg>`;
    this.innerHTML = followIcon.outerHTML + ' Follow';
  }
});