const iconTop= document.getElementById("scrollTop");
iconTop.addEventListener("click", function(){
    //start scroll top animation
    gsap.to('html, body', {scrollTop:0, duration:1.5});

});

const linksTop = document.getElementsByClassName("linksTop");
for(let i = 0; i<linksTop.length; i++) {
    linksTop[i].addEventListener("click", function() {
        console.log(`#${this.getAttribute("data-scroll")}`);    
        const whereIgo = document.getElementById(`${this.getAttribute("data-scroll")}`);
        console.log(whereIgo);
        gsap.to('html, body', {scrollTop:whereIgo.offsetTop, duration:1.5});
        if(window.innerWidth <=780) {
            animeIcon(theSwitch);
            theSwitch = !theSwitch;
            showHideNavbar();
        }
        
    });
}
function getDateNow() {
    const d=new Date();
    let dayName = d.toLocaleDateString('locale', { weekday: 'long' });
    let hourNow = d.getHours();
    let minuteNow = d.getMinutes();
    console.log(`${dayName} ${hourNow}:${minuteNow}`);
    document.getElementById('lastDate').innerText= `${dayName} ${hourNow}:${minuteNow}`;
}
getDateNow();