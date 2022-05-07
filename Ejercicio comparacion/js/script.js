let n1 = prompt ("Hola usuario, ingrese un numero");
let n2 = prompt ("Hola usuario, ingrese otro numero");
document.write  ("Tus dos numeros son " , parseInt(n1) , " y ", parseInt(n2));
document.write  ("<br>");
document.write  ("<br>");
document.write  ("La suma de tus dos numeros da ", parseInt(n1) + parseInt(n2));
document.write  ("<br>");
document.write  ("<br>");
if (n1 > n2) {
    document.write (parseInt(n1) , " es el numero mayor y " , parseInt(n2) , "es el numero menor");
}
else {
    document.write (parseInt(n2) , " es el numero mayor y " , parseInt(n1) , " es el numero menor");
}