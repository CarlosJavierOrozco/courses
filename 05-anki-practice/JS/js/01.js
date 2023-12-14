//propiedades dinamicas

const esposas = ["Mariyen","Elisabeth","Yosleina"];

const wives = {};

esposas.forEach((esposa,i) => wives[`id_${i}`] = esposa);

console.log(wives.id_0);