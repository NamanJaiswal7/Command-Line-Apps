let fs=require("fs");
let path=require("path");

function numberNonEmptyLine(pathToFile){
  let num=1;
  let newStr=""
  let str=fs.readFileSync(pathToFile,"utf8");
  let newLine=1;
  let i=0;
  
  while(i!=str.length-1){
    if(str[i]=='\r')
      {}
    else if(str[i]!="\n"&&newLine==1){
      newStr+=num+++". ";
      newLine=0;
    }else if(str[i]=="\n"){
      newLine=1;
    }
      newStr+=str[i];
      i++;
    
  }
  return newStr
}

let input=process.argv.slice(2)
let pathto=input[0];
console.log(numberNonEmptyLine(pathto))