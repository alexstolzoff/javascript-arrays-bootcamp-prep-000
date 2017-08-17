var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, el){
    // const array = array[];
    // var str = el;
    const newArray = [el, ...array];
    return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, el){
  array.unshift(el);
  return array;
}

function addElementToEndOfArray(array, el){

    const newArray = [...array, el];
    return newArray;
}

function destructivelyAddElementToEndOfArray(array, el){
  array.push(el);
  return array;
}

function accessElementInArray(array, index){
    return array[index];
}

function removeElementFromBeginningOfArray(array){
  var arraySliced = array.slice(1);
  return arraySliced;
}

function destructivelyRemoveElementFromEndOfArray(array){
    array.pop();
    return array;

}
//
function removeElementFromEndOfArray(array){

  array.slice(-3);
  return array;
}
destructivelyAddElementToEndOfArray(chocolateBars, "reeses");

addElementToBeginningOfArray(chocolateBars,"reeses");
destructivelyAddElementToBeginningOfArray(chocolateBars,"reeses");
destructivelyAddElementToEndOfArray(chocolateBars,"reeses");
accessElementInArray(chocolateBars,"1");
removeElementFromBeginningOfArray(chocolateBars);
destructivelyRemoveElementFromEndOfArray(chocolateBars);
removeElementFromEndOfArray(chocolateBars);
