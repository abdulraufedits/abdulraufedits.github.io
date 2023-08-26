let proj5 = document.getElementById("project--5");
let proj4 = document.getElementById("project--4");
let proj3 = document.getElementById("project--3");
let proj2 = document.getElementById("project--2");
let proj1 = document.getElementById("project--1");

let proj6 = document.getElementById("project--6");
let proj7 = document.getElementById("project--7");

proj1.style.setProperty('background-image', 'url(https://ik.imagekit.io/abduledits5/melodica_thumb.png)');
proj2.style.setProperty('background-image', 'url(https://ik.imagekit.io/abduledits5/thumbnail.png)');
proj3.style.setProperty('background-image', 'url(https://ik.imagekit.io/abduledits5/ades_thumb.png)');
proj4.style.setProperty('background-image', 'url(https://ik.imagekit.io/abduledits5/am_1.png)');
proj5.style.setProperty('background-image', 'url(https://ik.imagekit.io/abduledits5/thumb_penpot.png)');
proj6.style.setProperty('background-image', 'url(https://ik.imagekit.io/abduledits5/framer_thumb.png)');
proj7.style.setProperty('background-image', 'url(https://ik.imagekit.io/abduledits5/thumb.png)');

let abtImg = document.getElementById('abt--img');
let avi = document.querySelector(".devpic");

abtImg.setAttribute("src","https://ik.imagekit.io/abduledits5/new_avi.jpg");

var resumeCtas = document.querySelectorAll('.resume-cta');

resumeCtas.forEach(resumeCta => {
    resumeCta.setAttribute('href', 'https://drive.google.com/file/d/1-mEt484xd8kgg1HROkMxMibXbZBm8GCF/view?usp=sharing');
});