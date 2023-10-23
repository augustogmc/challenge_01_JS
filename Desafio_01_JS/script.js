let numberOne = Number(prompt("Digite o primeiro número:"))
let numberTwo = Number(prompt("Digite o segundo número:"))
let result

const som = numberOne + numberTwo
alert(`A soma dos dois números é: ${som}`)

const sub = numberOne - numberTwo
alert(`A subtração dos dois números é: ${sub}`)

const mult = numberOne * numberTwo
alert(`A multiplicação dos dois números é: ${mult}`)

const div = numberOne / numberTwo
alert(`A divisão dos dois números é: ${div}`)

const rest = numberOne % numberTwo
 alert(`O resto da divisão dos dois números é: ${rest}`)

if(som % 2 === 0){
    alert(`A soma desses números é par: ${som}`)
} else {
    alert(`A soma desses números é impar: ${som}`)
}

if(numberOne == numberTwo) {
    alert("Os números inseridos são iguais.")
} else {
    alert("Os números inseridos são diferentes.")
}
