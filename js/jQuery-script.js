
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
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("play_video", {
    width: "660",
    height: "405",
    videoId: "zmg_jOwa9Fc",
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  const duration = player.getDuration();
  let interval;
  updateTimerDisplay();

  $(".play_container").removeClass("hidden");

  clearInterval(interval);

  interval = setInterval(() => {
    const completed = player.getCurrentTime();
    const percents = (completed / duration) * 100;

    changeButtonPosition(percents);

    updateTimerDisplay();
  }, 1000);
}

function onPlayerStateChange(event) {
  const playerButton = $(".play_start-btn");
  switch (event.data) {
    case 1:
      $(".play_player").addClass("active");
      playerButton.addClass("paused");
      break;
    case 2: 
      playerButton.removeClass("paused");
      break;
  }
}

$(".play_start-btn").on("click", e => {
  const playerStatus = player.getPlayerState(); // 0 - ended, 1 - played, 2 - paused ...

  if (playerStatus !== 1) {
    player.playVideo();
  } else {
    player.pauseVideo();
  }
});


/*$(".player__playback").on("click", e => {
  e.preventDefault();
  const bar = $(e.currentTarget);
  const newButtonPosition = e.pageX - bar.offset().left;
  const clickedPercents = (newButtonPosition / bar.width()) * 100;
  const newPlayerTime = (player.getDuration() / 100) * clickedPercents;

  changeButtonPosition(clickedPercents);
  player.seekTo(newPlayerTime);
});

$(".player__splash").on("click", e => {
  player.playVideo();
});

function changeButtonPosition(percents) {
  $(".player__playback-button").css({
    left: `${percents}%`
  });
}

function updateTimerDisplay() {
  $(".player__duration-completed").text(formatTime(player.getCurrentTime()));
  $(".player__duration-estimate").text(formatTime(player.getDuration()));
}

function formatTime(time) {
  const roundTime = Math.round(time);

  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;
  const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return minutes + ":" + formatedSeconds;
}*/

/*Слайдер*/
const sections = $(".section");
const displayScroll = $(".main_content");

let inScroll = false;
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();




const setActiveClassInSideMenu = menuIndex => {

    $('.fixed-menu-item')
        .eq(menuIndex)
        .addClass('active')
        .siblings()
        .removeClass('active');
};

const myTransition = sectionEq => {
    
    if (inScroll) return;

    const sectionEqNum = parseInt(sectionEq);

    if (!!sectionEqNum === false) 
    console.error("не верное значение аргумента sectionEq")

     inScroll = true;   

     const positions = sectionEq * -100 + "%";

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
    }, 1000 + 700);
};


const scrollSection = direction => {
     const activeSection = sections.filter(".active");
     const nextSection = activeSection.next();
     const prevSection = activeSection.prev();
     

     if (direction === 'next' && nextSection.length) {
        inScroll = false;
         myTransition(nextSection.index());
     }
     if (direction === 'prev' && prevSection.length) {
        inScroll = false;
        myTransition(prevSection.index());
    }
};

  $(".wrapper").on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;
   
$(".wrapper").on('touchmove', e => {
  e.preventDefault();
})

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
});

if (isMobile) {

$(window).swipe( {
   swipe: function(event, direction) {
     //alert("привет");
     const nextOrPrev = direction === 'up' ? 'next': 'prev';
     scrollSection(nextOrPrev);

   }
})
};