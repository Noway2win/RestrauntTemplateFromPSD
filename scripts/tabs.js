(function() {

const tabBtns = document.querySelectorAll(".page-six-tabs-head-item");
const tabContent = document.querySelectorAll(".page-six-tabs-content-item");

tabBtns.forEach((tabBtn, index) => {
    tabBtn.onclick = () => {
        tabChange(index)
    };
});

function tabChange(index){
    setActive(tabBtns, index);
    setActive(tabContent, index);
}

function setActive(array, index){
    for(let elem of array){
        elem.classList.remove('active');
    }
    array[index].classList.add('active');
}}());

const tabBtns = document.querySelectorAll(".page-six-tabs-head-item");
const tabContent = document.querySelectorAll(".page-six-tabs-content-item");

tabBtns.forEach((tabBtn, index) => {
    tabBtn.onclick = () => {
        tabChange(index)
    };
});

function tabChange(index){
    setActive(tabBtns, index);
    setActive(tabContent, index);
}

function setActive(array, index){
    for(let elem of array){
        elem.classList.remove('active');
    }
    array[index].classList.add('active');
}