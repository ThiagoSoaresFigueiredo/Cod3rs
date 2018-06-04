function area(largura, altura) {
    const area = largura * altura

    if (area > 20) {
        console.log('Não permitido')
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 2, 2))
console.log(area(20, 20))
area(20, 20)