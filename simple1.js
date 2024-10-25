//let a=100;
//let b=200;
//console.log(a);
//const a=10;
//a++;
//console.log(a);
//let collegeName="Scient college";
//console.log(collegeName);
//let name1=new String("Scient Engg College");
//console.log(name1);
//let collegeName="Scient college";
//console.log(collegeName.startsWith("Scient"));
//console.log(collegeName.startsWith("college"));
//console.log(collegeName.endsWith("scient"));
//console.log(collegeName.endsWith("college"));
//console.log(collegeName.repeat("scient"));
//console.log(collegeName.includes("college"));
/*four methods 
1.startswith
2.endswidth
3.includes
4.repeat*/
/*let college = "scient college";
console.log(i am studing in ${college});*/


/*(let collegeName="Scient Engg College";
console.log('i am studying in ${collegeName}');*/
/*class Employee{
    constructor(){
        this.id=1001;
        this.name="Jithendra"
    }
    display(){
        console.log(this.id+" "+this.name)
    }
}
let e=new Employee();
e.display();*/
class Employee{
    constructor(id, name){
        this.id=id;
        this.name=name;
    }
    display(){
        console.log(this.id+" "+this.name)
    }
}
let e=new Employee(1002,"Vamshi");
e.display();
