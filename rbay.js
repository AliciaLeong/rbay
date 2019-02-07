const test = ['hi', 'how are you?'];

function rbay(list) {
  return _.map(list, function (element) { return `${element}... right back at you!`; });
}

console.log(rbay(test));
