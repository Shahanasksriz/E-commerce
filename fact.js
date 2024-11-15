var a=parseFloat(prompt("enter the number"))
 var fact=1;
 if (a<0)
 {
    document.write("-ve number have not factorial");
 }
else
{
    for (var i=1;i<=a;i++)
    {
        fact *=i;
    }
    document.write("factorial is=",fact);

}

