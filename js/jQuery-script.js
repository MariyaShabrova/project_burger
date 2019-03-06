
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
/*function onYouTubeIframeAPIReady() {
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
  

function onPlayerStateChange(event) {
    const playerButton = $(".player__start-btn");
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

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


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