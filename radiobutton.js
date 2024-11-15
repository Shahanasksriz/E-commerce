
function selectgender()
{
    var a=document.getElementsByName('gender')
    for (var i=0;i<a.length;i++)
    {
        if(a[i].checked)
        {
            console.log(a[i].value)
            return
            
        }
    }   

    console.log("no radio button selected")


}