let abtImg = document.getElementById('abt--img');

abtImg.setAttribute("src","https://ik.imagekit.io/abduledits5/new_avi.jpg");

var resumeCtas = document.querySelectorAll('.resume-cta');

resumeCtas.forEach(resumeCta => {
    resumeCta.setAttribute('href', 'https://drive.google.com/file/d/1-mEt484xd8kgg1HROkMxMibXbZBm8GCF/view?usp=sharing');
});

let projImgs = document.querySelectorAll('.proj-img');

let projectImgs = ["https://ik.imagekit.io/abduledits5/thumb.png", "https://ik.imagekit.io/abduledits5/framer_thumb.png", "https://ik.imagekit.io/abduledits5/thumb_penpot.png", "https://ik.imagekit.io/abduledits5/am_1.png"]

for (let i = 0; i < projectImgs.length; i++) {
    projImgs[i].style.backgroundImage = `url(${projectImgs[i]})`;
}