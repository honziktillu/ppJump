let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ppImgL = new Image();
ppImgL.src = "./res/img/ppL.png";

let ppImgR = new Image();
ppImgR.src = "./res/img/ppR.png";

const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Update pps
  if (pps.length != 0) {
    updatePPs();
  }

};

window.onload = () => {
  // Resize listener
  window.addEventListener("resize", resize, false);
  // Spawn pps
  spawnPPs(60);

  // First frame
  window.requestAnimationFrame(loop);
};

const loop = () => {
  draw();
  window.requestAnimationFrame(loop);
};

const draw = () => {
  // Canvas reset
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // Draw pps
  drawPPs();
};

class PP {
  width = 35;
  height = 27;
  direction = 0;
  directionY = 0;
  speedX = 4;
  speedY = 5;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {
    if (this.direction == 0) {
      this.x -= this.speedX;
    } else {
      this.x += this.speedX;
    }

    if (this.x <= 0) {
      this.direction = 1;
    } else if (this.x + this.width >= canvas.width) {
      this.direction = 0;
    }

    if (this.directionY == 0) {
      this.y -= this.speedY;
    } else {
      this.y += this.speedY;
    }

    if (this.y <= canvas.height - this.height * 3) {
      this.directionY = 1;
    } else if (this.y + this.height >= canvas.height) {
      this.directionY = 0;
    }

    if (this.direction == 0) {
      ctx.drawImage(ppImgL, this.x, this.y, this.width, this.height);
    } else {
      ctx.drawImage(ppImgR, this.x, this.y, this.width, this.height);
    }

  }
}

let pps = [];

const spawnPPs = (numberOfPPs) => {
  let i = 0;
  for (i; i < numberOfPPs; i++) {
    pps.push(new PP(randomBetween(0, canvas.width - 35), canvas.height - 27 - randomBetween(0, 80)));
  }
}

const updatePPs = () => {
  let i = 0;
  for (i; i < pps.length; i++) {
    pps[i].y = window.innerHeight - pps[i].height;
  }
}

const drawPPs = () => {
  pps.forEach((pp) => {
    pp.update();
  });
}





let x = '0';
let y = 0;
let z = '0';

if (x == y) {
  console.log('x == y');
}

if (y == z) {
  console.log('y == z');
}

if (x === z) {
  console.log('x === z');
}