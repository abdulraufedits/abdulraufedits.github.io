const textAnim1 = new SplitType(".text_anim", { types: 'lines,  words'});
const textAnim2 = new SplitType(".p-text-anim", { types: 'lines words'});



gsap.to('.word',{
  // yes, we can add it to an entire timeline!
  y: 0 ,
  stagger: 0.05,
  delay: 0.5,
  duration: 0.5,
  ease: "sine.out"
});
gsap.to(".ctas", {
  y: 0,
  opacity: 1,
  delay: 1.2,
  duration: 0.5,
  ease: "sine.out"
})
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".proj-h1",
    start: "top 80%",
    end: "bottom center",
    scrub: true
  }
})

tl.to(".proj-h1", {
  opacity: 1,
  y: 0
})
tl.to(".project-sec", {
  opacity: 1,
  y: 0
})