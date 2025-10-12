const timerElement = document.getElementById('timer');
let timeLeft = Number(timerElement.textContent);
const timerId = setInterval(() => {
    timeLeft -= 1;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timerId);
        alert('Вы победили в конкурсе!');
    }
}, 1000);