var resumeCtas = document.querySelectorAll('.resume-cta');

resumeCtas.forEach(resumeCta => {
    resumeCta.setAttribute('href', 'https://drive.google.com/file/d/1-Fy5xB9dxoB59Ywi9nNgrU5azkkjdnRm/view');
});

let projImgs = document.querySelectorAll('.proj-img');

let projectImgs = ["https://ik.imagekit.io/abduledits5/pfolioMe/ascend_thumb.png?updatedAt=1716746945751","https://ik.imagekit.io/abduledits5/pfolioMe/mathtrove_thumb.png?updatedAt=1716738142375", "https://ik.imagekit.io/abduledits5/pfolioMe/andr15_thumb.png?updatedAt=1716735500016", "https://ik.imagekit.io/abduledits5/pfolioMe/framer_thumb.png?updatedAt=1716736659216", "https://ik.imagekit.io/abduledits5/pfolioMe/penpot_thumb.png?updatedAt=1716735465871", "https://ik.imagekit.io/abduledits5/pfolioMe/am_thumb.png?updatedAt=1716736181494", "https://ik.imagekit.io/abduledits5/pfolioMe/win12_thumb.png?updatedAt=1716737774479"]
let projColors = ["#2a2ea7","#111111", "#006465", "#003f65","#005d4a","#161c30","#010a18"];
for (let i = 0; i < projectImgs.length; i++) {
    projImgs[i].style.backgroundImage = `url(${projectImgs[i]})`;
    projImgs[i].parentElement.style.backgroundColor = projColors[i];
}