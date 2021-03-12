let fs=require("fs");
let path=require("path");


function convertToSave(pathToFile1,pathToFile2){
  let str=fs.readFileSync(pathToFile1,"utf8");
  // if(str.match(/[\n]{2,}/gm)) console.log("Yes");
  str=str.replace(/(\r\n|\n|\r){2,}/gm,'\n');
  fs.writeFileSync(pathToFile2,str);
}


let input=process.argv.slice(2);
let path1=input[0];
let path2=input[1];

convertToSave(path1,path2);