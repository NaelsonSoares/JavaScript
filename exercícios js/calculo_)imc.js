/*
Menor que 18.5 - Abaixo do peso ;
Entre 18.5 e 24.9 - Peso normal ;
Entre 25.0 e 29.9 - Pré-obesidade ;
Entre 30.0 e 34.9 - Obesidade Grau 1 ;
Entre 35.0 e 39.9 - Obesidade Grau 2 ;
Acima de 40 - Obesidade Grau 3
*/
function calculoImc(peso, altura){
    if(peso === undefined || altura === undefined){
        throw Error("need two parameters: weigth and heigth")
    }
    return (peso / (altura * altura))
}
    function classificarIMC(imc){
        if (imc <= 16.9){
            return("Muito abaixo do peso")
        }
        else if (imc <= 18.4){
            return("Abaixo do peso")
        }
        else if (imc <= 24.9){
            return("Peso normal")
        }
        else if (imc <= 29.9){
            return("Pré-obesidade")
        }
        else if (imc <= 34.9){
            return("Obesidade grau 1")
        }
        else if (imc <= 39.9){
            return("Obesidade grau 2")
        }
        else if (imc >= 40.0){
            return("Obesidade grau 3")
    }
    