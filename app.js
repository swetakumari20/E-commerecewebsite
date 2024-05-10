// let user = [
//     {
//         'name':'ws',
//         'email':'ws@gmail.com',
//         'phone':'3576778980'
//     },
//     {
//         'name':'shweta',
//         'email':'email',
//         'phone':'3445643792'
//     }
// ]

// localStorage.setItem("name", JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem("name")));
// let l = [10, 20, 30, 40];
// console.log(l);
// l.splice(2, 1);
// console.log(l);

let form = document.querySelector("form");
let main = document.querySelector(".main");
let clear = document.querySelector("#cAll");


// console.log(form);
form.addEventListener("submit", (event)=>{
// alert("submit");
let name = event.target.uname.value;
// console.log(name);
let email = event.target.email.value;
let password = event.target.password.value;
let checkStatus = 0;


let userData = JSON.parse(localStorage.getItem("userDetails")) ?? []; //null handle operator 
for(let v of userData){
    if(v.email.toLowerCase()==email.toLowerCase()){
        checkStatus =1;
        break;
    }

}
// console.log(checkStatus);
if(checkStatus==1){
    alert("email and phone already exist");
}
else{
    console.log(userData); 
    userData.push({
        'name':name,
        'email':email,
        'password':password
    })
    localStorage.setItem("userDetails", JSON.stringify(userData))
event.target.reset();
// console.log(userData);
// console.log(name, email, phone);
}




displayData();

event.preventDefault();
// console.log(event);
})
//to display data logic

let displayData = ()=>{
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    // console.log(userData);
    let finalData = '';
    userData.forEach((element, i) => {
        console.log(element.name);
        finalData+=`
        <div class="items">
        <span onclick='removeData(${i})'>&times</span>
<h5>name</h5>
<div>${element.name}</div>
<h5>gmail</h5>
<div>${element.email}</div>
<h5>phone</h5>
<div>${element.password}</div>

    </div>
        `
    });
console.log(finalData);
main.innerHTML=finalData;
}

let removeData= (index)=>{
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    // console.log(userData);
    // alert(index);
    userData.splice(index, 1);
    localStorage.setItem("userDetails", JSON.stringify(userData))
    displayData();
}
cAll.addEventListener('click', ()=>{
    localStorage.clear("userDetails");
    displayData();
})
displayData();