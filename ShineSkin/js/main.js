"use strict";


let productList=[
    {
        id: 1,
        name:"Moisturizer",
        brand:"Some by mi",
        components:"AHA BHA PHA acids",
        format:"60 ml",
        price: 105,
        for:"For all skin types",
        effect: "Anti acne",
        country:"South Korea",
        type:"Universal",
        items:1,
        img:"url(img/0003474_some-by-mi-aha-bha-pha-30-days-miracle-truecica-clear-pad.jpeg)"
    },
    {
        id: 2,
        name:"Serum",
        brand:"Some by mi",
        components:"AHA BHA PHA acids",
        format:"50 ml",
        price: 95,
        for:"For all skin types",
        effect: "Anti acne",
        country:"South Korea",
        type:"Universal",
        items:1,
        img:"url(img/0000946_some-by-mi-aha-bha-pha-30-days-miracle-serum.jpeg)"
    },
    {
        id: 3,
        name:"Toner",
        brand:"Some by mi",
        components:"AHA BHA PHA acids",
        format:"150 ml",
        price: 115,
        for:"For all skin types",
        effect: "Anti acne",
        country:"South Korea",
        type:"Universal",
        items:1,
        img:"url(img/tonner.jpg)"
    },
    {
        id: 4,
        name:"Cleansing bar",
        brand:"Some by mi",
        components:"AHA BHA PHA acids",
        format:"106 ml",
        price: 55,
        for:"For all skin types",
        effect: "Anti acne",
        country:"South Korea",
        type:"Universal",
        items:1,
        img:"url(img/cleansingbar.jpg)"
    },
    {
        id: 5,
        name:"Kit",
        brand:"Some by mi",
        components:"AHA BHA PHA acids",
        format:"Samples",
        price: 269,
        for:"For all skin types",
        effect: "Anti acne",
        country:"South Korea",
        type:"Universal",
        items:4,
        img:"url(img/kit.jpg)"
    },
    {
        id: 6,
        name:"Serum",
        brand:"Caudalie",
        format:"30 ml",
        price: 50,
        for:"Dry skin",
        effect: "Anti age",
        country:"France",
        type:"Universal",
        items:1,
        img:"url(img/caudalie-resveratrol-lift-instant-firming-serum-501395.webp)"
    },
    {
        id: 7,
        name:"Moisturizer",
        brand:"Caudalie",
        format:"50 ml",
        price: 45,
        for:"For all skin types",
        effect: "Anti acne",
        country:"France",
        type:"Night",
        items:1,
        img:"url(img/TSK4L_es_ES_0.webp)"
    },
    {
        id: 8,
        name:"Serum",
        brand:"Vichy",
        components:"Hialuronic acids",
        format:"50 ml",
        price:30,
        for:"Dry skin",
        effect: "Plumps skin",
        country:"France",
        type:"Universal",
        img:"url(img/vichy.jpg)"
    },
    {
        id:9,
        name:"Moisturizer",
        brand:"Vichy",
        format:"60 ml",
        price:45,
        for:"For all skin types",
        effect: "Anti age",
        country:"France",
        type:"Day",
        img:"url(img/Vichy-LiftActiv-Supreme-Firming-Anti-Aging-Moisturizer-3337871328795-PDP-1.jpg)"
    },
    {
        id:10,
        name:"Lotion",
        brand:"Clinique",
        format:"60 ml",
        price:48,
        for:"For all skin types",
        effect: "Uneven skin tone",
        country:"USA",
        type:"Universal",
        img:"url(img/542272_1_1691761543.webp)"
    },
    {
        id:11,
        name:"Cleansing bar",
        brand:"Clinique",
        format:"100 ml",
        price:20,
        for:"For all skin types",
        effect: "Anti acne",
        country:"USA",
        type:"Universal",
        img:"url(img/cleansingbar2.jpg)"
    },
    {
        id:12,
        name:"Mask",
        brand:"Some by mi",
        components:"Centella",
        format:"20 ml",
        for:"For all skin types",
        effect: "Calming",
        country:"South Korea",
        type:"Universal",
        img:"url(img/images.jpg)"
    },
    {
        id:13,
        name:"Cleanser",
        brand:"Bioderma",
        components:"Micelar water",
        format:"300 ml",
        price:20,
        for:"For sensitive skin",
        effect: "Cleaning",
        country:"France",
        type:"Night",
        img:"url(img/350x350.jpg)"
    },
    {
        id:14,
        name:"Lotion",
        brand:"Bioderma",
        components:"Centella",
        format:"40 ml",
        price:29,
        for:"For sensitive skin",
        effect: "Soothing",
        country:"France",
        type:"Night",
        img:"url(img/41bP1MWruzL._SL1000_.jpg)"
    },
    {
        id:15,
        name:"Mask",
        brand:"Bioderma",
        components:"Centella",
        format:"75 ml",
        price:28,
        for:"For all skin types",
        effect: "Soothing",
        country:"France",
        type:"Universal",
        img:"url(img/61MzUj3qWqL._SL1500_.jpg)"
    },
    {
        id:16,
        name:"Kit",
        brand:"Dr.Ceuracle",
        components:"Centella",
        format:"250 ml",
        price:40,
        for:"For all skin types",
        effect: "Anti acne",
        country:"South Korea",
        type:"Universal",
        img:"url(img/ph8zfkz8w5xl8b64bls0wvng0d7l1sfm.jpeg)"
    },
    {
        id:17,
        name:"Kit",
        brand:"Dr.Ceuracle",
        components:"Centella",
        format:"305 ml",
        price:45,
        for:"For all skin types",
        effect: "Soothing",
        country:"Republic of Korea",
        type:"Universal",
        img:"url(img/dr.C.jpg)"
    },
    {
        id:18,
        name:"Moistrizer",
        brand:"Dr.Ceuracle",
        components:"Centella",
        format:"75 ml",
        price:45,
        for:"For all skin types",
        effect: "Anti age",
        country:"South Korea",
        type:"Universal",
        img:"url(img/dr.ceuracle-vegan-active-berry-lifting-cream-18479274807232.jpeg)"
    },
    {
        id:19,
        name:"SPF",
        brand:"Avene",
        components:"Centella",
        format:"40 ml",
        price:29,
        for:"Sensitive skin",
        effect: "Anti age",
        country:"France",
        type:"Day",
        img:"url(img/Avene-Sunscreen-Aquafluid-S-P-F5040ml-For-Sensitive-Skin_1.webp)"
    },
    {
        id:20,
        name:"Moistrizer",
        brand:"Avene",
        components:"Centella",
        format:"75 ml",
        price:30,
        for:"For all skin types",
        effect: "Calming",
        country:"France",
        type:"Universal",
        img:"url(img/e0er6ubiukdov6zxigtuadkguxkt1yjs.webp)"
    },
    {
        id:21,
        name:"SPF",
        brand:"Too cool for school",
        components:"Centella",
        format:"80 ml",
        price:45,
        for:"For all skin types",
        effect: "Anti age",
        country:"South Korea",
        type:"Universal",
        img:"url(img/o3rz5a3yiry9km6843bt1jphn3z0n8kh.jpg)"
    },
]
productList.forEach(showProduct)

