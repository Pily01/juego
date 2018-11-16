/////////////////////////////////////////////////////////////////////////////////
///////////// G A M E (MULTIJUGADOR)  ----  P R O J E C T ////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////// I R O N   H A C K  ------ P I L Y ------- N O V / 1 6 / 2 0 1 8 ////////
////////////////////////////////////////////////////////////////////////////////


/////-°°°°----------------------C A N V A S -------------------------------------°°°°-//

var canvas = document.getElementById("gameCanvas")
var ctx = canvas.getContext("2d")
var score = 20

var canvas2 = document.getElementById("gameCanvas2")
var ctx2 = canvas2.getContext("2d")
var score2 = 20


/////-°°°°----------------------V A R I A B L E S --------------------------------°°°°-//

var interval

var frames = 0

var gameOverLogo = document.createElement("img")
gameOverLogo.src = "gameOverLogo.png"

var youRockLogon = document.createElement("img")
youRockLogon.src = "youRockLogo.png"

  // # Arrows Data
var arrowsSrc = ["arrow1.png", "arrow2.png","arrow3.png","arrow4.png","arrow5.png"]

var arrows = []
var arrows2 = []

  // #Letters Data (x coordinates, keyCode, image source)
var letters = []
var lettersIndex = [0,1,2,3,4]
var xCoord = [55, 175, 305, 425, 545]
var lettersKeyCode = [65,83,68,70,71]
var lettersSrc = ["letterA.png", "letterS.png","letterD.png", "letterF.png","letterG.png"]


var letters2 = []
var letters2Index = [0,1,2,3,4]
var letters2KeyCode = [72,74,75,76,192]
var letters2Src = ["letterH.png", "letterJ.png","letterK.png", "letterL.png","letterÑ.png"]

  // # Images sources
var images = {
  bg: "danceFloor.png",
  dancer: "http://pixelartmaker.com/art/f517e09af9b5f97.png",
  danceBall: "https://vignette.wikia.nocookie.net/pufflescp/images/4/43/Purple_Puffle%27s_Disco_Ball_art.PNG/revision/latest?cb=20130104022203",
  scoreSpeaker: "speakerScore.png",
  dansometerM:"dansometerM.png",
  dansometerL:"dansometerL.png",
  dansometerH:"dansometerH.png",
}

  // # Songs sources
var weWill = document.getElementById("weWill")
var weWillAudio = document.createElement("audio")
weWillAudio.src = "Queen- We will rock you con letra.mp3"

var boogie = document.getElementById("boogie")
var boogieAudio = document.createElement("audio")
boogieAudio.src = "Earth, Wind & Fire - Boogie Wonderland.mp3"

var gameOvAudio = document.createElement("audio")
gameOvAudio.src = "Gameover Sound Effect.mp3"

var despacito = document.getElementById("despacito")
var despacitoAudio = document.createElement("audio")
despacitoAudio.src = "Luis Fonsi Despacito ft Daddy Yankee (with lyrics - con letra) (Descarga - Download).mp3"

var billiejean = document.getElementById("billiejean")
var billiejeanAudio = document.createElement("audio")
billiejeanAudio.src = "Billie Jean by Michael Jackson w Lyrics.mp3"

var quebello = document.getElementById("quebello")
var quebelloAudio = document.createElement("audio")
quebelloAudio.src = "QUE BELLO - MARGARITA LA DIOSA DE LA CUMBIA (En Vivo).mp3"



var winnerAudio = document.createElement("audio")
winnerAudio.src = "arcade-game-menu-music-loop-sound-effect-8-bit-style.mp3"

var songMenu = document.getElementById("songMenu")
var containerPadre = document.getElementById("papa")

boogie.addEventListener("click", function(){
  boogieAudio.play()
  boogie.style.display = "none"
  weWill.style.display = "none"
  despacito.style.display = "none"
  billiejean.style.display = "none"
  quebello.style.display = "none"
  songMenu.style.display = "none"
  containerPadre.style.display = "flex"
})

