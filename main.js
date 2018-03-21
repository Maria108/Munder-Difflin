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

// let navBar = document.getElementById('nav')

// window.addEventListener('scroll', (event) => {
//     if (window.scrollY === 200) {
//         navBar.className = "nav";
//     }
// });

let slider = document.getElementById('slider');

setInterval(() => {
    let pos = Math.floor(Math.random() * 3) * 100;
    slider.style.transform = `translateX(-${pos}%)`;
}, 1500);