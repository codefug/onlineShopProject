import {setloadingtime} from '../functions/loading.js'

function loadingfunction(){
    const loadingbackground = document.createElement("div");
    const loadingbody=document.createElement("div");
    const total =document.querySelector('body');
    loadingbackground.classList.add("loadingbackground");
    loadingbody.classList.add("loadingbody");

    loadingbody.textContent="Naver";
    loadingbackground.appendChild(loadingbody);

    total.appendChild(loadingbackground);

    setloadingtime();
}

export {loadingfunction};