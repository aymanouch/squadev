var containerController = document.getElementById("controller-icon");
let theSwitch = true;
function animeIcon(theSwitch) {
      const myTimeline = gsap.timeline();
      const elemnetsList = document.querySelector("#controller-icon").children;
      if(theSwitch) {
        myTimeline.to(elemnetsList[0], {width:"100%", rotate:"45deg", top:"50%"})
        .to(elemnetsList[1], { rotate:"-45deg", top:"50%"}, "-=.5");
      } else {
        myTimeline.to(elemnetsList[1], { rotate:"0deg", top:"55%"})
        .to(elemnetsList[0], {width:"50%", rotate:"0deg", top:"45%"}, "-=.5");
      }
}

containerController.addEventListener("click", ()=>{
    animeIcon(theSwitch);
    theSwitch=!theSwitch;
});