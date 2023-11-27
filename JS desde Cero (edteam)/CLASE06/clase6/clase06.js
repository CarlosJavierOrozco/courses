// obtener el canvas
let canvas = document.getElementById('myCanvas1');
// obtener el contexto
let ctx = canvas.getContext('2d');
// anchura y altura en variables.
let w = canvas.width;
let h = canvas.height;
ctx.moveTo(0, h/2);
ctx.lineTo(w,h/2);
ctx.moveTo(0,0);
ctx.lineTo(w,h);
ctx.moveTo(w,0);
ctx.lineTo(0,h);
ctx.moveTo(w/2,0);
ctx.lineTo(w/2,h);
// dibujar la linea
ctx.stroke();

let c2 = document.getElementById('myCanvas2');
let ctx2 = c2.getContext('2d');
// cantidad de lineas - 1
let l = 15;

for (let i = 0; i < l; i++) {
  ctx2.moveTo(0, i * (h / l));
  ctx2.lineTo(w, i * (h / l));
}
ctx2.stroke();

let c3 = document.getElementById('myCanvas3');
let ctx3 = c3.getContext('2d');

//ctx3.rect(50,50,200,100)
ctx3.arc(w/2,h/2,120,0,Math.PI * 2)
ctx3.fillStyle = "red"
ctx3.fill();

// AUDIO Y VIDEO

let video = document.getElementById('video')

video.addEventListener('ended', () => alert("SE HA TERMINADO"));