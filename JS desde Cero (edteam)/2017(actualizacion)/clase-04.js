// Que es una expresion? - es un pedazo de codigo que devuelve un valor.


let Pais = function(nombre,moneda){
	this.name = nombre;
	this.coin = moneda;
};

let venezuela = new Pais('Venezuela','Bolivar');


console.log(venezuela)


// apply() y call()

function sumar(a,b,c){
	return a + b + c;
}

let numeros = [2,4,4]

let miSuma = sumar.apply(undefined,numeros);
console.log(miSuma)

// sumar todo js5

/////////////////////////////////////////////////////
//
//function sumarTodo(){
//
//	let sum = 0;
//
//	for (let i = 0; i < arguments.length; i++){
//		sum += arguments[i];
//	}
//
//	return sum;
//}
//////////////////////////////////////////////////////
console.clear()
//console.log(sumarTodo(2,2,2,4,5,3,2));


// sumar todo el el spread operator
//function sumarTodo(){
//	return [...arguments].reduce( (a,b) => a + b);
//}

//console.log(sumarTodo(123,21,5,352,12,1,25,1,32,5,854,66,32,56,5,1,152,112));

//let num = [12,23,12,12,321];

//console.log(sumarTodo(...num))

// otra forma de sumar todo con el parametro rest

function sumarTodo(...numeros){
	return numeros.reduce((a,b) => a + b);
}


console.log(sumarTodo(23,23,32,23,23,23,3))