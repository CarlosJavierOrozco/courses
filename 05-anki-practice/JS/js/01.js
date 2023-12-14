//propiedades dinamicas

const esposas = ["Mariyen","Elisabeth","Yosleina"];

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

const arr = [...generador()]
