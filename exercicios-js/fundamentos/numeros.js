const peso1 = 1.0

const peso2 = Number('2.0')

console.log(peso1)
console.log(peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const mediaGeral = total / (peso1 + peso2)

console.log(mediaGeral)
console.log(mediaGeral.toFixed(2))
console.log(mediaGeral.toString())
console.log(mediaGeral.toString(2))