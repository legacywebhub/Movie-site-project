//Variable Declaration
const btn = document.getElementsByClassName("btn"),
    subList = document.getElementsByClassName("sub-list"),
    body = document.body,
    docElem = document.documentElement,
    btt = document.getElementById("btt"),
    menuBtn = document.getElementById('menu'),
    closeBtn = document.getElementById('close'),
    navList = document.getElementById('nav-list');
let offset, scrollPos, docHeight;


//Function Calls
dropDowns();
checkOffset();


//Event Listeners
window.addEventListener('scroll', scrollButton);
btt.addEventListener('click', scrollTop);
menuBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu)


//Function Declaration
function scrollTop(e) {
    body.scrollTop = 0;
    docElem.scrollTop = 0;
}

function scrollButton() {
    scrollPos = body.scrollTop || docElem.scrollTop;

    if (scrollPos > offset) {
        btt.style.visibility = 'visible';
    } else if  (scrollPos < offset) {
        btt.style.visibility = 'hidden';
    }
}

function dropDowns() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', ()=> {
           subList[i].classList.toggle("show-list");
           if (subList.indexOf != i) {
               subList.style.visibility = 'hidden';
           }
        })
    }
}

function checkOffset() {
    docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
    if (docHeight != 'undefined') {
        offset = docHeight / 2;
    }
}

function showMenu() {
    navList.style.right = '0';
}

function closeMenu() {
    navList.style.right = '-25000rem';
}