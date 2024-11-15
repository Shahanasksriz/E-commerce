let person={
    firstname:"jhon",
    lastname:"Doe",
    Age:30

}
console.log("firstname:"+person.firstname)
console.log("lastname:"+person.lastname)
console.log(person.Age="24")
console.log(person.firstname="anu")
console.log(person.firstname)


let car={
    make:"toyota",
    model:"corolla",
    year:2015,
    start:function(){
        console.log("car started")
    }

}
car.start()


let employee={
    name:"anju",
    position:"HR",
    salary:20000,
    getsalary:function(){
        // console.log("salary of " +employee.name + "is " +  this.salary)
        document.write("salary of "+employee.name +"is"+ this.salary)
    }
}

// console.log(employee.name)
document.write(employee.name+"<br>")
employee.getsalary()




class emp{

    constructor(name,position,salary){
        this.n1=name
        this.p1=position
        this.s1=salary

    }
    getsalary(){
        document.write("salary of"+this.n1 +"is"+this.s1,"<br>" )
    }
    

}
let el=new emp("anu","developer",34000)
let e2=new emp("zain","tester",56000)
el.getsalary()
e2.getsalary()