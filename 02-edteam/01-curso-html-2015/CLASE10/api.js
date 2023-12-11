/*
REPASO TEÓRICO DE JAVASCRIPT

1. Variables. Son contenedores para valores.
    var miVariable = valor;
    var pais = "Perú";

2. Tipos de datos
    String      (va entre comillas)
    Number      (para realizar calculos)
    Boolean     (true|false)

3. Condicionales
    Permite bifurcar la ejecución del código
    Ejemplo (seudo código):
        if(amanecio){
            despertarme;
        } else {
            seguir durmiendo;
        }

    Ejemplo (código js)
        if(navigator){
            console.log('Tu navegador está actualizado');
        } else {
            console.log('Tu navegador es obsoleto');
        }

4. Funciones
    Son porciones de código con una utilidad única. 
    Ejemplo:
        function miFuncion(){
            // codigo de la funcion
        }
    Dentro de los paréntesis pueden pasarse parámetros, que son datos con los que trabaja la función.
    Ejemplo:
        function sumar(a,b){
            console.log(a+b);
        }

        sumar(5,6);

5. Objetos
    Es una coleccion de datos organizados en el formato "clave: valor" y encerrado entre llaves.
    Ejemplo:
        var miObjeto = {
            clave1: valor1,
            clave2: valor2,
            clave3: valor3,
            clave4: valor4
        }
        var miMascota = {
           nombre: "Dino",
           tipo: "perro",
           color: "blanco",
           peso: "30kg",
           correr: function(){
             console.log("Dino está corriendo");
           } 
           comidas: {
                favorita: "pollo",
                prohibida: "pescado"
                diarias: 3
           } 
        }
    Los objetos tiene métodos y propiedades. Las propiedades son valores (datos) que representan características. Mientras que los métodos son funciones, que hacen algo.

    Se accede a ellos así:
        objeto.propiedad
        objeto.metodo()

    También los objetos pueden tener objetos dentro.

6. Eventos
    Cualquier cosa que sucede en la aplicación. Se pueden ejecutar funciones cuando un evento ocurra. Para hacerlo, la sintaxis es (seudo codigo):

        elemento.addEventListener('evento',funcion)

    Ejemplo (codigo js):

    var titulo = document.getElementById('titulo');
    var titulo = document.getElementById('titulo');
    titulo.addEventListener('click', clickTitulo);
    function clickTitulo(){
        console.log("Has hecho click en el titulo");
    }
*/

// Recursos para conocer la API JS de HTML5
/*
    Can I Use
        http://caniuse.com/
    MDN
        https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

    W3Schools
        http://www.w3schools.com/jsref/
*/
