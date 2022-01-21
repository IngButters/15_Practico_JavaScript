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

// Codigo del cuadrado
console.group("Triangulo isoceles");

function atrianguloi(lado1, lado2, base){
    return Math.sqrt(Math.pow(lado1,2)-Math.pow((base/2),2));
}

function calcularAlturaTriangulo(){
    // Esto permite obtener la etiqueta
    const input1 = document.getElementById("inputTrianguloA");
    const input2 = document.getElementById("inputTrianguloB");
    const input3 = document.getElementById("inputTrianguloC");
    // Para obtener el valor en la etiqueta
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    if (value1 == value2) {
    // Se calucla el perimetro de acuerdo con la funcion que esta arriba
        const altura = atrianguloi(value1, value2, value3);
        alert(altura);
    }

    else {
        alert("No es un triangulo isoceles");
    }
}

console.groupEnd()