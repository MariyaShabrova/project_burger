
$(document).ready(function() {
    let btn = $('.accordeon_item_link');

    var activeClass = 'accordeon_item_activ';

    btn.click(function(event) {
        event.preventDefault();
    
    let parent = $(this).parent();

        if (parent.hasClass(activeClass)) {
            parent.removeClass(activeClass);        

    } else {
        btn.parent().removeClass(activeClass);
        parent.addClass(activeClass);
    }
    
})
});

// смена кнопки в "отзывах" по размеру экрана
$(document).ready(function(){
    var smallSize = false;
    $(window).resize(function(){
    if (!smallSize && $(window).width() <= 480) {
        $(".seeReview").text("Читать отзыв!")
        smallSize = true;
        }
    })
})

/*видео*/
/*$().ready(function() {
    video = document.getElementById("play_video");

    video.addEventListener('click', playStop);

    let playBtn = document.querySelectorAll(".play");
    for (let i = 0; i < playBtn.length; i++) {
        playBtn[i].addEventListener('click', playStop);
    }

    let micVolume = document.getElementById("volumeplay");
    micVolume.addEventListener('click', soundOff);

})*/

/*Слайдер*/
const sections = $(".section");
const displayScroll = $(".main_content");

let inScroll = false;

const setActiveClassInSideMenu = menuIndex => {
    $('.fixed-menu-item')
        .eq(menuIndex)
        .addClass('active')
        .siblings()
        .removeClass('active');
};

const myTransition = sectionEq => {
    const positions = sectionEq * -100 + "%";
    if (inScroll) return;
     inScroll = true;   

    sections
    .eq(sectionEq)
    .addClass("active")
    .siblings()
    .removeClass("active");
 
    displayScroll.css({
        transform: `translateY(${positions})`
});

    setTimeout(() => {
        inScroll = false;
        setActiveClassInSideMenu(sectionEq);
    }, 1000 + 300);
};


const scrollSection = direction => {
     const activeSection = sections.filter(".active");
     const nextSection = activeSection.next();
     const prevSection = activeSection.prev();
     

     if (direction === 'next') {
        inScroll = false;
         myTransition(nextSection.index());
     }
     if (direction === 'prev') {
        inScroll = false;
        myTransition(prevSection.index());
    }
}

  $(".wrapper").on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;
   


if (deltaY > 0) {
 
  scrollSection("next");
};

if (deltaY < 0) {
  scrollSection("prev");
}
 
});

$(document).on('keydown', e => {
    switch(e.keyCode) {
        case 38: scrollSection("prev");
         break;
        case 40: scrollSection("next");
         break;
        
    }
});

$('[data-scroll-to]').on('click', e => {
    e.preventDefault();
    const target = $(e.currentTarget).attr('data-scroll-to');
    myTransition(target);
})