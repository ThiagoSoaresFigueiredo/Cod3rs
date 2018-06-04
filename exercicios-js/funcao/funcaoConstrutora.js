function Carro(velocidadeMaxima = 200, delta = 5) {
    let valocidadeAtutal = 0;

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual = + delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }
}