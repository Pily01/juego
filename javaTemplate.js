var ya = true

addEventListener("mousemove", () => {
  if (ya) {
    ya = false
    var musica = new Audio
    musica.src = "./arcade-game-menu-music-loop-sound-effect-8-bit-style.mp3"
    musica.play()
  } 

})