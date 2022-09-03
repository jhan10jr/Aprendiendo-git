/*numero1 = "1";
/*numero2 = "2";
frase =  "numero1.concat(numero2)";

document.write(frase)*/

/*nombre = "jhan";
frase = `soy ${nombre} y estoy camininando`;

document.write(frase);*/
/*

let numero = 23;
let numero2 = 5;
document.write(numero >= numero2);
*/
/*Condicionales

nombre = "jhan";

if  (nombre == "jhan") {
    alert("tu nombre es  lucas");
}

else if (nombre =="juan") {
    alert("tu nombre es buenardo");
}


else {
    alert("tu nombre es otro");
}*/

/*
//ejercicio 
dineroCofla = prompt("Cuanto dinero tienes cofla?");
dineroRoberto = prompt("Cuanto dinero tienes roberto?");
dineroPedro =  prompt("Cuanto dinero tienes pedro?");

dineroCofla = parseInt(dineroCofla);
//Cofla
if  (dineroCofla >= 1 && dineroCofla < 1) {
    alert("Cofla comprate el helado del agua");
    alert("y te sobran" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla > 1.6) {
    alert("Cofla comprate el helado de crema")
    alert("y te sobran" + (dineroCofla - 1));
}


else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla comprate el helado de heladix")
    alert("y te sobran" + (dineroCofla - 1.6));
}


else if (dineroCofla >= 1.7 && dineroCofla > 1.8) {
    alert("Cofla comprate el helado de heladovich")
    alert("y te sobran" + (dineroCofla - 1.7));
}



else if (dineroCofla >= 1.8 && dineroCofla > 2.9) {
    alert("Cofla comprate el helado de helardo");
    alert("y te sobran" + (dineroCofla - 1.8));
}

else if (dinPedro1.a >= 2.9) {
    alert("Cofla helado con confites o pote de 1/4kg");    
}

else {
    alert("Cofla lo siento, el dinero no es suficiente")
}

//Roberto
if  (dineroRoberto >= 1 && dineroRoberto < 1) {
    alert("Roberto comprate el helado del agua");
}

else if (dineroRoberto >= 1 && dineroRoberto > 1.6) {
    alert("Roberto comprate el helado de crema")
}


else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto comprate el helado de heladix")
}


else if (dineroRoberto >= 1.7 && dineroRoberto > 1.8) {
    alert("Roberto comprate el helado de heladovich")
}



else if (dineroRoberto >= 1.8 && dineroRoberto > 2.9) {
    alert("Roberto comprate el helado de helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("helado con confites o pote de 1/4kg");    
}

else {
    alert("Roberto lo siento, el dinero no es suficiente")
}

//Pedro
if  (dineroPedro >= 1 && dineroPedro < 1) {
    alert("Pedro1. comprate el helado del agua");
}

else if (dineroPedro >= 1 && dineroPedro > 1.6) {
    alert("Pedro1. comprate el helado de crema")
}


else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro1. comprate el helado de heladix")
}


else if (dineroPedro >= 1.7 && dineroPedro > 1.8) {
    alert("Pedro1. comprate el helado de heladovich")
}



else if (dineroPedro >= 1.8 && dineroPedro > 2.9) {
    alert("Pedro1. comprate el helado de helardo");
}

else if (dineroPedro >= 2.9) {
    alert("Pedro1. helado con confites o pote de 1/4kg");    
}

else {
    alert("Pedro1. lo siento, el dinero no es suficiente")
}

*/

/*
frutas = ["banana", "manzana", "mangostino", "physalis"];

document.write(frutas[1])*/


/*Funciones
respuesta = prompt("Hola jhan, que tal tu dia?");
if(respuesta == "bien") {
alert("Me alegro")
} else {
    alert("una pena")
} 

saludar = function () {
    respuesta = prompt("Hola jhan, que tal tu dia?");
    if(respuesta == "bien") {
    alert("Me alegro")
    } else {
        alert("una pena")
    } 
}

saludar() 
*/
/*
function saludar() {
    alert("hola");
    return "todo bien"
}

let saludo = saludar()

document.write(saludo)*/

// function suma(num1,num2) {
//     let res = num1 + num2;
//     return res

// }

// let resultado = suma(20,25);
// document.write(resultado)

const saludar = (nombre)=> {
    let frase = `¡Hola  ${nombre}! ¿como estas?`;
    document.write(frase);
}

saludar("pedro")