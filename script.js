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
  'RMB520元',
  '男朋友香吻一个'
];

function highlightCell(index) {
  cells.forEach((cell, i) => {
    cell.classList.toggle('highlight', i === index);
  });
}

function startLottery() {
  if (attempts >= maxAttempts) {
    alert('已用完三次抽奖机会！');
    return;
  }

  attempts++;
  let speed = 100;
  let rounds = 0;
  interval = setInterval(() => {
    highlightCell(currentIndex);
    currentIndex = (currentIndex + 1) % cells.length;

    if (rounds >= 3 && speed >= 500) {
      clearInterval(interval);
      const prize = cells[currentIndex].getAttribute('data-prize');
      setTimeout(() => {
        alert(`恭喜你获得：${prize}`);
      }, 200);
      return;
    }

    if (currentIndex === 0) rounds++;
    speed += 10;
  }, speed);
}

drawButton.addEventListener('click', startLottery);
