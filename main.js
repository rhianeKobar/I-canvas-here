const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = '#8f76d4';

let c = canvas.getContext('2d')
let circleArray = [];
let msgs;
let firstMsg;

function Circle(x,y,radius,dx,dy){

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    
    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'red'
        c.stroke();
        c.fillStyle = 'black'
        c.fill();
        c.closePath();
        
        
    }
    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            dx = -dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            dy = -dy;
        }
        this.x += dx;
        this.y += dy;

        this.draw();
    }
    
}


function makeCircle(){
    let x = 200;
    let y = 200;
    let radius = 20;
    let dx = (Math.random() - 0.5) * 16;
    let dy = (Math.random() - 0.5) * 16;
    let myCircle = new Circle(x,y,radius,dx,dy)
    circleArray.push(myCircle)
    return circleArray    
}

    
function faceTheFacts(){
    let x = Math.floor(Math.random()*(innerWidth - 200))
    let y = Math.floor(Math.random()*(innerHeight - 200))     
    c.font = "40px Roboto";
    c.fillStyle = "white";
    firstMsg = setTimeout(()=>{
        c.fillText("It's Here!", x, y)
    },2000)
    c.fillText("It's Here!", x, y)

    console.log('i een')
}  
    
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  
  if (circleArray.length < 750) {
    makeCircle();
  }
  for (let x = 0; x < circleArray.length; x++) {
    circleArray[x].update();
  }
  c.font = "40px Roboto";
  c.fillStyle = "white";
  c.fillText("THIS IS YOUR BODY ON DRUGS!!!", innerWidth / 3, innerHeight / 2);
  msg = setInterval(faceTheFacts, 10);
  /*let x = Math.floor(Math.random()*(innerWidth - 200))
    let y = Math.floor(Math.random()*(innerHeight - 200))  
  c.fillText("It's Here!", x, y);*/

  
}

animate();

