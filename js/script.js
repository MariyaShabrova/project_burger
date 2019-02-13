const items = document.querySelectorAll(".team_item");

for (item of items) {
item.addEventListener("click", handleAccoOpening); 
}


function handleAccoOpening(e) {
    const curItem = e.currentTarget;
    const content = curItem.querySelector(".activ_content");

   const block = content.firstElementChild;
    const reqHeight = block.getBoundingClientRect().height;

    if (curItem.classList.contains("activ")) {
        curItem.classList.remove("activ");
        content.style.height = 0;
    } else {

    Array.from(items).forEach(elem => {
        elem.classList.remove('activ');
        elem.querySelector('.activ_content').style.height = 0;
    });
  
        curItem.classList.add("activ");
        content.style.height = '200px';

};
}



