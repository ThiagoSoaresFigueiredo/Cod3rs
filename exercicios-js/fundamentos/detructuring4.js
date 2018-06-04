function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const v = [0, 10]
console.log(rand(v))
console.log(rand([50, 40]))
console.log(rand([50]))
console.log(rand([, 40]))
console.log(rand([]))
console.log(rand()) // ERROR