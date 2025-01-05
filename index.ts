import Mathy from "./mathy";

const mth:Mathy = new Mathy();
console.log(mth.add(1, 2))

console.log('Hello, Node.js!');

let n:string = 'John';

console.log(n);

enum color {
    red,
    green,
    blue
}

let c:color = color.green;

console.log(c);

function dosometing(c:color):void {
    console.log(c);
}

const a:string = "asdasd";
dosometing(c);

function logClass(target: any) {
    console.log(target);
}

@logClass
class Employee {
    public name: string;
    public age: number;
    public display():void {
        console.log(this.name);
        console.log(this.age);
    }
}

let emp = new Employee();
console.log(emp.display());

emp.name = "John";
console.log(emp);


