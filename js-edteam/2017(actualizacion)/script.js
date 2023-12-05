let saludo = "     hola a todos           ";

console.log(saludo);

console.log(saludo.trim());

console.log(saludo.trim().toUpperCase());

// buscar el string 'todos' a partir del indice 5

console.log(saludo.indexOf('todos',5))
// 12

// busca desde atras

console.log(saludo.lastIndexOf('todos',15));
// 12

let nuevoSaludo = saludo.replace('a todos', 'mundo');

console.log(nuevoSaludo.trim());

let hermnaos = "Carlos, Jesus, Julio";

// se creo el arreglo de todos los hermanos.
let arreglo = hermnaos.split(',');

console.log(arreglo)
console.log(hermnaos)

// se creo el arreglo con solo 2 hermanos.

console.log(hermnaos.split(',',2))

let strings = "123456789ABCDEFGHIJK";

console.clear();
console.log(strings);
// significa que se mostrara desde el 4 hasta el indice 7
console.log(strings.substring(4,7));

// significa que se motrara desde el indice 4 7 elementos.
console.log(strings.substr(4,7));

// significa que se mostrara desde el 4 hasta el indice 7
console.log(strings.slice(4,7))

console.log('#####################');

console.log(strings.substring(4,-1));

console.log(strings.slice(4,-11))


console.log(strings.startsWith("1"))
// endsWith() terminar en?
// includes() incluye el string?


let hermanas = ['Mary','Yederly','Elia'];


// solo las que comiencen con...
for (var i = 0; i < hermanas.length;i++){

	if (hermanas[i].toUpperCase().indexOf('Y') == 0 ) {
	console.log(hermanas[i])
	}
}

console.log("######## for normal #########")


for (var i = 0; i < hermanas.length;i++){

	console.log(hermanas[i])

}

// recorre objetos, el dom etc 
console.log("####### for of #########")

for (let i of hermanas){
	console.log(i)
}

console.log("####### for in #########")

for (let i in hermanas){
	console.log(hermanas[i])
}

