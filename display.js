let faqTarget = document.querySelectorAll("main div");

for(let i = 0; i < faqTarget.length; i++){
    faqTarget[i].addEventListener("click", display, false);
}

function display(){
    this.lastElementChild.classList.toggle("paraActive");
    this.firstElementChild.classList.toggle("titleActive")
}

