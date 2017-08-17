var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array[], el){

}

function destructivelyAddElementToBeginningOfArray(array[], el){
  array[].unshift(el);
}

function addElementToEndOfArray(array[], el){

}

function destructivelyAddElementToEndOfArray(array, el){
  array.push(el);
  return array[];
}

function accessElementInArray(array[], index){

}

function removeElementFromBeginningOfArray(array){
  var arraySliced = array.slice(1);
  return arraySliced;
}

function destructivelyRemoveElementFromEndOfArray(array;){
    array.pop();
    return array;

}

function removeElementFromEndOfArray(array){
  array.slice(0, array.length-1);
  return array;
}
destructivelyAddElementToEndOfArray(chocolateBars, "reeses");
