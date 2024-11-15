var pr1=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("promise 1 resolved")},2000)
})
pr1
    .then((data)=>{
    console.log(data)
    return "hii"

})
.then((data)=>{
    console.log(data)
    return"hellooo"
})
.then((d)=>{
    console.log(d)
})
.catch((error)=>{
    console.log(data)
})