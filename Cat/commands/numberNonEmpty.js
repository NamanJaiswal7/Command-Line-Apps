let fs=require("fs");
let path=require("path");

function call(pathf){
  try{

    console.log(numberNonEmptyLine(pathf));
  }catch(err){
    console.log("file does not exist error");
  }
}


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
module.exports={
  numberNonEmpty:call
}