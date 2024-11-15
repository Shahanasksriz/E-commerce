var a=[1,-67,78,4,56,-34]
var b=a.filter(function(num){
    return num<0
})
console.log("filter -ve numbrs",b)

var a=[1,-67,78,4,56,-34]
var b=a.filter(num=>{
    return num<0
})
console.log("filter -ve numbrs",b)


//reduce with moduludsof 2

var c=[2,3,4,5]
var d=c.reduce((acc,num) => {
    if(num%2==0){
        return acc.even.push(num)
    }
    else
    {
        return acc.odd.push(num)
    }
    return acc
},{even:[],odd:[]})
console.log("reduce moduluds 2",d)