weWill.addEventListener("click", function(){
  weWillAudio.play()
  boogie.style.display = "none"
  weWill.style.display = "none"
  despacito.style.display = "none"
  billiejean.style.display = "none"
  quebello.style.display = "none"
  songMenu.style.display = "none"
  containerPadre.style.display = "flex"
})

despacito.addEventListener("click", function(){
  despacitoAudio.play()
  boogie.style.display = "none"
  weWill.style.display = "none"
  despacito.style.display = "none"
  billiejean.style.display = "none"
  quebello.style.display = "none"
  songMenu.style.display = "none"
  containerPadre.style.display = "flex"
})

billiejean.addEventListener("click", function(){
  billiejeanAudio.play()
  boogie.style.display = "none"
  weWill.style.display = "none"
  despacito.style.display = "none"
  billiejean.style.display = "none"
  quebello.style.display = "none"
  songMenu.style.display = "none"
  containerPadre.style.display = "flex"
})

quebello.addEventListener("click", function(){
  quebelloAudio.play()
  boogie.style.display = "none"
  weWill.style.display = "none"
  despacito.style.display = "none"
  billiejean.style.display = "none"
  quebello.style.display = "none"
  songMenu.style.display = "none"
  containerPadre.style.display = "flex"
})



weWillAudio.onended = function() {
  clearInterval(interval)
  if(score > score2){
    ctx.drawImage(youRockLogon, 120, 60, 380, 380);
  }else{
    ctx2.drawImage(youRockLogon, 120, 60, 380, 380);
  }
  interval = null
  winnerAudio.play()
};

boogieAudio.onended = function() {
  clearInterval(interval)
  if(score > score2){
    ctx.drawImage(youRockLogon, 120, 60, 380, 380);
  }else{
    ctx2.drawImage(youRockLogon, 120, 60, 380, 380);
  }
  interval = null
  winnerAudio.play();
};

despacitoAudio.onended = function() {
  clearInterval(interval)
  if(score > score2){
    ctx.drawImage(youRockLogon, 120, 60, 380, 380);
  }else{
    ctx2.drawImage(youRockLogon, 120, 60, 380, 380);
  }
  interval = null
  winnerAudio.play();
};

billiejeanAudio.onended = function() {
  clearInterval(interval)
  if(score > score2){
    ctx.drawImage(youRockLogon, 120, 60, 380, 380);
  }else{
    ctx2.drawImage(youRockLogon, 120, 60, 380, 380);
  }
  interval = null
  winnerAudio.play();
};

quebelloAudio.onended = function() {
  clearInterval(interval)
  if(score > score2){
    ctx.drawImage(youRockLogon, 120, 60, 380, 380);
  }else{
    ctx2.drawImage(youRockLogon, 120, 60, 380, 380);
  }
  interval = null
  winnerAudio.play();
};

/////-°°°°----------------------C L A S S E S -----------------------------------°°°°-/////

  //# DANCE FLOOR CLASS
function DanceFloor(){
  this.x = 0
  this.y = 0
  this.width = canvas.width
  this.height = canvas.height
  this.image = new Image()
  this.image.src = images.bg

        //Draw function: changes the image possition (makes it infinite)
  this.draw = function(){
    this.y++
    if(this.y > this.height) this.y = 0
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    ctx.drawImage(this.image,this.x,this.y - this.height,this.width,this.height)

    ctx2.drawImage(this.image,this.x,this.y,this.width,this.height)
    ctx2.drawImage(this.image,this.x,this.y - this.height,this.width,this.height)
  }
}

  //# DANCER CLASS
