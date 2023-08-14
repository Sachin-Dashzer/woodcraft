const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});


function circlefollow() {

    window.addEventListener('mousemove', function (dets) {
        document.querySelector('#circle').style.transform = `translate(${dets.clientX}px,  ${dets.clientY}px)`;
    })

}


function frontanim() {

    var tl = gsap.timeline();

    tl.from("nav", {

        y: '-10',
        opacity: 0,
        duration: 1.8,
        ease: Expo.easeInOut,
        delay: .2
    })

        .to(".effecte", {
            y: '0',
            duration: 2,
            delay: -1.8,
            ease: Expo.easeInOut,
            stagger: .2
        })
        .to(".effectd", {

            y: '0',
            duration: 1.8,
            delay: -2,
            ease: Expo.easeInOut
        })

}


function naveffect() {

    let menubtn = document.querySelector("#menubtn");

    menubtn.addEventListener('click', function () {

        this.style.display = "none";
        gsap.from("#menubar", {
            y: -100,
            duration: 2,
            delay: -1,
            opacity: 0,
            // ease : Expo.easeInOut
        })
        document.querySelector("#menubar").style.display = "flex";
    })
}


document.querySelectorAll("#page .box").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  



circlefollow();
frontanim();
naveffect();




















function displaytime() {

    let datetime = new Date();
    let ghanta = datetime.getHours();
    let munute = datetime.getMinutes();
    var session = "AM";

    if (ghanta >= 12) {
        session = "PM"
        ghanta = ghanta % 12;
    }



    document.querySelector('#hrs').innerHTML = ghanta;
    document.querySelector('#mints').innerHTML = munute;
    document.querySelector('#session').innerHTML = session;
}

setInterval(displaytime, 10);