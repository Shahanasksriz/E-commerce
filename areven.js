// num=[2,3,8,1,4,9]
// for(i=0;i<=num.length;i++)
// {
//     if(num[i]%2==0)
//     {
//         console.log(num[i])
//     }
    
// }


//odd numbers to initialize to new array
let newar=[]
let arr=[2,5,7,9,1,4,6,8]
for(var i=0;i<arr.length;i++)
{
    if(arr[i]%2!==0)
    {
    newar.push(arr[i])
    }

}
console.log("old array:",arr)
console.log("new odd array:",newar)