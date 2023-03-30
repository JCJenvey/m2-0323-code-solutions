function countDown() {
  const $display = document.querySelector('.countdown-display');
  const count = parseInt($display.textContent);
  if (count - 1 > 0) {
    $display.textContent = count - 1;
  } else {
    $display.textContent = '~Earth Beeeelooowww Us~';
  }
}

function stopCountDown(countDownID) {
  clearInterval(countDownID);
}

const countDownID = setInterval(countDown, 1000);
setTimeout(stopCountDown, 4000, countDownID);
