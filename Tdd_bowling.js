class Juego {
    constructor() {
        this.puntuacionTotal = 0;
    }

    tirar(pinos) {
        // No necesitamos hacer nada en este caso, ya que el jugador no derriba ningún pin
    }

    puntuacion() {
        return this.puntuacionTotal;
    }
}

module.exports = Juego;




