let deadCount = 0;
let lostCount = 0;
let gameActive = true;

const getHole = index => document.getElementById(`hole${index}`);

const resetGame = () => {
    deadCount = 0;
    lostCount = 0;
    document.getElementById('dead').textContent = '0';
    document.getElementById('lost').textContent = '0';
    gameActive = true;
};

for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', function () {
        if (!gameActive) return;

        if (this.classList.contains('hole_has-mole')) {
            deadCount++;
            document.getElementById('dead').textContent = deadCount;
            if (deadCount >= 10) {
                alert('Вы победили!');
                resetGame();
            }
        } else {
            lostCount++;
            document.getElementById('lost').textContent = lostCount;
            if (lostCount >= 4) {
                alert('Вы проиграли!');
                resetGame();
            }
        }
    });
}