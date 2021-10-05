const contBtn = document.getElementById("controller-icon");
const linkList = document.getElementById("link-list");
const timelineNav = gsap.timeline();
function showHideNavbar() {
   if(!theSwitch) {
      timelineNav.to(linkList, {height:"85vh"})
      .from("#link-list ul li", {x:-50, opacity:0, stagger:{each:.5, amount:1, from:"end"}});
   }else{
      timelineNav.to(linkList, {height:"0vh"});
   }
  
}
contBtn.addEventListener("click", ()=>{
   showHideNavbar();
});
