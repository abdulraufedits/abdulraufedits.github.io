const textAnim = new SplitType(".text_anim", { types: 'lines,  words'});


// gsapAnimation(document.querySelectorAll('.name .line .word'));
// gsapAnimation(document.querySelectorAll('.abt-p .line .word'));

gsap.to(document.querySelectorAll('.name .line .word'),{
  // yes, we can add it to an entire timeline!
  y: 0 ,
  stagger: 0.039,
  delay: 0.2,
  duration: 0.4,
  ease: "circ.inOut"
});