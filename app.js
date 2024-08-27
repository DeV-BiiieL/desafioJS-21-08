function numeroMaior(valor1, valor2) {
    if (valor1 === valor2) {
        alert('Os valores digitados são iguais')
    } else if (valor1 < valor2) {
        alert(valor1 + ' é menor que ' + valor2)
    } else {
        alert(valor1 + ' é maior que ' + valor2)
    }
    return
}

function mult() {
    const num1 = Number(prompt('Digite um número:'))
    const num2 = Number(prompt('Digite outro número:'))

    const resultado = numeroMaior(num1, num2)
}

mult()