import './styles/contact.css';
import './styles/loading.css';
import './styles/store.css';
import './styles/streamer.css';
import './styles/style.css';
import './styles/home.css';
import item1 from './assets/itemImage/kmkshirts.jpg';
import item2 from './assets/itemImage/kmkslipper.jpg';
import item3 from './assets/itemImage/okingfigure.jpg';
import item4 from './assets/itemImage/okinghat.jpg';
import {clicktab} from './functions/tabaction.js';
import {loadingfunction} from './tabs/loading.js';
import {homefunction as home} from './tabs/home.js' 

const startpage = (function () {
    const sidebarImage = document.querySelectorAll('.sideImage');
    const zip = (...arrays) => arrays[0].map((_, i) => arrays.map(array => array[i]));
    // 첫번째 배열의 각 인덱스에다가 모든 배열에서 첫번쨰 배열의 현재 인덱스 값에
    // 해당하는 원소를 꺼내서 배열을 만들어서 저장
    const zipped = zip([item1, item2, item3, item4], sidebarImage);

    loadingfunction();

    Array.from(zipped).forEach((element) => { element[1].src = element[0] });

    clicktab();

    home();
})();