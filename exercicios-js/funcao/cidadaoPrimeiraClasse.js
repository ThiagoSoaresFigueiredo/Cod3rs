// forma literal
function fun1() { }

// armazenar em uma variável
const fun2 = function () { }

// armazenar em um array
const arr = [function () { }, fun1, fun1, function (a, b) { return a + b }]
console.log(arr[3](5, 5))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Olá' }
obj.despedir = function (texto) { return texto }
console.log(obj.falar())
console.log(obj.despedir('Thiago'))

// passar função como parametro para outra função
function run(fun) {
    fun()
}
run(function () { console.log('Função') })

// função retornando função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(1)