function breakOut(array, changeValue, stopValue){
  for(let i = 0; i < array.length; i++) {
      array[i] = changeValue;
    if (array[i] === stopValue){
      break;
    }
  }
}
