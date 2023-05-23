// Importar la clase Juego
const Juego = require('./Tdd_bowling');

// Prueba para un juego de perdedor
test('Juego de perdedor', () => {
    const juego = new Juego();

    for (let tiro = 0; tiro < 20; tiro++) {
        juego.tirar(0); // El jugador no tumba ningún pin en ningún tiro
    }

    const puntuacion = juego.puntuacion();
    expect(puntuacion).toBe(0);
});