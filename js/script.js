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
    content.style.height = '100px';    
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

/*Аккардеон*/
/*const accordeon = document.querySelector('.accordeon_list');

createAccord(accordElement);


function createAccord(element) {
    const accordeonLink = document.querySelectorAll('.accordeon_item');
    let activContent;
}
for (i=0; i<accordeonLink.length; i++) {
    const accordeon_item_link = accordeonLink[i];
}
accordeon_item_link.addEventListener('click', function() {
    if(activContent) {
        activContent.classList.remove('.accordeon_item_activ')
    }
    activContent = accordeon_item_link.nextElementSibling;
    activContent.classList.add('.accordeon_item_activ');
}) */

