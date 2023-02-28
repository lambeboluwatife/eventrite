const contents = document.querySelectorAll('.contents');
const info = document.querySelector('.info')
const events = document.querySelector('.events')
const settings = document.querySelector('.settings')

contents.forEach(content => {
    content.addEventListener('click', () => {
        removeActiveClasses();
        content.classList.add('active');
    })
});

function removeActiveClasses() {
    contents.forEach(content => {
        content.classList.remove('active');
    })
}

contents[0].addEventListener("click", () => {
    info.style.display = "block"
    events.style.display = "none"
    settings.style.display = "none"
})

contents[1].addEventListener("click", () => {
    info.style.display = "none"
    events.style.display = "block"
    settings.style.display = "none"
})

contents[2].addEventListener("click", () => {
    info.style.display = "none"
    events.style.display = "none"
    settings.style.display = "block"
})