setTimeout(() => {
    // document.querySelector('.boom').classList.add('active')
}, 5000)



const caseohohoh = document.querySelector('.casewho')
const limit = caseohohoh.offsetTop;
let clickHappened = false;

document.addEventListener('keyup', (event) => {
    console.log(event.key)
    if (event.key === 'ArrowUp') {


        if (caseohohoh.offsetTop <= 0) {
        }
        else {
            if (!clickHappened) {
                clickHappened = true;
                caseohohoh.style.top = caseohohoh.offsetTop - 100 + 'px'
                setTimeout(() => {
                    setTimeout(() => {
                        clickHappened = false;
                    }
                        , 500)
                    caseohohoh.style.top = limit + 'px'
                }, 500)
            }
        }
    }
})