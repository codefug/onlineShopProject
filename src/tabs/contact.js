import { clearContent } from "../functions/clear";
import { additem } from "../functions/item";
import item1 from "../assets/mapImage/map.png";
function contactfunction(){
    const content=document.querySelector("#content");
    clearContent();
    additem(content,item1,"dev codefug","010-xxxx-xxxx","https://github.com/codefug/onlineShopProject","contact");
    // "contactitem","detaildescription","contactdescription"
    content.classList.add('contact');
}

export {contactfunction};