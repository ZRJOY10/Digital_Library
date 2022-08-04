const searchList = document.querySelector(".searchBox");
const inputBox = document.querySelector("input");
const suggBox = document.querySelector(".autocom-box");
let searchBtn = document.querySelector(".s_icon");
let input = document.getElementById("inputValue");


let menuBtn = document.querySelector(".menua");
document.querySelector('#menu-btn').onclick = () =>{
    menuBtn.classList.toggle('active');
    userBtn.classList.remove('active');
    impoBtn.classList.remove('active');
}

let userBtn = document.querySelector(".user");
document.querySelector('#user-btn').onclick = () =>{
    userBtn.classList.toggle('active');
    menuBtn.classList.remove('active');
    impoBtn.classList.remove('active');
}

let impoBtn = document.querySelector(".ImportantLink");
document.querySelector('#impBtn').onclick = () =>{
    impoBtn.classList.toggle('active');
    userBtn.classList.remove('active');
}

let scrollTop = document.querySelector(".scroll");
scrollTop.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
});

window.onscroll = () =>{
    menuBtn.classList.remove('active');
    userBtn.classList.remove('active');
    impoBtn.classList.remove('active');
}

let valueDisplay = document.querySelectorAll(".num");
let interval = 1000;
valueDisplay.forEach((valueDisplay) =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue +=7;
        valueDisplay.textContent = startValue;
        if(startValue >= endValue ){
            clearInterval(counter);
            valueDisplay.textContent = endValue;   
        }
    },duration);
});

inputBox.onkeyup = (e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
        searchList.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll('li');
        for(let i=0;i< allList.length ; i++){
            allList[i].setAttribute("onclick","select(this)");
        }
    }
    else{
        searchList.classList.remove("active");
    }
}

function select(element){
    let selectUserData = element.textContent
    inputBox.value = selectUserData;
    let url = 'https://www.google.com/search?q='+selectUserData;
    window.open(url);
    searchList.classList.remove("active");
}


function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue + '</li>';
    }
    else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

searchBtn.onclick = function(){
    let searchBy = document.querySelector(".searchBy");
    let searchIn = searchBy.options[searchBy.selectedIndex].value;
    if(inputBox.value == '' || inputBox.value == ' '){
        let warn = document.querySelector(".filter p");
        warn.classList.toggle("active");
    }
    else{
    if(searchIn == 'Google Search'){
    let url = 'https://www.google.com/search?q='+inputBox.value;
    window.open(url);
    }
    else{
        let url = 'https://www.google.com/search?q='+inputBox.value+'+'+searchIn;
        window.open(url);
            
    }}
    /*window.open(url,'_self')*/
}

input.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        event.preventDefault();
        searchBtn.click();
    }
});