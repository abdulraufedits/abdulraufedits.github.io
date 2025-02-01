let themeCta = document.querySelector(".theme-cta");

themeCta.addEventListener("click", () => {
  document.documentElement.classList.toggle("second");
  themeCta.classList.toggle("dark");
  setTimeout(() => {
    changeDepart();
  }, 50);
  document.getElementById("surprise-txt-temp").style.display = "none";
});

window.addEventListener('scroll' , reveal);

var connectIcons = document.querySelectorAll('.connect-icon');
var connectTexts = document.querySelector('.connect-txt');

function reveal() {
  
  for (var i = 0; i < connectIcons.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = connectIcons[i].getBoundingClientRect().top;
    var revealPoint = -50; 

    if(revealTop < windowHeight - revealPoint){
      connectIcons[i].classList.add('show');
    } else {
      connectIcons[i].classList.remove('show');
    }
    if(connectIcons[i].classList.contains('show')){
      connectTexts.classList.add('show');
    } else {
      connectTexts.classList.remove('show');
    }
  }

}

// window.addEventListener('scroll', () => {
//   document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false);

let menuBtn = document.querySelector('.menu-icon');
let navList = document.querySelectorAll('.nav__list-item');
let navContent = document.querySelector('.nav-wrapper');
let navListItem = document.querySelectorAll('.nav__list-item a');

function menuActive(){
  menuBtn.addEventListener('click' ,function () {
    menuBtn.classList.toggle('menu_active');
    navContent.classList.toggle('menu_active');
    navList.forEach((navList) => navList.classList.toggle('menu_active'));
    themeCta.classList.toggle('menu_active');
  });
};

menuActive();

function menuInactive(){
  navListItem.forEach((navListItem) => navListItem.addEventListener('click' , function() {
    menuBtn.classList.remove('menu_active');
    navContent.classList.remove('menu_active');
    navList.forEach((navList) => navList.classList.remove('menu_active'));
    themeCta.classList.remove('menu_active');
  }));
};

menuInactive();

window.addEventListener('scroll' , revealProjects);

var projects = document.querySelectorAll('.project-sec');

function revealProjects() {
  
  for (var i = 0; i < projects.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = projects[i].getBoundingClientRect().top;
    var revealPoint = 200; 

    if(revealTop < windowHeight - revealPoint){
        projects[i].classList.add('reveal');
      }
    }
}