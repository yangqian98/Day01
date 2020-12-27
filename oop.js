/*
    一、面线对象编程概述
    二、创建对象
    三、原型继承：原型与原型链
    四、类（ES6）
*/

/*  一、面线对象编程概述 */
// 1.面向对象编程的基本特征：封装、继承、多态
// 2.面向对象的基本概念：类、对象


/* 二、创建对象 */

// 创建对象的方式
// 方式一：对象字面量
const dog = {
    name: "mini",
    breed: "泰迪",
    color: "棕色",
    bark() {
        return "汪汪！"
    }
};

// 方式二：构造函数
// 每一个对象都有一个原型（ptototype）属性：constructor
function Dog(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
}
Dog.prototype.bark = function () {
    return '汪汪！';
}
// 传入参数
let dog1 = new Dog('豆豆', '泰迪', '棕色');
console.log(dog1);  // 输出

// constructor 属性
console.log(dog1.constructor);   // [Function: Dog] ----- 返回的是对象的构造函数（构造器）


// 方式三：Object.create()
const dog = {
    name: "mini",
    breed: "泰迪",
    color: "棕色",
    bark() {
        return "汪汪！"
    }
};
// 用 dog 作为模板来创建一个新的对象，其属性和方法全部被继承
let dog2 = Object.create(dog);
console.log(dog2);

// 方式四：ES6 类
class Dog {
    // 属性
    constructor(name, breed, color) {
        this.name = name;
        this.breed = breed;
        this.color = color;
    }
    // 方法（狗叫）
    bark() {
        return '汪汪！';
    }
}
let dog3 = new Dog('豆豆', '泰迪', '棕色');
console.log(dog3);



/* 三、原型继承：原型与原型链 */

// 创建一个空对象
const empty = {};
console.log(empty.__proto__);



function Dog(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.bark = function () {   // 此方法会造成内存浪费（最简洁的是ES6类 —— 采用最多）
        return '汪汪！';
    };
};
console.log(Dog);
// 构造函数的原型（protptype）是一个对象，其有两个属性（constructor、__proto__），
// 这两个属性有两个对象（分别是：1.函数构造器——即这里的Dog函数构造器，2.object())
console.log(Dog.prototype.constructor);
console.log(Dog.prototype.__proto__);
let dog4 = new Dog('豆豆', '泰迪', '棕色');
console.log(dog4);
console.log(dog4.name);

// es6 继承一般两个层级，不要过多

class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        return "汪汪！";
    }
};

class ChiWaWa extends Dog {
    constructor(name) {
        super(name);
    }
    smallBark() {
        return '低声汪汪叫！';
    }
};
let myPet = new ChiWaWa('当当');
// myPet.__proto__ 查看 myPet 对象的原型
console.log(myPet.__proto__);   // ChiWaWa {}
console.log(myPet.__proto__.__proto__);  // Dog {}
console.log(myPet.__proto__.__proto__.__proto__);   // {}   (object{} 空对象)


/* 
    对象——constructor :一个对象（类）有一个 contructor 属性
    构造函数——prototype ： 一个构造函数有一个 prototype 原型对象
    对象——__proto__ ： 一个对象有一个 __proto__ 原型属性
 */


/* 四、类（ES6） */
// 1.类声明
class User {
    // 类主体
}

let User1 = new User();

// 2.类表达式
const User = class {

};
let User2 = new User();
/* 总结：类声明和类表达式都不会提升（是考虑子类） */

// 函数声明和函数表达式

// 函数声明：要提升，提升到作用域的顶部
function getUser() {

};

// 
const getUser = function () { };


// 添加字段 1 —— 公共的实例字段

// 加上 contructor 方法，初始化
class User {
    constructor(name1) {
        this.name = name1;   // 隐式创建了一个实例字段：name
    }
}
// =>等同于构造函数（js中的类只能有一个构造函数）
// function User(name) {
//     this.name = name;
// }

let user1 = new User("yang");
console.log(user1.name);

class User {
    name1 = 'unfdnsdf';   // 显式定义一个实例字段

    constructor(name) {
        this.name = name;
    }
};
let user2 = new User('yangqian');
console.log(user2.name1);
console.log(user2.name);


// 添加字段 2 —— 私有的实例字段
class User {
    // 定义私有变量
    #name;
    constructor(name) {
        this.#name = name;
    }
};
let user3 = new User('yangqian');
console.log(user3.getName());   // yangqian
console.log(user3.#name);   // 会报错：私有变量只能在类里面使用


// 添加字段 3 —— 公共静态字段
class User {
    static TYPE_ADMIN = 'admin';
    static TYPE_REGULAR = 'regular';
    name;
    type;
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
const admin = new User("网站管理员", User.TYPE_ADMIN);
admin.type === User.TYPE_ADMIN; // => true

// ES5 的实现
function User(name, type) {
    this.name = name;
    this.type = type;
}
console.log(User.TYPE_REGULAR);   //
const admin = new ('管理员');


// 添加字段 4 —— 静态的私有字段
class User {
    static #MAX_INSTANCES = 2;
    static #instances = 0;
    name;
    constructor(name) {
        User.#instances++;
        if (User.#instances > User.#MAX_INSTANCES) {
            throw new Error('无法创建User实例');
        }
        this.name = name;
    }
}
new User('Jon Snow');
new User('Arya Stark');
new User('Sansa Stark'); // 抛出错误




// 添加方法 1 —— 公有的实例方法
class User {
    name;    // 公有的实例字段
    constructor(name) {   // 构造方法
        this.name = name;
    }
    getName() {
        return this.name;
    }
    nameContains(str) {
        return this.getName().includes(str);
    }
}
const user = new User("Jon Snow");
user.nameContains("Jon"); // => true
user.nameContains("Stark"); // => false


// 添加方法 2 —— 私有的实例方法
class User {
    // 公有的实例字段
    #name;
    // 构造方法
    constructor(name) {
        this.#name = name;
    }
    // 私有的实例方法
    #getName() {
        return this.name;
    }
    nameContains(str) {
        return this.#getName().includes(str);
    }
}
let user4 = new User("yangqian");
user1.#getname();
const user = new User("Jon Snow");
user.nameContains("Jon"); // => true
user.nameContains("Stark"); // => false
user.#getName(); // 抛出 SyntaxError


// 添加方法 3 —— 公有静态方法
class User {
    static #takenNames = [];
    static isNameTaken(name) {
        return User.#takenNames.includes(name);
    }
    name = "Unknown";
    constructor(name) {
        this.name = name;
        User.#takenNames.push(name);
    }
}
const user = new User("Jon Snow");
User.isNameTaken("Jon Snow"); // => true
User.isNameTaken("Arya Stark"); // => false


// 添加方法 4 —— 私有的静态方法
class User {
    static #takenNames = [];
    static #isNameTaken(name) {
        return User.#takenNames.includes(name);
    }
    name = "Unknown";
    constructor(name) {
        this.name = name;
        User.#takenNames.push(name);
    }
}
const user = new User("Jon Snow");
User.#isNameTaken("Jon Snow"); // => TypeErro


// 添加方法 5 —— getter / setter 方法
class User {
    #nameValue;
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this.#nameValue;
    }
    set name(name) {
        if (name === "") {
            throw new Error(`User的 name 字段不能为空`);
        }
        this.#nameValue = name;
    }
}
const user = new User("Jon Snow");
user.name;   // getter 被调用， => “Jon Snow”
user.name = "Jon White";
user.name = '';


// 继承



// 继承的实现 —— super的实现