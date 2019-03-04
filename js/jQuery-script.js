
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

const myTransition = sectionEq => {

    if (inScroll === false) {

     inScroll = true;   

    const positions = sectionEq * -100 + "%";

    sections
    .eq(sectionEq)
    .addClass("active")
    .siblings()
    .removeClass("active");

    displayScroll.css({
        transform: "translateY(${positions})"
})
}
};

const scrollSection = direction => {
     const activeSection = sections.filter('.active');
     const nextSection = activeSection.next();
     const prevSection = activeSection.prev();
     

     if (direction === 'next') {
         myTransition(nextSection.index())
     }
     if (direction === 'prev') {
        myTransition(prevSection.index())
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
        case 38: scrollSection("next"); break;
        case 40: scrollSection("prev"); break;
    }
});

$("[data-scroll-to]").on('click', e => {
    e.preventDefault();
    const target = (e.currentTarget).attr('data-scroll-to');
    myTransition(target);
})