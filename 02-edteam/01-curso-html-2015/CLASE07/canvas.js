/*
    Introducción a JavaScript
    
    JS es un lenguaje de programación del lado del cliente (significa que el navegador lo interpreta).

    VARIABLES

    Son contenedores para valores.

        var profesor = "Juan Perez";

    OBJETOS

    Casi todo en JS es un objeto. Los objetos tienen propiedades y métodos. Las propiedades son características mientras que los métodos son funciones (hacen algo).
    Ejemplo:

        profesor.edad       (propiedad)   
        profesor.caminar    (método)

    Sintaxis:

    Los métodos y las propiedades se escriben con punto después del objeto al que hacen referencia.

    Las propiedades pueden servir para dos fines:
        1. Obtener un valor (get - getters)
        2. Definir un valor (set - setters)

        profesor.edad = 35;                  (set)
        var edadProfesor = profesor.edad;    (get)

    Los métodos también pueden ser getters o setters. Su sintaxis es con paréntesis. Dentro de los paréntesis pueden pasarse valores con los cuales el método trabajará.

        profesor.caminar()
        profesor.dormir('10pm')
    
    TIPOS DE DATOS

    Existen tres tipos de datos primitivos:

    Number    
        (numero, se usa para cálculos)
    String    
        (cadenas de texto y numeros, se encierran entre comillas)
    Boolean
        (valores de verdadero,true, o false, false)
*/

// Comenzar con CANVAS

// Paso 1: Obtener el canvas

    var canvas = document.getElementById("mycanvas");

// Paso 2: Obtener el contexto  
    var ctx = canvas.getContext("2d");

// Paso 3: Entender las coordenadas: el punto 0,0 es la esquina superior izquierda. Los positivos en X son hacia la derecha y los positivos en Y son hacia abajo.

// Paso 4: Empezar a dibujar con métodos y propiedades de ctx
    
    // Podemos meter los tamaños del canvas en variables 
        var w = canvas.width;
        var h = canvas.height;

    // Dibujar lineas
        // 1. Definir el punto inicial
        ctx.moveTo(w/2,h/2);
        // 2. Definir el punto final
        ctx.lineTo(0,h);
        ctx.lineTo(w,h/2); // otras lineas comienzan donde terminan las anteriores
        ctx.lineTo(w/2,0);
        // 3. Dibujar la linea
        ctx.stroke();

        // Si quiero una nueva linea independiente
        ctx.beginPath();
        ctx.moveTo(w/2,h/2);
        ctx.lineTo(w,h);
        ctx.stroke();

        // Podemos definir colores y anchos
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(w/2,h/2);
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Podemos cerrar rutas
        ctx.beginPath();
        ctx.moveTo(w/2,h/4);
        ctx.lineTo(w/2,h/2);
        ctx.lineTo(w*0.75,h*0.25);
        ctx.closePath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "green";
        // Para rellenos
        ctx.fillStyle = "yellow";
        // con .fill() se dibuja el relleno
        ctx.fill();
        ctx.stroke();

    // Rectangulos
        // el método .rect() dibuja un rectángulo
        // requiere los siguientes parametros: x,y,w,h
        ctx.beginPath();
        ctx.rect(100,400,300,100);
        ctx.fillStyle = "green";
        ctx.strokeStyle = "purple";
        ctx.lineWidth = 5;
        ctx.fill();
        ctx.stroke();

        // Solo el borde
        ctx.beginPath();
        ctx.strokeStyle = "orange";
        ctx.strokeRect(100,200,300,100);

        // Solo el relleno
        ctx.beginPath();
        ctx.fillStyle = "rgba(0,0,255,0.5)";
        ctx.fillRect(100,10,300,100);

    // Circulos
        /*
            Con el método .arc() que recibe los siguientes parámetros:
            cx              valor x del centro
            cy              valor y del centro
            r               radio
            startAngle      angulo inicial
            endAngle        angulo final
            clockwise       sentido horario o antihorario (boolean)
        */
        ctx.beginPath();
        // cachear el valor de un giro
        var g = Math.PI*2;
        ctx.arc(w/2,h/2,150,0,g);
        ctx.fillStyle = "rgba(255,255,0,.8)";
        ctx.fill();
        ctx.stroke();
        /*
        Angulos

                    270


            180               0


                    90
        */

    // Textos:
        /*
            .fillText()
            .strokeText()

            Los parametros son:

            el texto (string)
            x
            y

            Quedaria asi:

            ctx.fillText("hola",50,100)
            ctx.strokeText("hola",50,100)
        */
        ctx.beginPath();
        ctx.font = "bold 30px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Mamá, ¡ya sé Canvas!", 100,100);

        ctx.beginPath();
        ctx.strokeText("Hola",200,250);
        
    