let fs=require("fs");
let path=require("path");


function display(pathFile){
  try{
 let displayCon= fs.readFileSync(pathFile,"utf8");
 return displayCon;
  }catch(err){
    return "file does not exist error";
  }
 
}
let input=process.argv.slice(2);
let pathToPass=input[0];
display(pathToPass);
