//   var a=document.getElementById("s1")
//  a.innerHTML="how are u shahanas"
//  a.style.color="red"
//  document.write(a)
//  var b=document.getElementById("s2")
//  b.innerHTML="hii riz!!!"
//  b.style.fontSize="90px"
//  document.write(b)

// 

// 

// var a=document.querySelectorAll(".h1")
// a[0].innerHTML="hii"
// a[1].style.color="red"
// var b=document.querySelector("#sd")
// b.innerHTML="piou"
// var c=document.querySelectorAll("#sd")
// c[0].style.color="blue"

// 
// var a=document.createElement("img")
// function c()
// {
//     a.src="bulbof.jpeg"
//     document.body.appendChild(a)

// }
// function r(){
//     a.remove()
// }

// 

// var arr=[3,4,5,6]
// var ar=[]
// for(var i=0;i<arr.length;i++)
// {
//     ar[i]=arr[i]*2

// }
// console.log(ar)



var arr=[3,4,5,6]
var ar=arr.map(function(num)
{
return num*2
}
)
console.log("mappdouble",ar)

var arr=[4,5,2]
var ar=arr.map(num=>num*2)
console.log("arowmap:",ar)


var ar1=[2,3,4,5]
var ar2=ar1.map(num=>num%3)
console.log("modulus of 3",ar1)



var a=[2,-56,78,-43,1,23]
var b=a.filter(function(num){
    return num<0
})
console.log(b)


var arr=[2,3,5,10,1,4]
var arr2=arr.reduce(function(acc,num){
    return acc+num
},0)
console.log(arr)
console.log(arr2)


var arr=[2,3,5,10,1,4]
var arr2=arr.reduce((acc,num)=>{
    return acc+num
},0)
console.log(arr)
console.log(arr2)

var c=[2,3,4,5]
var d=c.reduce(function(acc,num){
   return num%2
   return num


},0)
console.log(d)




