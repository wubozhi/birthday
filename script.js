const cells = document.querySelectorAll('.cell');
const drawButton = document.getElementById('draw-button');

let currentIndex = 0;
let interval;
let attempts = 0;
const maxAttempts = 3;

const prizes = [
  'LV白棋盘包包一个',
  '蒂芙尼项链一条',
  '阿玛尼手表一条',
  '香奈儿香水一瓶',
  'YSL口红一支',
  '海鲜自助餐一顿',
  '小辣鱼若干包',
  'RMB520元'
];

let min = 0;
let max = 7;
let randomInt1 = Math.floor(Math.random() * (max - min + 1)) + min;
let randomInt2 = Math.floor(Math.random() * (max - min + 1)) + min;
let prizeOrder = [randomInt1, randomInt2, 1]; 
prizeOrder.sort(() => Math.random() - 0.5);

function highlightCell(index) {
  cells.forEach((cell, i) => {
    cell.classList.toggle('highlight', i === index);
  });
}

function startLottery() {
  if (attempts >= maxAttempts) {
    alert('抽奖机会用完了哦，明年再来好吗？亲爱的');
    return;
  }

  attempts++;
  let speed = 100;
  let rounds = 0;
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % cells.length;
    highlightCell(currentIndex);

    if (rounds >= 3 && speed >= 500) {
      currentIndex = prizeOrder[attempts];
      highlightCell(currentIndex);
      clearInterval(interval);
      const prize = cells[currentIndex].getAttribute('data-prize');
      setTimeout(() => {
        alert(`恭喜你! 亲爱的，你抽中了：\n ${prize}`);
      }, 200);
      return;
    }

    if (currentIndex === 0) rounds++;
    speed += 10;
  }, speed);
}

drawButton.addEventListener('click', startLottery);
