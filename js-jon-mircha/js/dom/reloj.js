
const d = document

export function digitalCLock(clock,btnPlay,btnStop) {
  let clockTempo


  d.addEventListener("click",(e)=>{    
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(()=>{
        let clockHours = new Date().toLocaleTimeString()
        d.querySelector(clock).innerHTML = `<h3>${clockHours}</h3>`
      },1000)

      e.target.disabled = true
    }

    if (e.target.matches(btnStop)) {
      window.clearInterval(clockTempo)
      d.querySelector(clock).innerHTML = null
      d.querySelector(btnPlay).disabled = false
    }


  })
}

export function alarm(sound,btnPlay,btnStop) {
  
  let alarmaTempo
  const $alarm = d.createElement("audio")
  $alarm.src = sound

  d.addEventListener("click",(e)=>{
    if (e.target.matches(btnPlay)) {
      alarmaTempo = setTimeout(()=>{
        $alarm.play()
      },2000)
      e.target.disabled = true
    }

    if (e.target.matches(btnStop)) {
      $alarm.pause()
      $alarm.currentTime = 0
      clearTimeout(alarmaTempo)
      d.querySelector(btnPlay).disabled = false
    }

  })

}