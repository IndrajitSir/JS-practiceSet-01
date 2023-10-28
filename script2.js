var rect = document.querySelector("#rect");
window.addEventListener("mousemove",function(details){
    let yval = gsap.utils.mapRange(0, window.innerHeight, 200, window.innerHeight-200, details.clientY);
    gsap.to(rect,{
        top: yval + "px",
        ease: Power4,
    });
});
