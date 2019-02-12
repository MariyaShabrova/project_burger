const items = document.querySelectorAll(".team_item");

for (item of items) {
item.addEventListener("click", e => {
    const curItem = e.currentTarget;
    const newLocal = curItem.querySelector(".activ_content");
    const imgBlock =content.firstElementChild;
    const reqHeight = imgBlock.getBoundingClientRect().height;

    if (curItem.classList.contains("team_item_activ")) {
        curItem.classList.remove("team_item_activ");
        content.style.height = 0;
    } else {

    Array.from(items).forEach( elem =>{
        elem.classList = remove('team_item_activ');
        elem.querySelector('activ_content').style.height = 0;
    });
    };
        curItem.classList.add("team_item_activ");
        content.style.height = '${reqHeight}px';
    
    });
}



