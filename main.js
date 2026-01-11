

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent = (scrollTop / scrollHeight) * 100;

  document.querySelector(".progress-bar").style.width =
    scrollPercent + "%";
});



const cursor = document.querySelector(".cursor");

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // Delay amount (smaller = more delay)
  currentX += (mouseX - currentX) * 1;
  currentY += (mouseY - currentY) * 1;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate();



const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementsByClassName("hamburger")[0];
  const close = document.getElementsByClassName("close")[0];
  const floatingBox = document.getElementsByClassName("floating-menu-window")[0];

  floatingBox.addEventListener("click", () => {
    floatingBox.style.right = "100%";
    hamburger.style.display = "block";
    close.style.display = "none";
  })

  hamburger.addEventListener("click", () => {
    floatingBox.style.right = "0";
    hamburger.style.display = "none";
    close.style.display = "block";
  });

  close.addEventListener("click", () => {
    floatingBox.style.right = "100%";
    hamburger.style.display = "block";
    close.style.display = "none";
  });
});


const breakpoint = 1150;
let wasAbove = window.innerWidth >= breakpoint;

window.addEventListener("resize", () => {
  const isAbove = window.innerWidth >= breakpoint;

  if (isAbove !== wasAbove) {
    wasAbove = isAbove;
    location.reload();
  }
});


const themeSwitch = document.querySelector(".theme-toggle");
const lighticon = document.querySelector(".lighticon")

// Page load pe theme check
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

// Click toggle
themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark")

  
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});



