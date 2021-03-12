let fs=require("fs");
let path=require("path");

function convert(pathToFile){
  let str=fs.readFileSync(pathToFile,"utf8");
  // if(str.match(/[\n]{2,}/gm)) console.log("Yes");
  str=str.replace(/(\r\n|\n|\r){2,}/gm,'\n');
  return str;
}


let input=process.argv.slice(2);
let pathdir=input[0];
console.log(convert(pathdir));