let themeCta = document.querySelector(".theme-cta");

themeCta.addEventListener("click", e => {
  e.preventDefault();
  document.documentElement.classList.toggle("second");
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

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

let menuBtn = document.querySelector('.menu-icon');
let navList = document.querySelectorAll('.nav__list-item');
let navContent = document.querySelector('.nav-content');
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

var clientName = document.getElementById('name');
var issue = document.getElementById('client-issue');
var email = document.getElementById('email');
var flag = 1;

function validateForm() {
  if(clientName.value == ""){
    clientName.style.setProperty('border-color', 'red');
    clientName.style.setProperty('border-width', '1.3px');
    flag = 0;
  } else{flag = 1;}

  if(issue.value == ""){
    issue.style.setProperty('border-color', 'red');
    issue.style.setProperty('border-width', '1.3px');
    flag = 0;
  } else{flag = 1;}

  if(email.value == ""){
    email.style.setProperty('border-color', 'red');
    email.style.setProperty('border-width', '1.3px');
    flag = 0;
  } else{flag = 1;}
  
  if(flag){
    return true;
  } else{
    return false;
  }
}