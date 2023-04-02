const $img = document.getElementsByClassName('img');
const $dot = document.getElementsByClassName('dot');
const $forwardArrow = document.querySelector('.forward');
const $backArrow = document.querySelector('.back');
const $progressDot = document.querySelector('.progress-dot');

let imgViewID = setInterval(imgIntervalCallback, 3000);

// Event listeners below:
$forwardArrow.addEventListener('click', function (e) {
  clearInterval(imgViewID);
  const currentImg = advanceImg();
  imgSwap($img, $dot, currentImg);
  imgViewID = setInterval(imgIntervalCallback, 3000);
});

$backArrow.addEventListener('click', function (e) {
  clearInterval(imgViewID);
  let currentImg;
  for (let i = 0; i < $img.length; i++) {
    if ($img[i].getAttribute('class') === 'img') {
      if (i === 0) {
        currentImg = $img[$img.length - 1].getAttribute('data-img');
      } else {
        currentImg = $img[i - 1].getAttribute('data-img');
      }
    }
  }
  imgSwap($img, $dot, currentImg);
  imgViewID = setInterval(imgIntervalCallback, 3000);
});

$progressDot.addEventListener('click', function (e) {
  if (e.target && e.target.nodeName === 'I') {
    if (e.target.getAttribute('class') === 'fa-regular fa-circle dot') {
      clearInterval(imgViewID);
      const currentImg = e.target.getAttribute('data-img');
      imgSwap($img, $dot, currentImg);
      imgViewID = setInterval(imgIntervalCallback, 3000);
    }
  }
});

// Function declarations below
function imgIntervalCallback() {
  const currentImg = advanceImg();
  imgSwap($img, $dot, currentImg);
}

function imgSwap($img, $dot, currentImg) {
  for (let i = 0; i < $img.length; i++) {
    if ($img[i].getAttribute('data-img') === currentImg) {
      $img[i].className = 'img';
      $dot[i].className = 'fa-solid fa-circle dot';
    } else {
      $img[i].className = 'img hidden';
      $dot[i].className = 'fa-regular fa-circle dot';
    }
  }
}

function advanceImg() {
  let currentImg;
  for (let i = 0; i < $img.length; i++) {
    if ($img[i].getAttribute('class') === 'img') {
      if (i === $img.length - 1) {
        currentImg = $img[0].getAttribute('data-img');
      } else {
        currentImg = $img[i + 1].getAttribute('data-img');
      }
    }
  }
  return currentImg;
}
