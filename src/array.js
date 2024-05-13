/* Array in javascript is a data structure that's used to store a collection of values,
   is being indexed by numbers and can store only primitive data types and objects
*/

const  remove_duplicate_from_array = (data)=> {
  // here is the given array on which all calculated operations are done
// First way of removing duplicate elements from an array using Set method
const Firstway = [...new Set(data)]
console.log("first way of removing duplication from an array ", Firstway)

// second way of removing duplicate elements from an array Using filter with indexOf
const secondway = data.filter((value, index, arr) => arr.indexOf(value) === index)
console.log("second way fo removing duplication from an array ", secondway)

// third way of removing duplicate elements from an array using reduce method
const thirdway = data.reduce((acc, currentValue) => {
  if(!acc.includes(currentValue)) acc.push(currentValue)
  return acc;
}, [])
console.log("third way of removing duplication from an array ", thirdway)

// fourth way of removing duplicate elements from an array using foreach method
// inialize an empty array that will later contain non-duplicate values
const fourth_way = []
const fouthway = data.forEach((value) => {
   if(fourth_way.indexOf(value) == -1) {
      fourth_way.push(value)
   }
})
console.log("fourth way of removing duplicate elements from array ", fourth_way)
}


module.exports = remove_duplicate_from_array
