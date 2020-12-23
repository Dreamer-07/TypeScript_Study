import {name,module1} from "./module/m1";

console.log(name);
module1();

let suki : (name:"巴御前") => string;

suki = (name:"巴御前") => {
    return name;
}

console.log(suki("巴御前"));

const obj = {name:"巴御前",age:18};
console.log(obj.name);
console.log(obj.age);
console.log(obj);

console.log(Promise);