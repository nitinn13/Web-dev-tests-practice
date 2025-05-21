const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const petals = 6; // Number of petals per flower
const colors = ['#FF5733', '#FFC300', '#DAF7A6', '#FF33FF', '#33FFDD', '#FFFF33'];

function drawFlower(x, y, radius, angleOffset) {
  ctx.save();
  ctx.translate(x, y);
  for (let i = 0; i < petals; i++) {
    const angle = (i * (Math.PI * 2)) / petals + angleOffset;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(
      radius * Math.cos(angle + 0.2),
      radius * Math.sin(angle + 0.2),
      radius * Math.cos(angle),
      radius * Math.sin(angle)
    );
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.fill();
  }
  ctx.restore();
}

let angle = 0;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const flowerCount = 20;

  for (let i = 0; i < flowerCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = 20 + Math.random() * 30;
    drawFlower(x, y, radius, angle);
  }

  angle += 0.02;
  requestAnimationFrame(animate);
}

animate();
