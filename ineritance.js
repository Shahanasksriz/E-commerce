class person{
    constructor(name,age)
    {
        this.n1=name
        this.n2=age
    }
    //method
    greet()
    {
        document.write("hello" +this.n1 +"age of" +this.n2 +"<br>")

    }
}
class student extends person{
    constructor( name,age,rollno,batch)
    {
        super(name,age)
        this.r=rollno
        this.b=batch
    }
    details()
    {
        document.write(this.n1 +"is from this" +this.b +"batch his rollno is"+this.r)

    }
    
        
    

}
let student1=new student("jack","23","123","B")
student1.greet()
student1.details()

