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


fucntion findFn() {
const c = Math.floor(Math.random() * 100);
for (let i = 0; i < array.length; i++){
  if(array[i] === c);
  return array[i];
}
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
