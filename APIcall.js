//fetch the data

 async function getData(){
    let cards=document.querySelectorAll(".card");

    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    console.log(data.products);
    cards.forEach((element, i)=>{
        console.log(element);
    element.getElementsByTagName("img")[0].src = data.products[i].images[0];
    element.getElementsByTagName("span")[0].innerHTML = data.products[i].title;
    element.getElementsByTagName("p")[0].innerHTML = data.products[i].description.slice(0, 10);
    element.getElementsByTagName("b")[0].innerHTML ="price : $"+  data.products[i].price;
    })
}
getData();
function addtocart(images, price){
    alert("added to cart");
    


}