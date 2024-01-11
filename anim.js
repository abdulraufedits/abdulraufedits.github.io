const textAnim = new SplitType(".text_anim", { types: 'lines,  words'});


// gsapAnimation(document.querySelectorAll('.name .line .word'));
// gsapAnimation(document.querySelectorAll('.abt-p .line .word'));

gsap.to(document.querySelectorAll('.name .line .word'),{
  // yes, we can add it to an entire timeline!
  y: 0 ,
  stagger: 0.05,
  delay: 0.5,
  duration: 0.1,
  ease: "power4.out"
});

