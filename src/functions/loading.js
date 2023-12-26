function setloadingtime(){
    const loadingscreen = document.querySelector(".loadingbackground");
    window.onload=setTimeout(()=>{loadingscreen.setAttribute("style","display:none")},4000);
}

export {setloadingtime}