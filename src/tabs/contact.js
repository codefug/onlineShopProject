import { clearContent } from "../functions/clear";
function contactfunction(){
    const content=document.querySelector("#content");
    clearContent();

    
    content.classList.add('contact');
}

export {contactfunction};