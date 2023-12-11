const d = document

export default function countdown(id,limitDate,finalMessage){
  const $countdown = d.getElementById(id);
  const countdownDate = new Date(limitDate).getTime();

  let countdown = setInterval(()=>{ let now = new Date().getTime(); 
  let limitTime = countdownDate - now; 
  let days =  Math.floor(limitTime / ((1000 * 60) * 60 * 24)); 
  let hours = ("0" + Math.floor(limitTime % ((1000 * 60) * 60 * 24) / ((1000 * 60) * 60))).slice(-2);
  let minutes  = ("0" + Math.floor(limitTime % ((1000 * 60) * 60) / ((1000 * 60)))).slice(-2);
  let seconds = ("0" + Math.floor(limitTime % ((1000 * 60)) / ((1000)))).slice(-2);; 

  $countdown.innerHTML = `<h3>Faltan <span class="textCount">${days}</span> dias <span class="textCount">${hours}</span> horas <span class="textCount">${minutes}</span> minutos <span class="textCount">${seconds}</span> segundos para tu cumpleaños</h3>`

  if (limitTime < 0) {
    clearInterval(countdown)
     $countdown.innerHTML = `<h3><span class="textCount">${finalMessage}</span></h3>`
  }

  },1000)
}