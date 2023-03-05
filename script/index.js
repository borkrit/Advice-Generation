let title = document.getElementById('advice-number');
let text = document.getElementById('advice-text');
let btn = document.getElementById('advice-random');

function randomAdvice(){
    fetch(`https://api.adviceslip.com/advice`)
        .then((response)=>response.json())
        .then((data)=> {
            const {id, advice} = data.slip;
            title.innerText =id;
            text.innerText = advice;
        })
}
randomAdvice()
btn.addEventListener('click', randomAdvice)




