// function createarray(){
//     let s=[10,12,23,45]
//     console.log("initial array:",s)
//     s.push(60,70,80,50)
//     console.log("after initializing:",s)
//     s.pop()
//     console.log("after removing:",s)
//     console.log(s[3,4])
//     console.log(s.length)

// }
// createarray()

// 




function  array(){
    let arr=[2,4,6,12,10,5,1,3,9]
    let newar=[]
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
            newar.push(arr[i])
        }
    }
    console.log("old array:",arr)
    console.log("odd array:",newar)
    newar.pop()
    console.log("delete from odd array:",newar)
}
array()