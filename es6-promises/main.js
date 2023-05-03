import takeAChance from './take-a-chance.js';

const aChance = takeAChance('Jared');

aChance
  .then((success) => console.log(success))
  .catch((error) => console.error(error.message));
