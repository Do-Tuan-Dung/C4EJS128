const imageBlock = document.querySelectorAll(".Vert")

function removeSelected() {
    imageBlock.forEach (imageBlock => {
        imageBlock.classList.remove('Selected')
    })
}

imageBlock.forEach (imageBlock => {
    imageBlock.addEventListener ('click',
        () => {
            removeSelected()
            imageBlock.classList.add('Selected')
        }
    )
})