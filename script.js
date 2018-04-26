function fetchFood(){
    fetch("http://linlines.dk/wordpress/wp-json/wp/v2/event/")
    .then(e => e.json())
    .then(showFood)
}

function showFood(data){
    console.log(data);
    data.forEach(showSingleFood)
}

function showSingleFood(aFood){
    console.log(aFood);
    let template = document.querySelector("#foodtemp").content;
    let clone = template.cloneNode(true);
    
    clone.querySelector("h1").textContent = aFood.title.rendered;
    
    clone.querySelector(".descript").textContent = aFood.content.rendered;
    
    clone.querySelector(".price span").textContent = aFood.acf.price;
    
    clone.querySelector(".venue").textContent = aFood.acf.venue;
    
    let foodlist = document.querySelector("#foodlist");
    foodlist.appendChild(clone);
    
    
};

fetchFood();