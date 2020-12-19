function breakOut(array, changeValue, stopValue){
  for(let i = 0; i < array.length; i++) {
    if (array[i] === stopValue){
      break;
    }
      array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for(let i = 0; i < array.length; i++) {
    if(array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  for(let i = 0; i < array.length; i++) {
    if(findFn(array[i])) {
      return array[i];
    } else {
      return null;
    }
  }
}
findBy([1, 1, 1, 1, c, 1, 2], (n) => n === c);

findBy(["dog", "cat", "cow"], (a) => a === "mooose");
