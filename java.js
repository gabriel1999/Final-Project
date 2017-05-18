var namespace = "http://www.w3.org/2000/svg"

var button = document.getElementById("playbutton")

var obsticle1 =  makeImage("http://www.canalgif.net/Gifs-animados/Mitologia/Minotauros/Imagen-animada-Minotauro-06.gif", -70, 92, 80 , 70, 1)
var obsticle2 =  makeImage("http://www.canalgif.net/Gifs-animados/Mitologia/Minotauros/Imagen-animada-Minotauro-06.gif", -70, 92, 80 , 70, 1)
var obsticle3 =  makeImage("http://www.canalgif.net/Gifs-animados/Mitologia/Minotauros/Imagen-animada-Minotauro-06.gif", -70, 92, 80 , 70, 1)
var obsticle4 =  makeImage("http://www.canalgif.net/Gifs-animados/Mitologia/Minotauros/Imagen-animada-Minotauro-06.gif", -70, 92, 80 , 70, 1)


var gunn =  makeImage("http://vignette2.wikia.nocookie.net/callofduty/images/3/36/Tempest-Sights_BO3.png/revision/latest?cb=20151213102048", 110, 80, 220 , 190, 1)

var canvas = document.getElementById("canvasSvg")
canvas.appendChild(gunn)



var score = 0
var ob1X = 0
var ob2X = 0
var ob3X = 0
var ob4X = 0

function start(){

button.setAttribute("style", "display: none;")


  move(obsticle1,1,0)
  move(obsticle2,0.7,0)
  move(obsticle3,0.5,0)
  move(obsticle4,0.2,0)

 ob1X = getX(obsticle1)
 ob2X = getX(obsticle2)
 ob3X = getX(obsticle3)
 ob4X = getX(obsticle4)

 if(ob1X > 350){
   setX(obsticle1, -295)
   score = 0
    }
  if(ob2X > 350){
   setX(obsticle2, -310)
   score = 0
    }
  if(ob3X > 350){
   setX(obsticle3, -300)
   score = 0
    }
  if(ob4X > 350){
   setX(obsticle4, -280)
   score = 0
    }


    makeRect(35, 230, 90, 25, "#9BC1A5", 1)
    makeText(score, 95, 250, 17, "Francois One", "black", 1)
    makeText("SCORE:", 45, 250, 17, "Francois One", "black", 1)
    requestAnimationFrame(start)
}


function shoot(){
  if( ob1X > 180 && ob1X < 197){
    score = score + 1
    setX(obsticle1, -295)
  }

  if( ob2X > 180 && ob1X < 197){
    score = score + 1
    setX(obsticle2, -310)
  }

  if( ob3X > 180 && ob1X < 197){
    score = score + 1
    setX(obsticle3, -300)
  }

  if( ob3X > 180 && ob1X < 197){
    score = score + 1
    setX(obsticle4, -280)
  }
}


document.addEventListener('keydown', checkKey);

//---------KEYBOARRD ----------//
function checkKey(e) {
    e = e || window.event;

   //------------SPACE------------//
  if (e.keyCode == '32') {
   shoot()
  }}




























function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvasSvg")
  canvas.appendChild(text)
  return text
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvasSvg")
  canvas.appendChild(rect)
  return rect
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvasSvg")
  canvas.appendChild(image)
  return image
}

function getX(shape) {
  if (shape.hasAttribute("x")) {
    return parseFloat(shape.getAttribute("x"))
  } else {
    return parseFloat(shape.getAttribute("cx"))
  }
}

function getY(shape) {
  if (shape.hasAttribute("y")) {
    return parseFloat(shape.getAttribute("y"))
  } else {
    return parseFloat(shape.getAttribute("cy"))
  }
}

function setX(shape, x) {
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else {
    shape.setAttribute("cx", x)
  }
}

function setY(shape, y) {
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else {
    shape.setAttribute("cy", y)
  }
}

function move(shape, dx, dy) {
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  }
}

function reset(){
  window.location.reload();
}
