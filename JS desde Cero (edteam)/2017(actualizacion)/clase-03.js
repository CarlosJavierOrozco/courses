const numeros = [32,43,53,23,53,123,14,167,324,32,6]

let sum = 0;

for (let i in numeros){
	sum += numeros[i]
}

console.log(sum)


console.log(numeros.indexOf(53))


let numero = numeros.find(e => e > 100);

console.log(numero);

let numeroIndex = numeros.findIndex(e => e > 100)

console.log(numeroIndex)

console.clear();
console.log("#######################")

//let iterador = numeros.entries();
//let iterador = numeros.keys();
let iterador = numeros.values();

console.log(iterador.next().value)


console.log("######################")

const yo = {
	nombre: "Carlos J. Orozco",
	esCasado: true,
	hijos: false,
	esposa: "Mariyen Hernandez"
}

console.log(yo.hijos)

delete yo.hijos;

console.log(yo)

console.log("esCasado" in yo)

console.log(yo.hasOwnProperty('nombre'))

// hacer una copia

let yo2 = Object.assign({},yo);

console.log(yo);
console.log('la otra copia')
console.log(yo2);

console.clear()

let nombre = "Mariyen";
let edad = 28;

const esposa = {
//	nombre: nombre,
//	edad: edad
	
	nombre,
	edad,

//	["Nombre completo de " + nombre]: "Mariyen Hernandez"

	[`Nombre completo de ${nombre}`]: "Mariyen Ciao"
}

console.log(esposa)

console.clear()

let estudiantes = [
	{ 
		nombre: "Felipe",
		edad: 32	
	},
	{ 
		nombre: "Dayana",
		edad: 23	
	},
	{ 
		nombre: "Juan",
		edad: 12	
	},
	{ 
		nombre: "Carlos",
		edad: 22	
	},
	{ 
		nombre: "Jesus",
		edad: 43	
	},
	{ 
		nombre: "Maria",
		edad: 27	
	},
	{ 
		nombre: "Santiago",
		edad: 38	
	}
]

let nombreEstudiante = [];

for (let i = 0; i < estudiantes.length;i++){
	nombreEstudiante.push(estudiantes[i].nombre)
}

console.log(nombreEstudiante);

console.log("#######################")

let mapNombres = estudiantes.map(estudiante => estudiante.edad);

console.log(mapNombres);

let mayoresTreinta = estudiantes.filter(estudiante => estudiante.edad > 30);

let nombresMayoresTreinta = mayoresTreinta.map(estudiante => estudiante.nombre);

console.log(nombresMayoresTreinta);

console.clear()

let numbers = [2,5,67,3,4,12,7];

let suma = numbers.reduce( (a,b) => a + b);

console.log(suma);

let max = numbers.reduce( (a,b) => a > b ? a : b)

console.log(max)

let promedio = numbers.reduce( (a,b,i,array) => {
	b += a;

	// se puede resumir con un operador ternario

	if (i == array.length - 1) {
		return b / array.length;
	}else{
		return b;
	}
} ) 

console.log(promedio)


let estudianteMayor = estudiantes.reduce((a,b) => {
			
			if (a.edad > b.edad) {
				return {
					nombre: a.nombre,
					edad: a.edad
				}
			}else{
				return {
					nombre: b.nombre,
					edad: b.edad
				}
			}

		}

	)

console.log(estudianteMayor.nombre)