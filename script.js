// console.log("Welcome");

let Tittle=document.getElementById("title");

let Cart_page=document.getElementById("cart-page");

let List=document.getElementById("products");

Cart_page.addEventListener("click",()=>{
    Tittle.innerText="My Cart";
})

fetch("https://dummyjson.com/products")
    .then(response =>response.json())
    .then(data =>addProducts(data.products))

     .catch(error =>console.log(error))

function addProducts(itemList){
    itemList.forEach((product) =>{
        
    let product_card=document.createElement("div");
    product_card.className="card";

    product_card.innerHTML=`<img src="${product.thumbnail}">
                            <p>Tittle : ${product.title}</p>
                            <p>Price :$ ${product.price}</p>
                            <button>Add To Cart</button>`
        List.appendChild(product_card);
    });
}