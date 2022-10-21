// LAS FUNCIONES DEBEN TENR UN PARENNTESIS JUNDO AL NOMBRE //
function saludo(){
    alert("algoritmo para operaciones basicas Suma / Resta / Multiplicacion / Division")
    var S;
    var R;
    var D;
    var M;
    A = parseInt(prompt("ingrese primer numero"));
    B = parseInt(prompt("ingrese segundo numero"));
    M = A * B;
    S = A + B;
    R = A - B;
    D = A / B;
    alert(" la suma es" + S)
    alert(" la multiplicacion es" + M)
    alert(" la division es" + D)
    alert(" la resta es" + R)
}
function cuadrado(){
    alert("algoritmo para saber el cuadrado de un numero")
    var A;
    var Mul;

    A = parseInt(prompt("ingrese numero"))
    Mul = A * A;
    alert("el cuadrado es" + Mul)
}
function triangulo(){
    alert("algoritma para saber el area del tiangulo")
    var B;
    var H;
    var igual;
    
    B = parseInt(prompt("ingrese la base"))
    H = parseInt(prompt("ingrese la altura"))

    igual = (B * H)/2
    alert("el area del triangulo es" + igual)
}
function pulgadas(){
    alert("algoritmo para pasar pulgadas a centimetros y kilometros")
    var P;
    var C;
    var K;
    
    P = parseInt(prompt("ingrese pulgadas"))
    C = P * 2.54
    K = P * (1 / 39.370) * (1 / 1000)
    alert("las pulgadas en centimetros es" + C)
    alert("las pulgadas en kilometros es" + K)


}
    function edad(){
        alert("algoritmo para saber en ue año nacio")
        var edad;
        var total;
        edad = parseInt(prompt("ingrese su edad"));
        edad = 2022-edad ;
        alert(" el usuario nacio en el año  " + edad);
   
}
function promedio(){
    alert("Algoritmo para saber si aprobo o reprobo una materia");
var Na;
var Nb;
var Nc;
var Nd;
var Nf;
var Ng;
var Nh;
var suma;
var promedio;

Na = parseInt(prompt("Ingrese el primer nota"));
Nb = parseInt(prompt("Ingrese el segunda nota"));
Nc = parseInt(prompt("Ingrese el tercera nota"));
Nd = parseInt(prompt("Ingrese el cuarta nota"));
Nf = parseInt(prompt("Ingrese el quinta nota"));
Ng = parseInt(prompt("Ingrese el sexta nota"));
Nh = parseInt(prompt("Ingrese el septima nota"));

suma = (Na+Nb+Nc+Nd+Nf+Ng+Nh);
promedio = suma/7;

 if (promedio<3 ) {
    alert("REPROBO, su nota es:" + promedio);}
else {
    alert("APROBO, su nota es: " + promedio);}
}
   function banco(){
    alert("algoritmo para saber las ganacias despues de invertir")
    var inver;
    var ano;
    var gana;
    inver = parseInt(prompt("ingrese el valor a invertir"));
    ano = parseInt(prompt("ingrese los años"));
    gana = inver * 0.008
    ano1 = ano * 12
    total1 = ano1 * gana
    total2 = total1 + inver

    alert("el valor de sus ganancias es de: " + total1 );
    alert ("el total de su inversion y sus ganacias son de: " + total2 );
}
 function serviciomilitar(){
    alert("algoritmo para saber si soy apto para prestar el servicio militar abligatorio");
    var edad = parseInt(prompt("por favor ingrese su edad"));
    var genero = prompt("por favor ingresar masculino o femenino");

    if(genero =="femenino") {
        alert("no eres apta para el smo");
    }else{
        if (edad>17 && edad<25) {
            alert("eres apto para prestar el servicio militar");
        }else{
            alert("no eres apto por edad")
        }
        
    }
 }
 function fruteria(){
    var Kilos;
    var div;
    var div2;
    var div3;
   
 
    alert("algoritmo para saber cuanto descuento recibe en su compra")

    var Kilos = parseInt(prompt("ingrese numero de kilos"))
    div = (10/100)*4500;
    
    div2 =(15/100)*4500;
    
    div3 =(20/100)*4500;
    
    if (Kilos <3){
        alert("no se le da descuento");
    }else{
        if(Kilos >2 && Kilos <6){
            alert("Recibe un descuento de 10% a su compra se le descuanta: " + div);
        }if(Kilos >5 && Kilos <11){
            alert("Recibe un descuento de 15% a su compra se le descuanta: " + div2);
        }if(Kilos>10){
            alert("recibe un descuento de 20% a su compra se le descuanta: " + div3)
        }

    }

 }

 function obrero(){
    var horas;
    var Hora;
    var horaextra;
 

    alert("Algoritmo para saber cuanto se le paga a la semana a un obrero")
    var horas = parseInt(prompt("ingrese horas trabajadas"))
    Hora = horas*10000;
    horaextra = (horas*20000)-400000;
   

    if(horas <41){
        alert("su paga por las horas trabajadas es : " + Hora );
    }else{
        if(horaextra>40){
            alert("su paga con horas extra es: " + horaextra);
        }
    }

 }

 function numeros(){
    alert("algoritmo para saber la cantidad de un numero")
  
    num=0
    total=0
    num= parseInt(prompt("ingrese numeros"))
    while (num >=1){
        num=num/10
        total=total+1

    
    }
    alert("los numeros ingresados fueron" + total);
  
 }

