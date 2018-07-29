var btn1 = document.getElementById("btn1");
var btm2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.getElementsByClassName("close")[0];
var age = 

console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);

function addItem(){
    var newLi = document.createElement("li");
    newLi.innerHTML = "Новая задача!";
    newLi.className = "item";
    myList.appendChild(newLi);
    
    if(story.length > 0){
        popup.style.display = "none";
    }
}

function deleteItem(){
    myList.removeChild(story[0]);   
    
    if(story.length == 0){
        popup.style.display = "block";
    }
}

function closePopup() {
    popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", deleteItem);
close.addEventListener("click", closePopup);




















