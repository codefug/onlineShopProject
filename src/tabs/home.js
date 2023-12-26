import chzzk from '../assets/HomeImage/chzzkHomeImage.png'
import { clearContent } from '../functions/clear';

function homefunction(){
    clearContent();

    const content=document.querySelector("#content");
    const homeImage=new Image();
    const descriptiondiv1=document.createElement("div");
    descriptiondiv1.classList.add("subdescription");
    const descriptionh2 = document.createElement("h2");
    const descriptionp = document.createElement("p");
    const descriptiondiv2 = document.createElement("div");
    descriptiondiv2.classList.add("startDate");

    homeImage.src = chzzk;

    descriptionh2.textContent="Chzzk!";
    descriptionp.textContent="네이버판 트위치라고 봐도 무방할 정도로 UI의 기본 배치가 트위치와 유사하여 기존의 트위치 이용자들을 수용하기 쉽도록 설계되어있습니다. 트위치와 같은 세계적인 시스템이 되려는 네이버의 위대한 첫 걸음입니다!";
    descriptiondiv1.appendChild(descriptionh2);
    descriptiondiv1.appendChild(descriptionp);
    descriptiondiv2.textContent="2023-12-19" 
    descriptiondiv2.innerHTML+="<br>Beta-Service-Start!";
    content.appendChild(homeImage);
    content.appendChild(descriptiondiv1);
    content.appendChild(descriptiondiv2);
    content.classList.add('home');
}

export {homefunction};