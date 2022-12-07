var canvas = document.querySelector("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext("2d");
var gui = new dat.GUI()

const num = {
  number:50
}

gui.add(num,'number',1,100);

var x = [canvas.width / 6];
var y = [canvas.height / 2];
var r = [];
var fny = [];



var del = 0;
function animate(){
  requestAnimationFrame(animate)
  c.clearRect(0,0,canvas.width,canvas.height);

  var i = 0;
  for(i=0; i<=num.number; i++){

    let n = ( i + 1) ;
    r[i] = 80 * (4 / (n * Math.PI));
    c.beginPath();
    c.arc(x[i],y[i], r[i], 0, 2 * Math.PI);
    c.strokeStyle = 'red'
    c.stroke();
    c.beginPath()
    c.arc(x[i], y[i], 2, 0, 2 * Math.PI);
    c.fill();
    c.beginPath();
    c.moveTo(x[i],y[i]);
    
    x[i+1] = x[i] + r[i] * Math.cos(del* n * (Math.PI / 180));
    y[i+1] = y[i] + r[i] * Math.sin(del* n *(Math.PI / 180));

    c.lineTo(x[i+1],y[i+1]);
    c.stroke();
  }

  fny.unshift(y[i]);
  for (let j = fny.length; j > 0; j--) {

    c.beginPath();
    c.lineTo(x[0] + 600+j,fny[j-1]);
    c.lineTo(x[0]+ 600+j, fny[j]);
    c.stroke();
  }
  
  c.lineTo( x[i] ,y[i]);
  c.stroke();

  if(del >= 360){
    del = 0;
  }
  del += 1;

}
animate()