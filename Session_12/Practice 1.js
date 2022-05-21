const block = document.querySelectorAll(".Vert")

function removeActiveClasses() {
    block.forEach (block => {
        block.classList.remove('Selected')
    })
}

block.forEach (block => {block.addEventListener ('click',
    () => {
        removeActiveClasses()
        block.classList.add('Selected')
    })
})