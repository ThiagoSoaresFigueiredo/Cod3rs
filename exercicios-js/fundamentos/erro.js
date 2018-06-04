function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('Função finalizada')
    }
}

function tratarErro(e) {
    // throw new Error('.!.!.!')
    // throw 10
    // throw false
    // throw 'Error.!.!.!'
    console.log('¨Ocorreu um erro¨')
}

const obj = { nome: 'Thiago' }
imprimirNome(obj)