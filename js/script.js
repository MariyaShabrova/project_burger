/*Секция четвертая, команда*/
var items = document.querySelectorAll(".team_item");

for(var i=0; i<items.length; i++) {
item[i].addEventListener("click", handleAccoOpening); 
}


function handleAccoOpening(e) {
    var curItem = e.currentTarget;
    var isClosedItem = curItem.classList.contains("activ");


    if (isClosedItem) {
       closeItems(items);
    } else {
        closeItems(items);   
        openItem(curItem);     
    };
}

function closeItems(items) {
    Array.from(items).forEach(function(elem) {
        elem.classList.remove('activ');
        elem.querySelector('.activ_content').style.height = 0;
    });
}

function openItem(item) {
    var content = item.querySelector(".activ_content");
    var block = content.firstElementChild;
    var reqHeight = block.getBoundingClientRect().height;
    item.classList.add("activ");
    content.style.height = '200px';    
}
/*Секция третья, слайдер*/
var leftBtn = document.querySelector('#left');
var rightBtn = document.querySelector('#right');
var slider = document.querySelector('#slider');

var step = slider.firstElementChild.getBoundingClientRect().width;
var slidersInView = 1;
var maxRight = (slider.children.length - slidersInView) * step;
var minRight = 0;
var currentRight = 0;


rightBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (currentRight < maxRight) {
    currentRight += step;
    slider.style.right = currentRight + 'px';
    } else {
        currentRight = 0;
        slider.style.right = 0;
    }
})

leftBtn.addEventListener('click', function(e) {
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
var btn = document.querySelector('#hamburger');
var hamburger = document.querySelector('.hamburger_container');
var close = document.querySelector('.closeIcon_links');

btn.addEventListener('click', function(e) {
 hamburger.classList.add('opened');
}
)

close.addEventListener('click', function(e) {
hamburger.classList.remove('opened');
})

/*модальное окно*/
var modal = document.querySelectorAll("#modal");
var btnModal = document.querySelector("#btn_modal");
var span = document.querySelector(".close")[0];

btnModal.onclick = function (event) {
    event.preventDefault();
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


