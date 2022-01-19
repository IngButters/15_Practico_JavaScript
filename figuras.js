// Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El per[imetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado mide: " + areaCuadrado + "cm2");

console.groupEnd();


// Codigo del triangulo 
console.group("Triangulos");


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}



console.groupEnd()


// Codigo del circulo 
console.group("Circulos");

function diametroCirculo(radio){
    return radio *2;
}

const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Area del circulo
function areaCirculo(radio){
    return (radio * radio) *PI;
}



console.groupEnd()

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    // Esto permite obtener la etiqueta
    const input = document.getElementById("inputCuadrado");
    // Para obtener el valor en la etiqueta
    const value = input.value;

    // Se calucla el perimetro de acuerdo con la funcion que esta arriba
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
        // Esto permite obtener la etiqueta
        const input = document.getElementById("inputCuadrado");
        // Para obtener el valor en la etiqueta
        const value = input.value;
    
        // Se calucla el perimetro de acuerdo con la funcion que esta arriba
        const area = areaCuadrado(value);
        alert(area);

}