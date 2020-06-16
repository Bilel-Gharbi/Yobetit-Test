const fruits = ["cherry", "lemon", "apple", "banana"];

const generator = () => {
  let arr = [];
  for (let i = 0; i < 7; i++) {
    let rand = Math.floor(Math.random() * fruits.length);
    arr.push(fruits[rand]);
  }
  return arr;
};

const generateSlotMachine = () => {
  let obj = {};
  for (let i = 1; i <= 3; i++) {
    let arr = generator();
    obj["reel" + i] = arr;
  }

  return obj;
};

const calcGainPerRow = (arr) => {
  let obj = {};
  let gain = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  const { banana, lemon, cherry, apple } = obj;
  switch (banana) {
    case 3:
      gain += 15;
    case 2:
      gain += 5;
    default:
      gain;
  }
  switch (cherry) {
    case 3:
      gain += 50;
    case 2:
      gain += 40;
    default:
      gain;
  }
  switch (apple) {
    case 3:
      gain += 20;
    case 2:
      gain += 10;
    default:
      gain;
  }
  switch (lemon) {
    case 3:
      gain += 3;

    default:
      gain;
  }

  return gain;
};

module.exports = {
  generateSlotMachine,
  calcGainPerRow,
};
