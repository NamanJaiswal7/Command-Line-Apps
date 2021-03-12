let bigLine=require("./commands/bigLineSol")
let numbering=require("./commands/numberingAll")
let nonEMptyLine=require("./commands/numberNonEmpty")
let display=require("./commands/displayAll")

let input=process.argv.slice(2);
let opt=input[0];
switch(opt){
  case "-s":
    bigLine.bigLineToSingleLine(input[1]);
    break;
    case "-n":
      numbering.numberingAll(input[1]);
    break;
    case "-b":
      nonEMptyLine.numberNonEmpty(input[1]);
    break;
    case "-nb":
      numbering.numberingAll(input[1]);
    break;
    case "-bn":
      nonEMptyLine.gtinumberNonEmpty(input[1]);
    break;
    case "-sn":
      bigLine.bigLineToSingleLine(input[1]);
      numbering.numberingAll(input[1]);
      break;
      case "-ns":
      bigLine.bigLineToSingleLine(input[1]);
      numbering.numberingAll(input[1]);
      break;
      default:
        display.dis(input);
        break;
}