const textAnim = new SplitType(".text_anim", { types: 'lines,  words'});

function gsapAnimation(elm){
        elm.forEach(el => {
          gsap.to(el,{
            // yes, we can add it to an entire timeline!
            y: 0 ,
            scrollTrigger: {
              Trigger: el,
              start: "top top",
              markers: true
            },
            stagger: 0.045,
            delay: 0.2,
            duration: 0.6,
            ease: "circ.inOut"
          });
  
        });
       
}

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
