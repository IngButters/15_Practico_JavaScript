// Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El per[imetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide: " + areaCuadrado + "cm2");

console.groupEnd();


// Codigo del triangulo 
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo1 = 4;

console.log("Los lados del triangulo miden: " 
    + ladoTriangulo1 + "cm, " + 
    ladoTriangulo2 + "cm, " + 
    baseTriangulo1 + "cm"

);
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo miden: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 +baseTriangulo1;
console.log("El per[imetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo1 * alturaTriangulo) /2;
console.log("El area del triangulo mide: " + areaTriangulo + "cm2");

console.groupEnd()


// Codigo del circulo 
console.group("Circulos");

const radio = 4;
console.log("La radio del circulo es: " + radio + "cm");

const diametro = 2*radio;
console.log("La diametro del circulo es: " + diametro + "cm");

const PI = Math.PI;
console.log("PI es: " + PI + "cm");

// Circunferencia
const perimetroCirculo = diametro * PI;
console.log("La cricunferencia del circulo es: " + perimetroCirculo + "cm");

// Area del circulo
const areaCirculo = (radio * radio)*PI;
console.log("El area del circulo es: " + areaCirculo + "cm2");


console.groupEnd()