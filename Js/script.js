const searchList = document.querySelector(".searchBox");
const inputBox = document.querySelector("input");
const suggBox = document.querySelector(".autocom-box");
let searchBtn = document.querySelector(".s_icon");
let menuBtn = document.querySelector(".menua");
document.querySelector('#menu-btn').onclick = () =>{
    menuBtn.classList.toggle('active');
}
window.onscroll = () =>{
    menuBtn.classList.remove('active');
}
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
    let url = 'https://www.google.com/search?q='+inputBox.value;
    window.open(url);
    /*window.open(url,'_self')*/
}