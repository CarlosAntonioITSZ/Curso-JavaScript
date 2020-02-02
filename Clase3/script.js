var array= new Array(80); //Creamos una matriz con 80 elementos indefinidos
document.write(array.length);
document.write(" ");

var array2=[["Pablo",15,true],["Juan",20,false]];
//document.write(array2[1][2]);

array2.unshift(["Carlos",19,true]);
document.write(" ");
document.write(array2);
document.write(array2[0]);

var fruitArray = ["manzana", "melocotón", "naranja", "limón", "lima", "cereza"]; 
fruitArray.splice (2, 0, "melón", "plátano");
console.log (fruitArray); 
// Imprime ["manzana", "melocotón", "melón", "plátano", "naranja", "limón", "lima", "cereza"]

var fruitArray = ["manzana", "melocotón", "naranja", "limón", "lima", "cereza"]; 
fruitArray.splice (2,1);console.log (fruitArray); 
// Imprime ["manzana", "melocotón", "limón", "lima", "cereza"] 