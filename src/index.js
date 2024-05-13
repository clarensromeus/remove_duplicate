const remove_duplicate_from_array  = require("./array")
const remove_duplicate_from_array_of_object = require("./array_of_objects")
const book = require("./books")

remove_duplicate_from_array([1, 2, 3, 2, 3, 4, 6, 7, 6])

// remove duplicate from an array of objects
 remove_duplicate_from_array_of_object(book.books)