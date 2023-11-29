

function cuadrado(valor, callback){
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
})