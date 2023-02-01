// const body = document.body,
//     jsScroll = document.getElementsByClassName('js-scroll')[0],
//     height = jsScroll.getBoundingClientRect().height - 1,
//     speed = 0.07

// var offset = 100;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll(){
//     offset += (window.pageYOffset - offset) * speed
//     var scroll = "translateY(-"+offset +"px) translateZ(0)"
//     jsScroll.style.transform = scroll;

//     raf = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let scrollFunc = ScrollTrigger.getScrollFunc(window),
    scroll, scroll2;


// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  smooth: 2,   // seconds it takes to "catch up" to native scroll position
  effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
});

ScrollTrigger.addEventListener("refreshInit", () => {
  scroll = scrollFunc();
  scroll2 = smoother.scrollTop();
});
ScrollTrigger.addEventListener("refresh", () => {
  console.log(scroll, scroll2);
  smoother.scrollTop(scroll2);
})