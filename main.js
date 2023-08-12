const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});


function circlefollow(){

    window.addEventListener('mousemove' , function(dets){
        document.querySelector('#circle').style.transform = `translate(${dets.clientX}px,  ${dets.clientY}px)`;
    })

}



circlefollow();


















function displaytime(){

    let datetime = new Date();
    let ghanta = datetime.getHours();
    let munute = datetime.getMinutes();
    var session = "AM";

    if(ghanta >= 12){
        session = "PM"
        ghanta = ghanta%12;
    }
    


    document.querySelector('#hrs').innerHTML = ghanta;
    document.querySelector('#mints').innerHTML = munute;
    document.querySelector('#session').innerHTML = session;
}

setInterval(displaytime , 10);