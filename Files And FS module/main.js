const fs = require("fs")
console.log(fs) // { [Function: Object] }

console.log("starting")
// fs.writeFileSync("hello.txt", "hello world")
fs.writeFile("hi.txt","hi",()=>{
    console.log("file written")
    fs.readFile("hi.txt",(err,data)=>{
        console.log(err,data.toString())
    })
})
    fs.appendFile("hi2.txt","bhavya",(e,d)=>{
        console.log(d)
    })
console.log("ending")