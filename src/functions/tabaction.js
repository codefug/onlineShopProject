import { homefunction as home } from '../tabs/home.js';
import { contactfunction as contact } from '../tabs/contact.js';
import { storefunction as store } from '../tabs/store.js';
import { streamerfunction as streamer } from '../tabs/streamer.js';

function clicktab() {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((element) => {
        element.addEventListener("click", (event) => {
            checktab(event);
        })
    })
}

function checktab(event) {
    const zip = (...arrays) => arrays[0].map((_, i) => arrays.map(array => array[i]));
    const zipped = zip(["home", "store", "streamer", "contact"], [home, store, streamer, contact]);
    const result = zipped.filter((element) => element[0] == event.target.id);
    event.target.parentNode.childNodes.forEach((element, index) => {
        if (index % 2 == 1) {
            element.removeAttribute("class");
            element.classList.add("tab");
        }
    })
    event.target.classList.add("selected");
    return result[0][1]();
}

export { clicktab };