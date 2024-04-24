const textAnim1 = new SplitType(".text_anim", { types: 'lines'});
const textAnim2 = new SplitType(".p-text-anim", { types: 'lines'});



gsap.to('.line > *',{
  // yes, we can add it to an entire timeline!
  y: 0 ,
  stagger: 0.1,
  delay: 0.3,
  duration: 0.5,
  ease: "sine.out"
});

gsap.from('.proj-h1', {
  scrollTrigger: {
    trigger: ".proj-h1",
    start: "top 80%",
    end: "bottom center",
    scrub: true
  },
  opacity: 0,
  y: 100,
  delay: 0.5,
  duration: 0.5,
  ease: "sine.out"
})