// var libros=[];
// var booksname=[];

// class Book{
//     constructor(nombre, autor) {
//         this.nombre= nombre;
//         this.autor= autor;
//     }
// }

// do {
//     var nombre=prompt("introduce el nombre del libro");
//     var autor=prompt("introduce el autor");

//     const libro_i=new Book(nombre, autor); 
//     this.libros.push(libro_i);
//     var cont=prompt("desea agregar más?")
// } while (cont==="si");

// console.log(libros);

// for (let idx in libros) {
//     booksname.push(libros[idx].nombre);
// }
//     // booksname.pop();
//     console.log(booksname);

// ##############################################################################################################

// var array=["hola esto String","frase con palabra"];
// var palabra_mas_larga="";
// var contador=0; 

// for (let idx in array) {
//     var palabras= array[idx].replace(","," ").split(" ");
//     palabras.forEach(function(palabra){
//         if (palabra.length> palabra_mas_larga.legth) {
//             palabra_mas_larga= palabra;
//         };
//     });
//     return palabra_mas_larga;
// }
// #################################################################################################################


var divisor=[];

// for (let i=2; i<=Math.floor(Math.sqrt(numero)); i++) {
   
//     if (numero%i===0) {
//         divisor.push(i);
//       }
// }

// if(typeof divisor !== "undefined" && divisor!== null && divisor.length>0){
//     console.log(divisor);
//    } else {
//     console.log("Es primo");
//    }
// var numero=parseInt(prompt("introduce un numero"));
// var numbers=[];  
// var contador=0;
// for(let i=2; i<=Math.floor(Math.sqrt(numero)); i++) {
//         numbers.push(i);
//         contador++;
//         if (cntador===Math.floor(Math.sqrt(numero))) {
//             var fin=true;
//         }
// } 
// if(fin === true) {
//     if(divisor !== "undefined" && divisor !== null && divisor.length>0) {
//         return divisor;
//     } else {
//         return "Es primo";
//     }
// }
var string=prompt("introduce una palabra");

var str=[];
 
for (let i=0; i<string.length; i++) {
  str.push(string[i].repeat(2));
}
console.log(str);


