let gambMenu = document.getElementById("gamburger")
gambMenu.addEventListener("click", toggleMenu)

function toggleMenu(event) {
    let newMenu = document.getElementById("newMenu")
    if (newMenu.style.display === "block") {
        newMenu.style.display = "none"
    } else {
        newMenu.style.display = "block"
    }
}

let navBar = document.getElementById('main-nav')
window.addEventListener('scroll', (event) => {
    if (window.scrollY >= 100) {
        navBar.className = "nav";
    } else {
        navBar.className = "";
    }
});

let slider = document.getElementById('slider');
let pos = 0;

setInterval(() => {
    if (pos === 0) {
        pos = 100;
        slider.style.transform = `translateX(-${pos}%)`;
    } else if (pos === 100) {
        pos = 200;
        slider.style.transform = `translateX(-${pos}%)`;
    } else {
        pos = 0;
        slider.style.transform = `translateX(-${pos}%)`;
    }

}, 2500);


let nextRev = document.getElementById("right")
let prevRev = document.getElementById("left")
let image = document.getElementById("customer-img")
let nextText = document.getElementById("rev")
let currentCom = 0
nextRev.addEventListener("click", (event) => {
    if (currentCom < comments.length - 1) {
        currentCom++
        image.src = comments[currentCom].picture
        nextText.innerHTML = comments[currentCom].text
    }
});


prevRev.addEventListener("click", (event) => {
    if (currentCom > 0) {
        currentCom--
        image.src = comments[currentCom].picture
        nextText.innerHTML = comments[currentCom].text
    }
});

let comments = [{
        picture: "images/customer.jpeg",
        text: "I love Munder Difflin! <br>Lorem ipsum dolor, facilis quisquam dolorum soluta quibusdam tempore! Consectetur nam quas, ut reprehenderit impedit assumenda totam ex placeat facere."
    },
    {
        picture: "images/customer2.jpeg",
        text: "Only you Munder Difflin! <br>Lorem, ipsum dolor sit. Porro a odit veniam optio mollitia eos ab quas rem ut nam labore necessitatibus excepturi quae in, cupiditate doloremque"
    }, {
        picture: "images/customer3.png",
        text: "My Favourite paper! <br>Lorem ipsum dolor sit amet. Maiores blanditiis saepe officia iure, ab aliquam vero eos velit laboriosam quas, quis eius eaque."
    }
]