//propiedades dinamicas

const esposas = ["Mariyen","Elisabeth","Yosleinas"];

const wives = {};

esposas.forEach((esposa,i) => wives[`id_${i}`] = esposa);

console.log(wives.id_0);


//funciones generadoras

function* generador(){
  yield "primer yield";
  console.log("seguimos");
  yield "el segundo yield";
  console.log("ultima tarea");  
}

let yields = generador();

for (const iterator of yields) {
  console.log(iterator);
}

const arr = [...generador()];


// funciones autoejecutables

(function (d) {
  console.log(d)
})(document);


//iteradores

console.log("iteradores")
const i = esposas[Symbol.iterator]()


console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())