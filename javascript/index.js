const iconTop= document.getElementById("scrollTop");
iconTop.addEventListener("click", function(){
    //start scroll top animation
    gsap.to('html, body', {scrollTop:0, duration:1.5});

});