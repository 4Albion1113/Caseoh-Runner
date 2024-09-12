setTimeout(() => {
    document.querySelector('.boom').classList.add('active')
}, 500000000000000000000000)




document.addEventListener('keyup', (event) => {
    console.log(event.key)
    if (event.key === 'ArrowUp') {
        const caseohohoh = document.querySelector('.casewho')
        caseohohoh.style.top = caseohohoh.offsetTop - 100 + 'px'
    }
})