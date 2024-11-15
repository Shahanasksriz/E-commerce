// var promise1=new promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve="promise 1 resolved"

//     },1000)
// })


// var promise2= new promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve="promise 2 resolved"

//     },2000)
// })

// var promise3=new promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve="promise 3 resolved"

//     },3000)
// })




// var promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise 1 resolved")},10000)
// })



// var promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("promise 2 rejected")},2000)
// })


// var promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("promise 3 resolved")},11000)
// })

// Promise.any([promise1,promise2,promise3])
//        .then((data)=>{
//         console.log(data)
//        })
//        .catch((error)=>{
//         console.log(error)
//        })



    //    var promise1=new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         reject("promise 1 resolved")},10000)
    // })
    
    
    
    // var promise2=new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         reject("promise 2 rejected")},2000)
    // })
    
    
    // var promise3=new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         reject("promise 3 resolved")},11000)
    // })
    
    // Promise.race([promise1,promise2,promise3])
    //        .then((data)=>{
    //         console.log(data)
    //        })
    //        .catch((error)=>{
    //         console.log(error)
    //        })


          var promise1=new Promise((resolve,reject)=>{
           setTimeout(()=>{
               resolve("promise 1 resolved")},10000)
         })
        
        
        
        var promise2=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject("promise 2 rejected")},2000)
        })
        
        
        var promise3=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("promise 3 resolved")},11000)
        })
        
        Promise.allSettled([promise1,promise2,promise3])
               .then((data)=>{
                console.log(data)
               })
               .catch((error)=>{
                console.log(error)
               })