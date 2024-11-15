

let arr=[1,2,3,4]
ar=arr.map(ar=>ar*2)
console.log(ar)


let num=[1,2,3,4]
 let indexnum=num.map((num,index)=>num*index)

console.log(indexnum)


//filter

const nums=[1,2,3,4,5]
const evennum=nums.filter(num=>num%2==0)
console.log(evennum)


//filtering object
 const users=[
    
    {name:"alice",age:"24"},
    {name:"anu",age:"34"},
    {name:"hamd" , age:"29"}
 ]
 const adults=users.filter(user=>user.age>=25)
 console.log(adults)




