//-------------------------------Answer To Question Number 1------------------------------------//
function calculateDifference(a, b) {
    return a - b;
}

console.log(
    calculateDifference(8, 1)
);
console.log(
    calculateDifference(1, 8)
);



//-------------------------------Answer To Question Number 2------------------------------------//
function isOdd(Num) {
    return Num % 2 !== 0;
}

console.log(
    isOdd(7)
);
console.log(
    isOdd(10)
);



//-------------------------------Answer To Question Number 3------------------------------------//
function findMin(arr) {

    if(arr.length === 0) {
      return null;
    }
  
    let min = arr[0];

    for(let i=1; i<arr.length; i++) {
      if(arr[i] < min) {
        min = arr[i];
      }
    }
  
    return min;
  }
  
  const numbers1 = [29,12,5,1,34,63,0,83];
  console.log(
    findMin(numbers1)
);



//-------------------------------Answer To Question Number 4------------------------------------//
function filterEvenNumber(arr){
    return arr.filter(number => number % 2 === 0);
}
let numbers2 = [1, 2, 3, 4, 5, 6, 7];
let evenNumber = filterEvenNumber(numbers2);

console.log(evenNumber);



//-------------------------------Answer To Question Number 5------------------------------------//
function sortArrayDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

const numbers3 = [5, 1, 8, 3, 2];
const sortedNumbers = sortArrayDescending(numbers3);

console.log(sortedNumbers);      



//-------------------------------Answer To Question Number 6------------------------------------//
function lowercaseFirstLetter(str){
  if (str.length === 0){
    return str;
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(
  lowercaseFirstLetter("Hello")
);
console.log(
  lowercaseFirstLetter("WORLD")
);



//-------------------------------Answer To Question Number 7------------------------------------//
function countVowels(str){

  const vowels = "aeiouAEIOU";
  
  return str.split("").filter(char => vowels.includes(char)).length;
}

console.log(
  countVowels("MERN Batch")
);



//-------------------------------Answer To Question Number 8------------------------------------//
function findAverage(averagenumber){
  if(averagenumber.length === 0){
      return 0;
  }

  let total = averagenumber.reduce((sum, current) => sum + current, 0);
  
  return total / averagenumber.length;
}

const averagenumber = [2, 4, 6, 8, 10, 12, 14];
const average = findAverage(averagenumber);
console.log(average);
