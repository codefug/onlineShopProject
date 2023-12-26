function setloadingtime(){
    const loadingscreen = document.querySelector(".loadingbackground");
    window.onload=setTimeout(()=>{loadingscreen.setAttribute("style","display:none")},2000);
}

export {setloadingtime}