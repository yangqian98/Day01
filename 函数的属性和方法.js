// 一、函数的属性和方法
// 二、IIFE
// 三、闭包
// 四、函数式编程



/* 一、函数的属性和方法 */

// 函数的属性 1
function getStudent(name, age) {
    return "";
}
console.log(getStudent.length);     // 获取函数 getStudent() 中形参的个数    2

// 函数的属性 2
function getStudent1(name, ...age) {
    return "";
}
/* （1）对象.length */
console.log(getStudent1.length);     // 1
/* （2）对象.name */
console.log(getStudent1.name);    // getStudent1

const getStudent2 = function () {
    return '';
}
console.log(getStudent2.name);     // getStudent2
/* （3）对象.prototype */
console.log(getStudent2.prototype);     // getStudent2{}


// 1.call()
function add(c, d) {
    console.log(this.a + this.b + c + d);
}
add(3, 4);    // NaN       why? ——> this.a / this.b 都是 undefined(没有定义)
// add(3,4) 等同于 add.call(undefined,3,4);   this 是全局变量


let num = { a: 1, b: 2 };
add.call(num, 3, 4)    // 10 


// call() 的方法借用（组合）
const person = {
    // 属性
    name: "yangqian",
    // 方法
    say: function () {
        return `你好，我是 ${this.name}`;
    }
};
function moreSay(age, hobby) {
    console.log(`${this.say}, 我${age}, 喜欢${hobby}`);
}
moreSay.call(person, 22, "写代码")

// 定义一个全局变量
var lastName = "global_name";
const func = function (firstName) {
    return firstName + " " + this.lastName; // this 的值根据如何调用函数决定
};
var person = {
    // 该对象作为第一个参数传给call()
    lastName: "person_name",
};
let a = func("yangqian"); // 常规方式调用函数
console.log(a); // yangqian global_name
let b = func.call(person, "yangqian"); // 设置this为person
console.log(b); // yangqian person_name
let c = func.call();
console.log(c); // undefined global_name
let d = func.call(null, "yangqian"); // this为null
console.log(d); // yangqian global_name
let e = func.call(undefined, "yangqian"); // this为undefined
console.log(e); // yangqian global_name

//严格模式下
("use strict");
func.call(); // 不能读undefined的lastName属性
func.call(null, "yangqian"); // 不能读null的lastName属性
func.call(undefined, "yangqian"); // 不能读undefined的lastName属性

// 2.apply()
let array = ['a', 'b'];
let elements = [0, 1, 2];

// 不可变性（不改变原来的对象）
let newArray1 = [...array, ...elements];
console.log(newArray1);     // [ 'a', 'b', 0, 1, 2 ]

// 可变性（对象会被改变）
newArray1.push.apply(array, elements);
console.log(newArray1);     //  [ 'a', 'b', 0, 1, 2 ]

// (1) 方法借用模式（求最大值）
const number = [5, 6, 7, 9, 2];
//  null 代表的是 this 全局变量
let max = Math.max.apply(null, number);
console.log(max);     // 9


// 3.bind() —— 绑定函数
// (1)PPT上的实例
// (2) bind() 事例详细解读
var small = {
    a: 1,
    go: function (b, c, d) {
        console.log(this.a + b + c + d);
    },
};
var large = {
    a: 100,
};
small.go(2, 3, 4); // 10  go.call(small, 2,3,4)

small.go.call(large, 2, 3, 4); // 109

let bindTest1 = small.go.bind(large, 2, 3, 4);
bindTest1(); // 109
let bindTest2 = small.go.bind(large, 2, 3);
bindTest2(4); // 109
let bindTest3 = small.go.bind(large, 2);
bindTest3(3, 4); // 109

//   实例
const person = {
    age: 22,
    getNameAndAge: function (name) {
        return name + " " + this.age;
    },
};
// 直接在 person 对象上调用方法
person.getNameAndAge('yangqian');     // yangqian  22
// 将方法的引用赋值给变量   nameAndAge
const nameAndAge = person.getNameAndAge;
// 通过引用 nameAndAge，调用赋值给它的函数
nameAndAge('yangqian');   // yangqian  undefined (函数在全局作用域)
const boundNameAndAge = nameAndAge.bind(person, "yangqian");
boundNameAndAge();   // yangqian 22 (bind() 创建一个新函数，将this值绑定到person对象)
// 不带任何参数绑定
const boundNameAndAge = nameAndAge.bind();
boundNameAndAge("yangqian"); // yangqian undefined
// 将 'this' 设置为 'undefined'
const boundNameAndAge = nameAndAge.bind(undefined, "yangqian");
boundNameAndAge(); // yangqian undefined
// 将 'this' 设置为 'null'
const boundNameAndAge = nameAndAge.bind(null, "yangqian");
boundNameAndAge(); // yangqian undefined


// 4.函数的 toString() 方法
const getStudent = function () {
    return 'yang';
}
console.log(getStudent.toString());   // 访问函数体本身

console.log(Math.max.toString());  // function max() { [native code] }   访问不成功


// 5.自定义属性
// Memoization
function square(x) {
    return x * x;
}

function square(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x * x;
    }
    return square.cache[x];
}

square(3);
square(11);
console.log(square.cache); // { '3': 9, '11': 121 }
square(3);

const fina = function (n) {
    // if (n < 2) {
    //     return n;
    // } else {
    //     return fina(n-1) + fina(n-2);
    // }
    return n < 2 ? n : fina(n - 1) + fina(n - 2);
};
console.time();   // 查看计算时间
console.log(fina(40));
console.timeEnd(); // 查看计算时间


const finaCache = function (n) {
    // if (finaCache.cache != undefined){
    //     finaCache.cache = finaCache.cache;
    // }else{
    //     finaCache = {};
    // }
    finaCache.cache = finaCache.cache || {};

    if (!finaCache.cache[n]) {
        finaCache.cache[n] = n < 2 ? n : finaCache(n - 1) + finaCache(n - 2);
    }
    return finaCache.cache[n];
}

console.time();   // 查看计算时间
finaCache(40);
console.timeEnd();
console.time();
let a = finaCache(40);
console.timeEnd();
console.log(a);

// 
var fibonacci = function (n) {
    return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2);
};

function memoize(fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        fn.cache = fn.cache || {};
        return fn.cache[args]
            ? fn.cache[args]
            : (fn.cache[args] = fn.apply(this, args));
    };
}
const memFib = memoize(fibonacci);
console.time();
console.log(memFib(40));
console.timeEnd();
console.time();
console.log(memFib(40));
console.timeEnd();
