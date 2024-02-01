var resumeCtas = document.querySelectorAll('.resume-cta');

resumeCtas.forEach(resumeCta => {
    resumeCta.setAttribute('href', 'https://drive.google.com/file/d/1P8opQQe7mnQuVHNhbmL6Peb-rqwR2n_s/view?usp=sharing');
});

let projImgs = document.querySelectorAll('.proj-img');

let projectImgs = ["https://ik.imagekit.io/abduledits5/pfolioMe/mathtrove_thumb.png", "https://ik.imagekit.io/abduledits5/pfolioMe/andr15_thumb.png", "https://ik.imagekit.io/abduledits5/pfolioMe/framer_thumb.png", "https://ik.imagekit.io/abduledits5/pfolioMe/penpot_thumb.png", "https://ik.imagekit.io/abduledits5/am_1.png", "https://ik.imagekit.io/abduledits5/thumbnail.png"]

for (let i = 0; i < projectImgs.length; i++) {
    projImgs[i].style.backgroundImage = `url(${projectImgs[i]})`;
}