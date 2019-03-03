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
 btn.style.display = 'none';
}
)


close.addEventListener('click', e => {
hamburger.classList.remove('opened');
btn.style.display = "block";
})

/*модальное окно*/
var modal = document.querySelector("#modal"); // переменная модалки
var btns = document.querySelectorAll("#btn_modal"); //переменная кнопки открытия отзыва
var btnclose = document.querySelector(".modal-close");  // переменная кнопки закрытия модального окна
var modalText = document.querySelector("#modal-text");  //переменная текта
var texts = {
    '1': 'Ирина Морозовa. Бургер Dark Beef Burger был сочный и очень вкусный, он действительно стоил того, что я сюда приехала. Если вернусь сюда снова, то куплю только его',
    '2': 'Константин Спилберг. Мысли все о них и о них, о них и о них. Нельзя устоять, невозможно забыть... Никогда не думал, что булочки могут быть такими мягкими, котлетка такой сочной, а сыр таким расплавленным',
    '3': 'Татьяна Орлова. Сами бургеры просто божественны! Не пересушенные, соуса так много, что он просто покрывает бургер чуть не целиком. Котлета сочная и очень вкусная, при этом не жирная, бекон — мясо, а не жареное сало.В общем, такой бургер тянет на 5 баллов, не меньше! Таким не стыдно угостить гостей!',
    '4': 'Лев Попов. Перефразируя строки уже наверное ставшие классикой, можно сказать следующие: «И толстый, толстый слой моцареллы. Вот, практически, все, что от жизни нам надо.» И вкусная моцарелла, которая действительно очень порадовала своими размерами, лишь малая часть чем понравился этот бургер. Рубленное мясо в сочетание с соусом, было очень нежным и по своему пряным.',
    '5': 'Руслан Ковшин. Первое знакомство с бургерами SPICY SHRIMP BURGER оказалось удачным. Хороший, сбалансированный экземпляр. Котлета средняя по вкусовым качествам дала немного сока, овощная составляющая на высоте, овощей не пожалели, мелко порезанный салат и лук с огурцами хороши, приятная мягкая жёлтая внутри булочка была вкусна. Соус и сыр всё хорошо дополняли. Для фирменного бургера заведения очень не плохо, вернёмся попробовать остальное меню ',
    '6': 'Ольга Туркина. Очень крутые бургеры, котлета просто супер, можно сказать идеальная. Булки тоже отличные. В бургере ни чего лишнего. Ребята молодцы, советую. 100%',
    '7': 'Алексей Карлович. Бургер сам по себе оказался довольно вкусным, нежный сыр и хороший соус, приятная котлета. Но, вот диспропорция большой пышной булки с небольшой для таких размеров  котлеты удивил.',
    '8': 'Станислав Морин. Бургеры выше всяких похвал, мясо срочное, приготовлено отлично, сочетание вкусов хорошее. Не переливают друг друга, при этом бургеры не слишком жирные, естся влет.Спасибо за высокое качество продукции.',
};   

for (let i=0; i < btns.length; i++) {

    btns[i].addEventListener("click", e => {  
        e.preventDefault();                                  

        var sourse = btns[i].getAttribute('data-sourse');     

        modalText.innerHTML = texts[sourse];           //присвоение определенной кнопки определенного текста
        modal.style.display = "block";                 //открытие модального окна
    });


      btnclose.addEventListener("click", function() {    //закрытие модального окна
        modal.style.display = "none";
  });
  


/*Форма заказа*/
const myForm = document.querySelector(".form_order");        //переменная формы
const sendButton = document.querySelector("#sendButton");   //кнопка заказа



sendButton.addEventListener('click', function(event) {
    event.preventDefault();



    if (validateForm(myForm)) {
        const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            comment: myForm.elements.comment.value,
        };


       const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.addEventListener('load', () => {

          if (xhr.response.status) {
              console.log('все ок!');
          }

       })
       xhr.send(JSON.stringify(data));
    }
})

function validateForm(form) {

    //const msg = document.getElementById("#msg");
    let valid = true;

    

    if (!validateField(form.elements.name)) {
        valid = false;
    }

    if (!validateField(form.elements.phone)) {
        valid = false;
    }

    if (!validateField(form.elements.comment)) {
        valid = false;
    }
    
    //msg.style.display = "inline-block";
    return valid;
}

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}
}
