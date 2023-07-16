// toggle style switcher

const styleSwitchToggle=document.querySelector(".style-switcher-toggler");
styleSwitchToggle.addEventListener("click",()=>{
    
   document.querySelector(".style-switcher").classList.toggle("open");
});


// / hide style switcher on scroll


window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// theme colors

const alternateStyles=document.querySelectorAll(".alternate-style");

function setActiveStyle(color)
{
    console.log("hello")
    alternateStyles.forEach((style)=>{
        if(color==style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");

        }
    })
}

// ==================theme dark and light

const dayNight=document.querySelector(".day-night");


dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})





window.addEventListener("load",()=>{
    
    if(document.body.classList.contains("dark"))
    {console.log("hello");
        dayNight.querySelector("i").classList.add("fa-sun");

    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})