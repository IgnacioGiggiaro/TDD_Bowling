class Juego {
    constructor() {
        this.rolls = [];
    }

    tirar(pinos) {
        this.rolls.push(pinos);
    }

    puntuacion() {
        let score = 0;
        let rollIndex = 0;
        const rolls = this.rolls;

        for (let frame = 0; frame < 10; frame++) {
            if (isSpare()) {
                score += 10 + spareBonus();
                rollIndex += 2;
            } else {
                score += sumOfBallsInFrame();
                rollIndex += 2;
            }
        }
        return score;

        function isSpare() {
            return rolls[rollIndex] + rolls[rollIndex + 1] === 10;
        }
        function spareBonus() {
            return rolls[rollIndex + 2];
        }

        function sumOfBallsInFrame() {
            return rolls[rollIndex] + rolls[rollIndex + 1];
        }
    }

}

module.exports = Juego;