console.log(productList)
let headerImg=document.querySelector("#headerimg");
let aboutLeaves=document.querySelector("#about-leaves");
let products=document.querySelector("#Products")
let dropdownSelect=document.querySelector(".dropdown-select")
let productSearch=document.querySelector("#product-search");
let searchButton=document.querySelector("#search-button");
let filterButton=document.querySelector("#filter-button");
let pName=document.querySelector("#Pname");
let pBrand=document.querySelector("#Pbrand");
let skinType=document.querySelector("#skin-type");
let productCountry=document.querySelector("#Pcountry");
let productType=document.querySelector("#type");
let productEffect=document.querySelector("#effect")
let workTime=document.querySelector(".work-time");
let menuBtn=document.querySelector("#button")
window.addEventListener("scroll", function(){
    let value=window.scrollY;
    headerImg.style.left= value * -2 + "px";
    aboutLeaves.style.right=value*-1+"px"
})
searchButton.addEventListener("click",function(item){
    let filterName=productList.filter(function(item){
        return item.name.toLocaleLowerCase().includes(productSearch.value.toLocaleLowerCase())
    })
    cleanproduct()
    filterName.forEach(showProduct)
    let filterBrand=productList.filter(function(item){
        return item.brand.toLocaleLowerCase().includes(productSearch.value.toLocaleLowerCase())
    })
  
    filterBrand.forEach( showProduct)
        
})
filterButton.addEventListener("click",function(item){
    let filterAll=productList.filter(function(item){
        return item.name.toLocaleLowerCase().includes(pName.value.toLocaleLowerCase()) &&
        item.brand.toLocaleLowerCase().includes(pBrand.value.toLocaleLowerCase()) &&
        item.for.toLocaleLowerCase().includes(skinType.value.toLocaleLowerCase()) &&
        item.country.toLocaleLowerCase().includes(productCountry.value.toLocaleLowerCase()) &&
        item.effect.toLocaleLowerCase().includes(productEffect.value.toLocaleLowerCase()) &&
        item.type.toLocaleLowerCase().includes(productType.value.toLocaleLowerCase())
    })
    cleanproduct()
    filterAll.forEach(showProduct)
})
let d=new Date();
    let workDay=d.getDay()
    let time=d.getHours()
    if(workDay>=1 && workDay<=5 && time>=9 && time<18){
        workTime.innerHTML="Now: Open"
}else{
    workTime.innerHTML="Now: Closed"
}
function showProduct(item){
    let productCard=document.createElement("div");
    productCard.className="product-card";
    Products.append(productCard);
    let productsImg=document.createElement("div");
    productsImg.className="products-img";
    productCard.append(productsImg);
    productsImg.style.backgroundImage=item.img;
    productCard.innerHTML+=`
    <p>${item.name}-${item.brand}</p>
    <p>${item.format}</p>
    <p> Price-${item.price}$</p>`
}
function cleanproduct(){
    products.innerHTML=""
}
function menuOpen(){
    if(dropdown.style.display=="none"){
        dropdown.style.display="block"
    }else{
        dropdown.style.display="none"
    }
}
function menuOpen2(){
    if(dropdownSelect.style.display=="none"){
        dropdownSelect.style.display="block"
    }else{
        dropdownSelect.style.display="none"
    }
}