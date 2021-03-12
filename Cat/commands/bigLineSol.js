let fs=require("fs");
let path=require("path");


function call(path){
  try{
  console.log(convert(path));
  }catch(err){
    console.log("file does not exist error");
  }
}

function convert(pathToFile){
  let str=fs.readFileSync(pathToFile,"utf8");
  // if(str.match(/[\n]{2,}/gm)) console.log("Yes");
  str=str.replace(/(\r\n|\n|\r){2,}/gm,'\n');
  return str;
}
module.exports={
  bigLineToSingleLine:call
}