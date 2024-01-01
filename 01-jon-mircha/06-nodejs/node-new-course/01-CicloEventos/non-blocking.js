const { error } = require("console");
const fs = require("fs");
console.log("Inicio del programa");

fs.readFile("file.txt","utf-8",(error,data) =>{
    if (error) throw error;
    console.log(data);
})


console.log("fin del programa");