function calcularMediaAritmetica(lista){
    /*     let sumaLista = 0;
    
        /* Reduce funciona como un for */
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
    
            }
        );
    
        const promedioLista = sumaLista / lista.length;
    
        return promedioLista;
    
    }

const lista1 = [
    100,
    200,
    300,
    4000000
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){

    if(numerito % 2 === 0){
        //Si la lista es par
        return true
    }
    else {
        //Si la lista es impar
        return false
    }

}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const PromedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);

    mediana = PromedioElemento1y2

}
else {
    mediana = lista1[mitadLista1]
}
