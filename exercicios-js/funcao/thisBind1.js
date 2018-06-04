const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

// sem bind gerando undefinied
let falar = pessoa.falar
falar()

// com bind
falar = pessoa.falar.bind(pessoa)
falar()
