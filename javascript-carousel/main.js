const $img = document.getElementsByClassName('img');
const $dot = document.getElementsByClassName('dot');

/* const imgViewID = */setInterval(function ($img) {
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
  imgSwap($img, $dot, currentImg);
}, 3000, $img, $dot);

// Function declarations below

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
