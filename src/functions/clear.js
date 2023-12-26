function clearContent(){
    const content=document.querySelector('#content');
    content.removeAttribute("class");
    content.innerHTML="";
}
export {clearContent};