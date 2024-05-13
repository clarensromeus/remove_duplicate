

const remove_duplicate_from_array_of_object = (books) => {

// first way of remove duplications from an array of objects
    let unique = books.filter((v, i, a) => a.findIndex(t => (t.name === v.name)) === i)
    console.log("first way of removing duplicate from an array of objects",unique)

// second way of removing duplicate elements from an array of objects
  const fourth_way = books.reduce((acc, current) => {
    const x = acc.find(item => item.title === current.title);
    if(!x) return acc.concat([current])
    return acc
}, []);
  console.log("fourth way of removing duplicate elements from array of objects",fourth_way)

  // third way of removing duplicate elements from an array of objects
  let fifth_way = books.filter((item, index, array) => Array.from(new Set(array.map(i => i.name))).includes(item.name, index))
  console.log("fith way of removing duplicate elements from an array of objects ", fifth_way)

}

module.exports = remove_duplicate_from_array_of_object
