'use strict'

const readline = require('node:readline');

const { stdin: input, stdout: output } = require('node:process');
const { parse } = require('node:path');

function calcular (num1, num2, operacion) {
    switch (operacion){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            if (num2 === 0){
                return 'No se puede dividir por 0'
            }else{
                return num1 / num2
            }
        default:
            return 'Operacion no valida'
    }
}




const rl = readline.createInterface({input, output})

rl.question('Que operacion quieres hacer? (+, -, *, /):', (operation) => {
    rl.question('Ingresa el numero 1: ', (num1) => {
        rl.question('Ingresa el numero 2: ', (num2) => {
            try{
                if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))){
                    console.log('Error: Ingresa solo números válidos.');
                    rl.close();
                }else{
                    num1 = parseFloat(num1)
                    num2 = parseFloat(num2)

                    if(operation === '+'){
                        console.log(`El resultado de la suma es: ${calcular(num1, num2, operation)}`)
                        rl.close()
                    }
                    if(operation === '-'){
                        console.log(`El resultado de la resta es: ${calcular(num1, num2, operation)}`)
                        rl.close()
                    }
                    if(operation === '*'){
                        console.log(`El resultado de la multiplicacion es: ${calcular(num1, num2, operation)}`)
                        rl.close()
                    }
                    if(operation === '/'){
                        console.log(`El resultado de la division es: ${calcular(num1, num2, operation)}`)
                        rl.close()
                    }
                }
            }catch(error){
                console.log('Operacion no valida', error)
                rl.close()
            }
        })
    })
})
