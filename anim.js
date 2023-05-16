const textAnim = new SplitType(".text_anim", { types: 'lines,  words'});
// const lines = gsap.utils.toArray('.line');

// lines.forEach(line => {
//     gsap.to('.word',{
//      // yes, we can add it to an entire timeline!
//             y: 0 ,
//      scrollTrigger: {
//          Trigger: '.word',
//         start: "top 80%",
//           markers: true
//     },
     
//       stagger: 0.045,
//      delay: 0.2,
//      duration: 0.6,
//       ease: "circ.inOut"
//   });
      
// });

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
  stagger: 0.045,
  delay: 0.2,
  duration: 0.6,
  ease: "circ.inOut"
});


window.addEventListener("scroll",function () {
  var anims = document.querySelectorAll(".text_anim .line .word");

  for (var i = 0; i < anims.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = anims[i].getBoundingClientRect().top;
    var elementVisible = 70;

    if (elementTop < windowHeight - elementVisible) {
      gsap.to(anims[i],{
        // yes, we can add it to an entire timeline!
        y: 0,
        stagger: 0.045,
        delay: 0.2,
        duration: 0.6,
        ease: "circ.inOut"
    });
  }
}
});