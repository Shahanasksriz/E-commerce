function listchange()
{
var a=document.getElementsByTagName("li")

for(var i=0;i<a.length;i++)
{
    a[i].innerHTML="changed"

}
}