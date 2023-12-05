const d = document
let x = 0
let y = 0
export function moveBall(e,ball,stage){

  const $ball = d.querySelector(ball)
  const $stage = d.querySelector(stage)
  const limitBall = $ball.getBoundingClientRect()
  const limitStage = $stage.getBoundingClientRect()

//console.log(e.keyCode)

  switch(e.keyCode){

    case 37:
      if (limitBall.left > limitStage.left) {
        x--
        e.preventDefault()
      }
      break;

    case 38:
      if (limitBall.top > limitStage.top) {
        y--
        e.preventDefault()
      }
      break;

    case 39:
      if (limitBall.right < limitStage.right) {
        x++
        e.preventDefault()
      }
      break;

    case 40:
      if (limitBall.bottom < limitStage.bottom) {
        y++
        e.preventDefault()
      }
      break;
  }

  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
}

export function shortcuts(e){

  // console.log(e.type)
  // console.log(e.key)
  // console.log(e.keyCode)

  if (e.key === "a" && e.altKey) {
    alert("lanzaste un alert con el teclado")
  }


}