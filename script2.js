var secondRect = document.querySelector("#second");

secondRect.addEventListener("mousemove",function(details){
    var rectLoc = secondRect.getBoundingClientRect();
    var insideRectLoc = details.clientY - rectLoc.top;

    if(insideRectLoc < rectLoc.height/2)
    {
        var greenColor = gsap.utils.mapRange(0, rectLoc.height/2, 255, 0, insideRectLoc);
        gsap.to(secondRect,{
            backgroundColor: `rgb(0,${greenColor},0)`,
            ease : Power4,
        });
    }
    else{
        var blueColor = gsap.utils.mapRange(rectLoc.height/2, rectLoc.height, 0, 255, insideRectLoc);
        gsap.to(secondRect,{
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease : Power4,
        });
    }

});

secondRect.addEventListener("mouseleave",function(){
    gsap.to(secondRect,{
        backgroundColor : "white",
    })

});
