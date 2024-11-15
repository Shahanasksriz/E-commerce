//setTimeout 
// 1st arg enthano cheyyendathu athu function ullil koduthu aa func call cheyyuka
//2nd arg time to start

function oddeven(){
    var num=10
    if(num%2==0)
    {
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
setTimeout(oddeven,2000)


// function name(){
//      console.log("shahanas")
// }

// setTimeout(name,2000)

//another method of settimeout("direct function settimeout 1st argmnt il kodukkuka")
setTimeout(function name(){
    console.log("shahanas")
},5000)



//anonymous function
setTimeout(function (){
    console.log("shahanas")
},7000)


//convert anonymou func to arrow func
setTimeout( ()=>{
    console.log("sha")
},2000)



//ethu function ney anooii paass cheyyunathu athiney callback funcion
//ethu functionilekkanoii vera function pass cheyyanathu allel oru functioney return cheyyunathinu athu higherorder function
//in j.s functions are also called first class function or first class citizen(bcz,it we can treat function as values)
//j.s is JIT compilation anu
//j.s is single thread( at a time oru karyam cheyan pattollu)
//j.s is synchronus(line by line execution(specific order indu))
//j.s is synchronous,single threaded,scripting language.
//j.s is loosely type ,or dynamically type( var a= string  store cheyyan,number,character)
//j.s is synchronus but we can use it as assynchronus->eg,settimeout(browser api or node api not parrt of j.s)
//call back vechu assynhronus eythan pattum
//ES6-promise
