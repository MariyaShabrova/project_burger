/*Секция четвертая, команда*/
const items = document.querySelectorAll(".team_item");

for (item of items) {
item.addEventListener("click", handleAccoOpening); 
}


function handleAccoOpening(e) {
    const curItem = e.currentTarget;
    const isClosedItem = curItem.classList.contains("activ");


    if (isClosedItem) {
       closeItems(items);
    } else {
        closeItems(items);   
        openItem(curItem);     
    };
}

function closeItems(items) {
    Array.from(items).forEach(elem => {
        elem.classList.remove('activ');
        elem.querySelector('.activ_content').style.height = 0;
    });
}

function openItem(item) {
    const content = item.querySelector(".activ_content");
    const block = content.firstElementChild;
    const reqHeight = block.getBoundingClientRect().height;
    item.classList.add("activ");
    content.style.height = '200px';    
}
/*Секция третья, слайдер*/
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const slider = document.querySelector('#slider');

const step = slider.firstElementChild.getBoundingClientRect().width;
const slidersInView = 1;
const maxRight = (slider.children.length - slidersInView) * step;
const minRight = 0;
let currentRight = 0;


rightBtn.addEventListener('click', e => {
    e.preventDefault();
    if (currentRight < maxRight) {
    currentRight += step;
    slider.style.right = currentRight + 'px';
    } else {
        currentRight = 0;
        slider.style.right = 0;
    }
})

leftBtn.addEventListener('click', e => {
    e.preventDefault();
    if (currentRight > minRight) {
    currentRight -= step;
    slider.style.right = currentRight + 'px';
    } else {
        currentRight = maxRight;
        slider.style.right = maxRight + 'px';
    }
})

/*rightBtn.addEventListener('click', function() {
    loop('rightBtn');
})

leftBtn.addEventListener('click', function() {
    loop('leftBtn'); 
})

function loop(direction) {
    if (direction === 'rightBtn') {
        slider.oppendChild(slider.firstElementChild);
    } else {
        slider.insertBefore(slider.lostElementChild, slider.firstElementChild);
    }
}*/

/*Гамбургер модалка*/
const btn = document.querySelector('#hamburger');
const hamburger = document.querySelector('.hamburger_container');
const close = document.querySelector('.closeIcon_links');

btn.addEventListener('click', e => {
 hamburger.classList.add('opened');
}
)

close.addEventListener('click', e => {
hamburger.classList.remove('opened');
})

/*модальное окно*/
var modal = document.querySelector("#modal");
var btnModal = document.querySelector("#btn_modal");
var span = document.querySelector(".close")[0];

btnModal.onclick = function (event) {
    event.preventDefault();
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


