var n1 = prompt("escribe un numero");
var n2 = prompt("escribe otro numero");
var n3 = prompt("escribe el siguente numero");
if (n1 > n2 && n1 > n3) {
    alert('el numero mayor es: '+n1);
} else if (n2 > n3) {
    alert('el numero mayor es: '+n2);
} else {
alert('el numero mayor es: '+n3);
}
document.write('Los numeros que ingreso son:'+n1','+n2','+n3');