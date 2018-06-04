let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return a * 2
}

dobro = a => a * 2

let ola = function () {
    return 'Olá'
}
console.log(dobro(2))

ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())