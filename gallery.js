const img = document.querySelectorAll('.card > img');
console.log(img)

img.forEach(item => {
    item.addEventListener('click', ()=>{
        const src = item.getAttribute('src')
        window.location = src;
    })
})