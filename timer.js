

const flipCard = document.querySelector('.flip-card');
const topCard = flipCard.querySelector(".top");
const bottomCard = flipCard.querySelector(".bottom");
let startNumber = 9;
let numberToSet;


topCard.textContent = startNumber;
bottomCard.textContent = startNumber;

flipCard.dataset.currentNumber = startNumber;
flipCard.dataset.nextNumber = startNumber - 1;

flipCard.addEventListener("animationstart", e => {
    console.log(e.animationName + " animationstart " + new Date().getTime() + " " + numberToSet);
    if (e.animationName === 'flip-top') {
        console.log("top number set to " + numberToSet)
        topCard.textContent = numberToSet;
    }
})

flipCard.addEventListener("animationend", e => {
    console.log(e.animationName + " animationend " + new Date().getTime()+ " " + numberToSet);

    if (e.animationName === 'flip-top') {
        flipCard.dataset.currentNumber = numberToSet
    }
    if (e.animationName === 'flip-bottom') {
        console.log("bottom number set to " + numberToSet)

        bottomCard.textContent = numberToSet;
        flipCard.classList.remove('flip')
    }
})

let n = 9;
const i = setInterval(() => {
    if (n > 0) {
        setCounterToNumber(--n)
    } else {
        clearInterval(i)
    }
}, 1000)

function setCounterToNumber(number) { 
    numberToSet = number;
    flipCard.dataset.currentNumber = number + 1;
    flipCard.dataset.nextNumber = number;
    flipCard.classList.add('flip')
}