// este es un comentario
/*asd
alert ("estoy vivo");
console.log("aloja");
var nombre="ismael";
var apellidos="gutierrez";
var edad= 27;
console.log(nombre,apellidos,edad);
alert("mi nombre es"+nombre + edad);

var numero=1;
var numero=2;
*/

function saludar(){
    alert ("hola a todos");
}
saludar();

var cantar=function(){
    console.log("A MI ME GUSTA CANTAR");   
}
cantar();

function restar(numero1,numero2,resta){
    var numero1=6;
    var numero2=8;
    var resta= numero1-numero2
    alert(resta)
}
restar();

function cuadrado(cuadrado){
    var rescuadrado=cuadrado*cuadrado;
    alert ("el cuadrado del numero es: " +rescuadrado);
}
cuadrado(4);

function operaciones(num1,num2,num3,rest,mult){
    var rest=num1-num2-num3;
    var mult=num1*num2*num3;
    console.log("la resta es: "+rest)
    console.log("la multiplicacion es: "+mult)

}
operaciones(1,6,8);