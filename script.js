// PRELOADER
const fadeOut = () => {
  const loading = document.querySelector('.parent-loader');
  loading.classList.add('fade');
}
window.addEventListener('load', fadeOut);
/*-------Sidenav-----*/
let sidemenu = document.getElementById("side-menu");
function openm(){
  sidemenu.style.right = "0";
}
function closem(){
  sidemenu.style.right = "-250px";
}
/*-------- DARKMODE--------*/
function darkmode(){
    let SetTheme = document.body;
    SetTheme.classList.toggle("dark-mode")
    let theme;
    if(SetTheme.classList.contains("dark-mode")){
        theme = "DARK";
    }else{
        theme = "LIGHT";
    }
    // save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
}
setInterval(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    if(GetTheme === "DARK"){
        document.body.classList = "dark-mode";
    }else{
        document.body.classList = "";
    }
}, );

/*-------Back to top--------*/
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click',() =>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
  


/*----------AUTO TYPING---------*/
let typed = new Typed(".auto-type", {
  strings: ["web development", "services","logo designing", "digital marketing", "SMM"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})

/*-------About--------*/
let tabs = document.querySelectorAll('.tabs__toggle'),
  contents = document.querySelectorAll('.tabs__content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    contents.forEach((content) => {
      content.classList.remove('is-active');
    });
    tabs.forEach((tab) => {
      tab.classList.remove('is-active');
    });
    contents[index].classList.add('is-active');
    tabs[index].classList.add('is-active');
  });
});
/*--------Recent project slider-------*/
const slideContainer = document.querySelector('.scontainer');
const slide = document.querySelector('.work-list');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.work');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;
const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
  slides = document.querySelectorAll('.work');
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = document.querySelectorAll('.work');
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();