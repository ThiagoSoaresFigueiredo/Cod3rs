function compras(trabalho1, trabalho2) {
    const comprarSorvte = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvte

    return {
        comprarSorvte,
        comprarTv32,
        comprarTv50,
        manterSaudavel
    } // retorna um objeto
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))