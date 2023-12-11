

/*function cuadrado(valor, callback){
  setTimeout(()=>{
    callback(valor, valor * valor);
  }, Math.random() * 3000)
}

cuadrado(0,(valor,resultado)=>{
  console.log("inicio");
  console.log(`
    valor: ${valor}
    resultado: ${resultado} `);

    cuadrado(1,(valor,resultado)=>{
      console.log(`
        valor: ${valor}
        resultado: ${resultado} `);

      cuadrado(2,(valor,resultado)=>{
      console.log(`
        valor: ${valor}
        resultado: ${resultado} `);
        cuadrado(3,(valor,resultado)=>{
        console.log(`
          valor: ${valor}
          resultado: ${resultado} `);
          cuadrado(4,(valor,resultado)=>{
          console.log(`
            valor: ${valor}
            resultado: ${resultado} `);          

})
})
})
})
})*/



/*function cuadradoPromises(valor){
  if (typeof valor !== "number") {
    return Promise.reject(`Error el valor "${valor}" ingresado no es un numero`)
  }
  
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({
          valor,
          resultado : valor * valor
        })
      }, 0 | Math.random());
  });

}


cuadradoPromises(0)
  .then((obj)=>{
    //console.log(obj)
    console.log("inicio")
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
    return cuadradoPromises(1)
  })
  .then((obj)=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
    return cuadradoPromises(2)
  })
  .then((obj)=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
    return cuadradoPromises("s")
  })
  .then((obj)=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
    return cuadradoPromises(4)
  })
  .then((obj)=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
    return cuadradoPromises(5)
  })
  .then((obj)=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
    console.log("fin")
   })
  .catch(err => console.error(err))*/


  