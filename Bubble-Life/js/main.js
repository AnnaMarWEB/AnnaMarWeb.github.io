"use strict";
let products=[
    {
        id:1,
        name:"Yogurt",
        price:15,
        img:"url(img/front-view-assortment-healthy-breakfast-meal-with-yogurt.jpg)",
    },
    {
        id:2,
        name:"Yogurt",
        price:20,
        img:"url(img/healthy-breakfast-meal-with-yogurt.jpg)"
    },
    {
        id:3,
        name:"Smoothie",
        price:20,
        img:"url(img/front-view-smoothie-bottles-with-hyacinth.jpg)"
    },
    {
        id:4,
        name:"Smoothie with boba",
        price:25,
        img:"url(img/img2.jpg)"
    },
    {
        id:5,
        name:"Bubble tea",
        price:25,
        img:"url(img/0d59837e5ed10dddae084ffaab8ef93c.jpg)"
    },
    {
        id:6,
        name:"Bubble tea",
        price:20,
        img:"url(img/752476453849f9ad7e796f138a663125.jpg)"
    },
    {
        id:7,
        name:"Bubble tea",
        price:15,
        img:"url(img/img.jpg)"
    },
    {
        id:8,
        name:"Bubble tea",
        price:20,
        img:"url(img/minimalist-still-life-asian-tea.jpg)"
    },
    {
        id:9,
        name:"Bubble tea",
        price:15,
        img:"url(img/img1.jpg)"
    },
]
let productsContainer=document.querySelector("#products-container")
let productSearch=document.querySelector("#product-search");
let searchButton=document.querySelector("#button")
products.forEach(showProduct)

console.log(products)
searchButton.addEventListener("click", function(item){
    console.log(productSearch.value);
    let filterProduct=products.filter(function(item){
        return item.name.toLocaleLowerCase().includes(productSearch.value.toLocaleLowerCase())
    })
    console.log(filterProduct)
    clearProduct()
    filterProduct.forEach(showProduct)
    let filterPrice=products.filter(function(item){
        return item.price>=productSearch.value
    })
    filterPrice.forEach(showProduct)
    
})
function clearProduct(){
    productsContainer.innerHTML=""
}

function showProduct(item){
    console.log(productSearch.value)
    let productsCard=document.createElement("div");
    productsCard.className="products-card";
    productsContainer.append(productsCard);
    let productImg=document.createElement("div");
    productImg.className="product-img";
    productsCard.append(productImg);
    productImg.style.backgroundImage=item.img;
    productsCard.innerHTML+=`
    <p>${item.name}</p>
    <P> Price-${item.price} $</p>
    `
}