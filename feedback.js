/*  
    Lexical Scoping
    1)Function Scope
        a)Global Scope
        b)Local scope
    2)Block Scope

    Var associated with function and block as well
    let and const associated with block only 
*/

let name="Aiman";                           //Global Scope

function getName(){
    let id=1;                               //Local Scope   
    if(true){
        let l_name="Shahbad";               //Block Scope
        var hobbie="cooking";               // Function and Block Scope 
        console.log(id);                    //1
    }
    console.log(name);                      //Aiman
    console.log(id);                        //1
    console.log(hobbie);                    //cooking
    // console.log(l_name);                    //Uncaught ReferenceError: l_name is not defined
}

console.log(name);                          //Aiman
getName();
// console.log(id);                         //Uncaught ReferenceError: id is not defined





/*  
        Closure:
        function and its lexical scoping forms a Closure
*/

function firstName(fname){
    let m_name="Abid"
    return function lastName(lname){
        console.log(fname+" "+m_name+" "+lname);
    }
    

}

let ename=firstName("Aiman");                   //ename holds the reference of firstName
let full_name=ename("Shahbad");

firstName("Aiman")("Shahbad");                  





/*      
        Callbackhell
*/




// let file=require('fs');
// file.readFile('abc.js',function(err,results){
//     if(err){
//         console.log(err);
//     }
//     console.log(results);

// });



function callbackhell(){
    const newemployee={
        name:"Aiman",
        post:"Trainee",
        language:["C","C++","Python"]
    };
    setTimeout((name) => {
        this.name=`The Employee Name is ${name}`;
        console.log(this.name);
        console.log(Error);
        setTimeout((post) => {
            this.post=`Employee Post:${post}`;
            console.log(this.post);
            setTimeout((language) => {
                this.language=`The fav language:${language}`;
                console.log(this.language);
            }, 2000,newemployee.language[2]);
            
        }, 3000,newemployee.post);

    }, 2000,newemployee.name,Error);
}



callbackhell();




/*

        Prototype

*/

class Person{
    constructor(name,post){
        this.name=name;
        this.post=post;

    };

    getDetails(){
        return this.name+" "+this.post;
    }

};

class Employee extends Person{
    constructor(name,post,id){
        super(name,post);
        this.id=id;
        
    }

    getEmployeeDetail(){
        // return this.id+" ";
        return `Id-${this.id}:`+super.getDetails();
    }
}

let emp1=new Employee("Aiman","Trainee",1);
console.log("***");
console.log(emp1);
console.log("***");
console.log(emp1.getEmployeeDetail());
