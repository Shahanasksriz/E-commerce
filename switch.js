// var a="c"
// switch(a){
//     case "a":
//     console.log("apple");
//     break;
//     case "b":
//     console.log("bat");
//     break;
//     case "c":
//     console.log("cat");
//     break;
//     default:
//         console.log("invalid");
//         break;

// }
var a=parseFloat(prompt("enter fist number"));
var b=parseFloat(prompt("enter secnd number"));
var c=prompt("enter operator");
switch(c){
    case "+":
        document.write(a+b);
        break;
    case "-":
        document.write(a+b);
        break;
    case "*":
        document.write(a*b);
        break;
    default:
        document.write("invalid");
        break;

}