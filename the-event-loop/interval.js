let num = 3;

const intervalID = setInterval(() => {
  if (num !== 0) {
    console.log(num);
    num--;
  } else {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}, 1000);
