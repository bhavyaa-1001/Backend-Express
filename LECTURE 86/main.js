// const { createServer } = require('node:http');
// const fs = require('node:fs');

// import http from "http"
//  import { a,b,c,d} from "./mymodule.js"
//  console.log(a,b,c,d) // 1 2 3 4

//  import hi from "./mymodule.js"
//  console.log(hi) // 5

const a = require("./mymodule2.js")
console.log(a) // { a: 1, b: 4 }