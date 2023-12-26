import { clearContent } from "../functions/clear";
import item1 from '../assets/itemImage/kmkshirts.jpg';
import item2 from '../assets/itemImage/kmkslipper.jpg';
import item3 from '../assets/itemImage/okingfigure.jpg';
import item4 from '../assets/itemImage/okinghat.jpg';
import { additem } from "../functions/item";

function storefunction(){
    clearContent();
    const content=document.querySelector("#content");
    const itemlist = [item1,item2,item3,item4];
    const descriptionlist=[["교팔티","10000원","품절 임박! 초 특가 상품, 지금이 아니면 구매할 수 없습니다."],
    ["교리퍼","10000원","품절 임박! 맨날 신을 수 있어 가성비 제품입니다! 놓치지 마세요!"],
["오킹피규어","10000원","자주 나오지만 늘 볼 수 없는 제품! 언제 다시 올지 몰라요!"],
["오킹모자","10000원","평범한 군밤모자가 아니다! 오킹이 추천하는 최강의 가성비"]];

    itemlist.forEach((element,index)=>{
        additem(content,element,descriptionlist[index][0],
            descriptionlist[index][1],descriptionlist[index][2]);
    });
    content.classList.add('store');
}
export {storefunction};