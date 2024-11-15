// function circle(r)
// {
//   a=3.14*r*r  
// return a

// }
// circle(2)
// console.log("area of circle:",a)

//arrow function

// var area=(radius)=>{
//     var result=3.14*radius*radius
//     return result
// }
// console.log(area(5))


//arrow fun another
// var area=radius=>{
//     var result=3.14*radius*radius
//     return result
// }
// console.log(area(5))

//another way arrow func if  only one statement is there used
// var area=radius=>3.14*radius*radius
// console.log(area(5))




//araea of rectangle

function rectangle(length,width)
{
     b=length*width
    return b
}
rectangle(3,4)
console.log("area of rectangle",b)

//arrow fun

 var rect=(length,width)=>length*width
 console.log("area of rectangle",rect(3,5))



 function odeve( num)
 { 
    if(num%2==0)
    {
        return ("even")
    }
    else{
        return("odd")
    }

 }
 
//  console.log(odeve(4))

  var odeve=(num)=>
    {
    if(num%2==0)
    {
        return "even"
    }
    else
    {
        return "odd"
    }
  }
  console.log(odeve(7))