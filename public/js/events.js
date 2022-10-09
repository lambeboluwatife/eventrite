const categories = document.querySelectorAll('.category');
const showCategory = document.querySelectorAll('.show-category');

categories.forEach(category => {
    category.addEventListener('click', () => {
        removeActiveClasses();
        category.classList.add('btn-danger');
    })
});

function removeActiveClasses() {
    categories.forEach(category => {
        category.classList.remove('btn-danger');
    })
}

categories[0].addEventListener("click", () => {
    showCategory[0].style.display = "block"
    showCategory[1].style.display = "none"
    showCategory[2].style.display = "none"
    showCategory[3].style.display = "none"
    showCategory[4].style.display = "none"
    showCategory[5].style.display = "none"
    showCategory[6].style.display = "none"
    showCategory[7].style.display = "none"
    showCategory[8].style.display = "none"
    showCategory[9].style.display = "none"
    showCategory[10].style.display = "none"
    showCategory[11].style.display = "none"
})

categories[1].addEventListener("click", () => {
    showCategory[0].style.display = "none"
    showCategory[1].style.display = "block"
    showCategory[2].style.display = "none"
    showCategory[3].style.display = "none"
    showCategory[4].style.display = "none"
    showCategory[5].style.display = "none"
    showCategory[6].style.display = "none"
    showCategory[7].style.display = "none"
    showCategory[8].style.display = "none"
    showCategory[9].style.display = "none"
    showCategory[10].style.display = "none"
    showCategory[11].style.display = "none"
})

categories[2].addEventListener("click", () => {
    showCategory[0].style.display = "none"
    showCategory[1].style.display = "none"
    showCategory[2].style.display = "block"
    showCategory[3].style.display = "none"
    showCategory[4].style.display = "none"
    showCategory[5].style.display = "none"
    showCategory[6].style.display = "none"
    showCategory[7].style.display = "none"
    showCategory[8].style.display = "none"
    showCategory[9].style.display = "none"
    showCategory[10].style.display = "none"
    showCategory[11].style.display = "none"
})

categories[3].addEventListener("click", () => {
    showCategory[0].style.display = "none"
    showCategory[1].style.display = "none"
    showCategory[2].style.display = "none"
    showCategory[3].style.display = "block"
    showCategory[4].style.display = "none"
    showCategory[5].style.display = "none"
    showCategory[6].style.display = "none"
    showCategory[7].style.display = "none"
    showCategory[8].style.display = "none"
    showCategory[9].style.display = "none"
    showCategory[10].style.display = "none"
    showCategory[11].style.display = "none"
})

categories[4].addEventListener("click", () => {
    showCategory[0].style.display = "none"
    showCategory[1].style.display = "none"
    showCategory[2].style.display = "none"
    showCategory[3].style.display = "none"
    showCategory[4].style.display = "block"
    showCategory[5].style.display = "none"
    showCategory[6].style.display = "none"
    showCategory[7].style.display = "none"
    showCategory[8].style.display = "none"
    showCategory[9].style.display = "none"
    showCategory[10].style.display = "none"
    showCategory[11].style.display = "none"
})

categories[5].addEventListener("click", () => {
    showCategory[0].style.display = "none"
    showCategory[1].style.display = "none"
    showCategory[2].style.display = "none"
    showCategory[3].style.display = "none"
    showCategory[4].style.display = "none"
    showCategory[5].style.display = "block"
    showCategory[6].style.display = "none"
    showCategory[7].style.display = "none"
    showCategory[8].style.display = "none"
    showCategory[9].style.display = "none"
    showCategory[10].style.display = "none"
    showCategory[11].style.display = "none"
})

categories[6].addEventListener("click", () => {
    showCategory[0].style.display = "none"
    showCategory[1].style.display = "none"
    showCategory[2].style.display = "none"
    showCategory[3].style.display = "none"
    showCategory[4].style.display = "none"
    showCategory[5].style.display = "none"
    showCategory[6].style.display = "block"
    showCategory[7].style.display = "none"
    showCategory[8].style.display = "none"
    showCategory[9].style.display = "none"
    showCategory[10].style.display = "none"
    showCategory[11].style.display = "none"
})

categories[7].addEventListener("click", () => {
    showCategory[0].style.display = "none"
    showCategory[1].style.display = "none"
    showCategory[2].style.display = "none"
    showCategory[3].style.display = "none"
    showCategory[4].style.display = "none"
    showCategory[5].style.display = "none"
    showCategory[6].style.display = "none"
    showCategory[7].style.display = "block"
    showCategory[8].style.display = "none"
    showCategory[9].style.display = "none"
    showCategory[10].style.display = "none"
    showCategory[11].style.display = "none"
})

categories[8].addEventListener("click", () => {
    showCategory[0].style.display = "none"
    showCategory[1].style.display = "none"
    showCategory[2].style.display = "none"
    showCategory[3].style.display = "none"
    showCategory[4].style.display = "none"
    showCategory[5].style.display = "none"
    showCategory[6].style.display = "none"
    showCategory[7].style.display = "none"
    showCategory[8].style.display = "block"
    showCategory[9].style.display = "none"
    showCategory[10].style.display = "none"
    showCategory[11].style.display = "none"
})

categories[9].addEventListener("click", () => {
    showCategory[0].style.display = "none"
    showCategory[1].style.display = "none"
    showCategory[2].style.display = "none"
    showCategory[3].style.display = "none"
    showCategory[4].style.display = "none"
    showCategory[5].style.display = "none"
    showCategory[6].style.display = "none"
    showCategory[7].style.display = "none"
    showCategory[8].style.display = "none"
    showCategory[9].style.display = "block"
    showCategory[10].style.display = "none"
    showCategory[11].style.display = "none"
})

categories[10].addEventListener("click", () => {
    showCategory[0].style.display = "none"
    showCategory[1].style.display = "none"
    showCategory[2].style.display = "none"
    showCategory[3].style.display = "none"
    showCategory[4].style.display = "none"
    showCategory[5].style.display = "none"
    showCategory[6].style.display = "none"
    showCategory[7].style.display = "none"
    showCategory[8].style.display = "none"
    showCategory[9].style.display = "none"
    showCategory[10].style.display = "block"
    showCategory[11].style.display = "none"
})

categories[11].addEventListener("click", () => {
    showCategory[0].style.display = "none"
    showCategory[1].style.display = "none"
    showCategory[2].style.display = "none"
    showCategory[3].style.display = "none"
    showCategory[4].style.display = "none"
    showCategory[5].style.display = "none"
    showCategory[6].style.display = "none"
    showCategory[7].style.display = "none"
    showCategory[8].style.display = "none"
    showCategory[9].style.display = "none"
    showCategory[10].style.display = "none"
    showCategory[11].style.display = "block"
})