function additem(div,image,name,price,description,type){
    const newdescription = document.createElement("a");
    newdescription.href="";
    const newdescriptiondiv=document.createElement("div");
    const newdescriptionh2=document.createElement("h2");
    const newdescriptionp1=document.createElement("p");
    const newdescriptionp2=document.createElement("p");
    const newItem = itemObject(name,price,description);
    let category;
    putDetailIntoItem(newItem,newdescriptionh2,newdescriptionp1,newdescriptionp2);
    if (type=="store"){
        category=["storeitem","itemdescription","storedescription"]
    }else if (type=="streamer"){
        category=["streameritem","streamerdescription","profiledescription"]    
    }
    const newImage = new Image();
    newImage.src=image;
    newImage.classList.add(category[0]);
    
    newdescriptiondiv.appendChild(newdescriptionh2);
    newdescriptiondiv.appendChild(newdescriptionp1);
    newdescriptiondiv.appendChild(newdescriptionp2);
    newdescriptiondiv.classList.add(category[1]);

    newdescription.appendChild(newImage);
    newdescription.appendChild(newdescriptiondiv);

    newdescription.classList.add(category[2]);
    div.appendChild(newdescription);
}

function itemObject(name,price,description){
    return {name,price,description};
}

function putDetailIntoItem(object,h2,p1,p2){
    h2.textContent=object.name;
    p1.textContent=object.price;
    p2.textContent=object.description;
}

export {additem}