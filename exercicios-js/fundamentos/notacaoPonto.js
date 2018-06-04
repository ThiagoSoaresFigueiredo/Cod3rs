console.log(typeof console)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Thiago'
obj1['sobrenome'] = 'Figueiredo'
console.log(obj1.nome)
console.log(obj1.sobrenome)
var idade = 33
obj1.idade = idade
console.log(obj1.idade)

function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('Leonardo')
const obj3 = new Obj('Lucas')
console.log(obj2.nome)
console.log(obj3.nome)

console.log(new Obj('Ana').nome)