function Dancer(){
  DanceFloor.call(this)
  this.x = 275
  this.y = 470
  this.width = 80
  this.height = 80
  this.image.src = images.dancer
        //Draw function: prints the Dancer
  this.draw = function(){
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    ctx2.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}

  //# LETTERS CLASS
  function Letter(index){
    DanceFloor.call(this)
    this.x = xCoord[index]
    this.y = -100
    this.width = 60
    this.height = 60
    this.image.src = lettersSrc[index]
    this.keyCode = lettersKeyCode[index]

      //Draw function: prints moving letters
    this.draw = function(){
      this.y+=5
      ctx.drawImage(this.image,this.x,this.y,this.width,this.height) 
    }

    //Is Function: returns True if image is touching another item
    this.isTouching = function(item){
      return (this.x < item.x + item.width) &&
      (this.x + this.width > item.x) &&
      (this.y < item.y + item.height) &&
      (this.y + this.height > item.y);
    }
  }

  //# LETTERS 2 CLASS
  function Letter2(index){
    DanceFloor.call(this)
    this.x = xCoord[index]
    this.y = -100
    this.width = 60
    this.height = 60
    this.image.src = letters2Src[index]
    this.keyCode = letters2KeyCode[index]

      //Draw function: prints moving letters
    this.draw = function(){
      this.y+=5
      ctx2.drawImage(this.image,this.x,this.y,this.width,this.height)
      } 

    //Is Function: returns True if image is touching another item
    this.isTouching = function(item){
      return (this.x < item.x + item.width) &&
      (this.x + this.width > item.x) &&
      (this.y < item.y + item.height) &&
      (this.y + this.height > item.y);
    }
  }

  //# ARROWS CLASS
  function ArrowImage(coord, index){
    DanceFloor.call(this)
    this.x = coord
    this.y = 400
    this.width = 70
    this.height = 70
    this.image.src = arrowsSrc[index]
      
     //Draw function: prints arrows
    this.draw = function(){
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    //Is Function: returns True if arrow image is touching another item
    this.isTouching = function(item){
      return (this.x < item.x + item.width) &&
      (this.x + this.width > item.x) &&
      (this.y < item.y + item.height) &&
      (this.y + this.height > item.y);
    }
  }


   //# ARROWS CLASS 2
   function ArrowImage2(coord, index){
    DanceFloor.call(this)
    this.x = coord
    this.y = 400
    this.width = 70
    this.height = 70
    this.image.src = arrowsSrc[index]
      
     //Draw function: prints arrows
    this.draw = function(){
      ctx2.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    //Is Function: returns True if arrow image is touching another item
    this.isTouching = function(item){
      return (this.x < item.x + item.width) &&
      (this.x + this.width > item.x) &&
      (this.y < item.y + item.height) &&
      (this.y + this.height > item.y);
    }
  }



/*

  //# DANSOMETER CLASS
  function Dansometer(){
    DanceFloor.call(this)
    this.x =10
    this.y =320
    this.width=250
    this.height = 200
    this.image.src = images.dansometerM
    //Draw function: prints dansometer
    //this.draw = function(){
    //  ctx2.drawImage(this.image, this.x, this.y, this.width, this.height)
   // }
  }
  */




/////-°°°°----------------------I N S T A N C I A S -------------------------------°°°°-/////
var bg = new DanceFloor()
var dancer = new Dancer()
//var speakerScore = new SpeakerScore()
//var dansometer = new Dansometer()
var letterA = new Letter()
var arrow1 = new ArrowImage(50, 0)
arrows.push(arrow1)
var arrow2 = new ArrowImage(170, 1)
arrows.push(arrow2)
var arrow3 = new ArrowImage(300, 2)
arrows.push(arrow3)
var arrow4 = new ArrowImage(420, 3)
arrows.push(arrow4)
var arrow5 = new ArrowImage(540, 4)
arrows.push(arrow5)

var arrow6 = new ArrowImage2(50, 0)
arrows2.push(arrow6)
var arrow7 = new ArrowImage2(170, 1)
arrows2.push(arrow7)
var arrow8 = new ArrowImage2(300, 2)
arrows2.push(arrow8)
var arrow9 = new ArrowImage2(420, 3)
arrows2.push(arrow9)
var arrow10 = new ArrowImage2(540, 4)
arrows2.push(arrow10)


/////-°°°°----------------------M A I N   F U N C T I O N S ---------------------°°°°-/////
  
  //# Start Game: sets an interval
function start(){
  frames = 0
  if(!interval) interval = setInterval(update,1000/60)
}

  //# Update: draws elements on canvas and calls main funcitons
function update(){
  frames ++
  ctx.clearRect(0,0,canvas.width, canvas.height)
  bg.draw()
  dancer.draw()
  drawLetters()
  drawLetters2()
  arrow1.draw() 
  arrow2.draw()
  arrow3.draw()
  arrow4.draw()
  arrow5.draw()
  arrow6.draw() 
  arrow7.draw()
  arrow8.draw()
  arrow9.draw()
  arrow10.draw()
  //speakerScore.draw()
  //dansometer.draw()
  deleteOldLetter()
  deleteOldLetter2()
  drawScore()
  //chandeDansometer()
}

  //# Game Over: clears interval and prints score on screen
function gameOver1(){
    clearInterval(interval)
    ctx.drawImage(gameOverLogo, 90, 60, 500, 450)
    ctx2.drawImage(youRockLogon, 120, 60, 380, 380);

    interval = null
    weWillAudio.pause()
    boogieAudio.pause()
    despacitoAudio.pause()
    billiejeanAudio.pause()
    quebelloAudio.pause()
    gameOvAudio.play()

}

function gameOver2(){
  clearInterval(interval)
  ctx2.drawImage(gameOverLogo, 90, 60, 500, 450)
  ctx.drawImage(youRockLogon, 120, 60, 380, 380);

  interval = null
  weWillAudio.pause()
  boogieAudio.pause()
  gameOvAudio.play()

}

  //# Widow on Load
window.onload = function(){
  start()
}

/////-°°°°----------------------A U X   F U N C T I O N S -----------------------°°°°-/////

  //# Generates Letters
  function generateLetters(){
    if(frames%30===0) {
        var index = lettersIndex[Math.floor(Math.random()*lettersIndex.length)]
        letters.push(new Letter(index))
    }
  }

  //#Generate Letters 2
  function generateLetters2(){
    if(frames%30===0) {
       var index = letters2Index[Math.floor(Math.random()*letters2Index.length)]
       letters2.push(new Letter2(index))
   }
  }
  
    //# Draw Letters
  function drawLetters(){
    generateLetters()
    letters.forEach(function(letter){
        letter.draw()
    })
  }


    //#Draw Letters 2
    function drawLetters2(){
      generateLetters2()
      letters2.forEach(function(letter){
        letter.draw()
      })
    }

    //# Delete Old Letter (deletes first element of letters once it passes a certain y coordenate)
  function deleteOldLetter(){
    if(letters[0].y > 410){
      letters.shift()
     
    }
  }

    //# Delete Old Letter 2
    function deleteOldLetter2(){
    if(letters2[0].y > 410){
      letters2.shift()
       
    }
  }
    
    //# Check Letter Collition
  function checkLetterCol(code){
    var currentLetter = letters[0]
    console.log("llamada")
    switch(code){
      case 65:
      if(currentLetter.isTouching(arrow1)){
        score+= 2
        arrow1.image.src="arrow1On.png"
      } else{
        score-= 3
        if(score < 0){
          gameOver1()
        }
      }
      return 
      case 83:
      if(currentLetter.isTouching(arrow2)){
        score+=2
        arrow2.image.src = "arrow2On.png"
      } else{
        score-= 3
        if(score < 0){
          gameOver1()
        }
      }
      return 
      case 68:
      if(currentLetter.isTouching(arrow3)){
        score+=2
        arrow3.image.src = "arrow3On.png"
      }else{
        score-= 3
        if(score < 0){
          gameOver1()
        }
      }
      return 
      case 70:
      if(currentLetter.isTouching(arrow4)){
        score+= 2
        arrow4.image.src = "arrow4On.png"
      }else{
        score-= 3
        if(score < 0){
          gameOver1()
        }
      }
      return  
      case 71:
      if(currentLetter.isTouching(arrow5)){
        score+= 2
        arrow5.image.src = "arrow5On.png"
      }else{
        score-= 3
        if(score < 0){
          gameOver1()
        }
      }
      return 
    }
  }


   //# Check Letter Collition2
  function checkLetterCol2(code){
    var currentLetter = letters2[0]
    console.log("llamada")
    switch(code){
      case 72:
      if(currentLetter.isTouching(arrow6)){
        score2+= 2
        arrow6.image.src="arrow1On.png"
      } else{
        score2-= 3
        if(score2 < 0){
          gameOver2()
        }
      }
      return 
      case 74:
      if(currentLetter.isTouching(arrow7)){
        score2+=2
        arrow7.image.src = "arrow2On.png"
      } else{
        score2-= 3
        if(score2 < 0){
          gameOver2()
        }
      }
      return 
      case 75:
      if(currentLetter.isTouching(arrow8)){
        score2+=2
        arrow8.image.src = "arrow3On.png"
      }else{
        score2-= 3
        if(score2 < 0){
          gameOver2()
        }
      }
      return 
      case 76:
      if(currentLetter.isTouching(arrow9)){
        score2+= 2
        arrow9.image.src = "arrow4On.png"
      }else{
        score2-= 3
        if(score2 < 0){
          gameOver2()
        }
      }
      return  
      case 192:
      if(currentLetter.isTouching(arrow10)){
        score2+= 2
        arrow10.image.src = "arrow5On.png"
      }else{
        score2-= 3
        if(score2 < 0){
          gameOver2()
        }
      }
      return 
    }
  }


    //# Draw Score
  
    function drawScore(){
    ctx2.fillStyle = "white"
    ctx2.strokeStyle = 'black'
    ctx2.font = "bold 45px Arial"
    ctx2.fillText("Score: " + score2, 20, 40)
    ctx2.strokeText('Score: ' + score2, 20, 40)

    ctx.fillStyle = "white"
    ctx.strokeStyle = 'black'
    ctx.font = "bold 45px Arial"
    ctx.fillText("Score: " + score, 20, 40)
    ctx.strokeText('Score: ' + score, 20, 40)
  }

  /*
    //# Change Dansometer
    function chandeDansometer(){
      if(score > 120){
        dansometer.image.src = "dansometerH.png"
      }else if(score > 60 && score < 121){
        dansometer.image.src = "dansometerM.png"
      }else{
        dansometer.image.src = "dansometerL.png"
      }

    }
  */
    


/////-°°°°----------------------L I S T E N E R S -------------------------------°°°°-/////

addEventListener('keydown',function(e){
  checkLetterCol(e.keyCode)
  return 
})

addEventListener("keydown",function(e){
  checkLetterCol2(e.keyCode)
  return
})

  // # Para "prender" las flechas cuando sus teclas son presionadas
addEventListener('keypress', function(e){
  switch (e.key) {
    case 'a':
    setTimeout(() => {
      arrow1.image.src = "arrow1.png"
    }, 150)
      arrow1.image.src = "arrow1On.png"      
    
    return
    
    case "s":
    setTimeout(() => {
      arrow2.image.src = "arrow2.png"
    }, 150)
      arrow2.image.src = "arrow2On.png"      
   return
    
    case "d":
  setTimeout(() => {
    arrow3.image.src = "arrow3.png"
  }, 150)
    arrow3.image.src = "arrow3On.png"
  return
    
    case "f":
    setTimeout(() => {
      arrow4.image.src = "arrow4.png"
    }, 150)
      arrow4.image.src = "arrow4On.png"
  return
    case "g":
    setTimeout(() => {
      arrow5.image.src = "arrow5.png"
    }, 150)
      arrow5.image.src = "arrow5On.png"
  return      


}})


addEventListener('keypress', function(e){
  switch (e.key) {
    case 'h':
    setTimeout(() => {
      arrow6.image.src = "arrow1.png"
    }, 150)
      arrow6.image.src = "arrow1On.png"      
    
    return
    
    case "j":
    setTimeout(() => {
      arrow7.image.src = "arrow2.png"
    }, 150)
      arrow7.image.src = "arrow2On.png"      
   return
    
    case "k":
  setTimeout(() => {
    arrow8.image.src = "arrow3.png"
  }, 150)
    arrow8.image.src = "arrow3On.png"
  return
    
    case "l":
    setTimeout(() => {
      arrow9.image.src = "arrow4.png"
    }, 150)
      arrow9.image.src = "arrow4On.png"
  return
    case "ñ":
    setTimeout(() => {
      arrow10.image.src = "arrow5.png"
    }, 150)
      arrow10.image.src = "arrow5On.png"
  return      


}})


/////-°°°°---------------------- T E S T I N G ----------------------------------°°°°-/////

