var num
var rev=0
var rem
function palindrom(num){

var org=num
while(num!=0)
{
    rem=num%10
    rev=rev*10+rem
    num=Math.floor(num/10)
    
}
if(org===rev)
    {
    console.log("its palindrome")
    }
else{
    console.log("not palindrome")
}
}
palindrom(123)







