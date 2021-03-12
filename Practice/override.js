let fs=require("fs");
let path=require("path");


function overide(pathDir1,pathDir2){

let str=fs.readFileSync(pathDir1,"utf8");
fs.writeFileSync(pathDir2,str);


}


let input=process.argv.slice(2)
let path1=input[0];
let path2=input[1];
overide(path1,path2);