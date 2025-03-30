var slugify = require('slugify')

let b = slugify('some string') // some-string
console.log(b)
// if you prefer something other than '-' as separator
const a = slugify('some string', '_')  // some_string
console.log(a)