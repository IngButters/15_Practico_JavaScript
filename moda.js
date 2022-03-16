const lista1 = [
    1, 
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
]


const lista1Count = {};

// Objeto donde se cuentan las veces que esta el elemento
lista1.map(
    function (elemento) {
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;

        }
        else {
            lista1Count[elemento] = 1;
        }

    }
);

// Reconvertir el objeto en un array para sacar la moda
const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];

    }
);
// con la funcion sort se encuentra el numero que mas veces se repite

const moda = lista1Array[lista1Array.length - 1]
