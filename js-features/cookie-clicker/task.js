const cookie = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');
let count = Number(counterElement.textContent);

cookie.addEventListener('click', () => {
    count += 1;
    counterElement.textContent = count;

    if (count % 2 === 1) {
        cookie.width = 180;
        cookie.height = 180;
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }
});