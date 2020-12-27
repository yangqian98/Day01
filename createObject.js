/*
    创建对象
*/

/* 一、定义多种类型的字面量对象 */
const oStudent = {
    // 定义属性
    "student Name" : 'yangqian',
    sge : 22,
    // 对象数组
    org : ['love','smart'],
    // 对象
    course : {'name':'java','day':1},
    // 空对象
    len : null,
    // 无定义
    len1 : undefined,
    // 定义方法
    learn :function() {
        console.log('hello,stdent!');
    },
    //另一种定义方法的形式
    learn1() {
        console.log('learn1')
    } 
};


delete oStudent.len;
console.log(oStudent.len);     // undefined
// 调用对象
oStudent.learn();
oStudent.learn1();
oStudent['learn']();
console.log(oStudent['age']);
console.log(oStudent["student Name"])



/* 二、采用构造函数创建字面量 */
const oStudent1 = new Object();
// (一）给对象添加属性
oStudent1.studentName = 'yangqian';
oStudent1.age = 22;


// （二）计算属性
let a = 'student' , b = 'Name';
const oStudent1 = {
    [a + b] : 'yangqian',
    age :22
};
console.log(oStudent1);


// 简写和不简写
// 当一个对象的属性名与属性值相同时，就可以简写
let studentName = 'yangqian' ,age = 22;
// （1）未简写
const oStudent2 = {
    studentName : studentName,
    age :age
}
// （2）简写
const oStudent3 = {studentName,age};    // ES6新语法
// 输出
console.log(oStudent3.studentName);

/* 练习 */
const name = Symbol("name");
const superGirl = { [name]: "Supergirl" };
console.log(superGirl[name]); // -> "Supergirl"
console.log(superGirl.name); // undefined;

const realName = Symbol("real name");
superGirl[realName] = "kara Danvers"; // 添加新属性
console.log(superGirl[realName]); // -> 'kara Danvers'
console.log(superGirl); // -> { [Symbol(name)]: 'Supergirl', [Symbol(real name)]: 'kara Danvers' }
const daredevil = {
    [name]: "Daredevil",
    [realName]: "Matt Murdoch",
};
console.log(daredevil); // -> { [Symbol(name)]: 'Daredevil', [Symbol(real name)]: 'Matt Murdoch' }



/* 三、判断属性和方法是否存在 */
const teacher = {
    name : 'yangqian',
    age : 22

};
// 1.通过 in 运算符判断
console.log('name' in teacher);    // true
console.log('sName' in teacher);   //false


// 2.通过逻辑表达式
if (teacher.name !== undefined) {
    console.log('teacher.name 存在')
};

// 3.用 hasOwnProperty()
//    对象         函数      属性
if (teacher.hasOwnProperty('name')) {
    console.log('我有这个属性！')
};


/* (一) 对象属性遍历 */
const oStudent4 = {
    "student Name" : 'yangqian',
    sge : 22,
    org : ['love','smart'],
    course : {'name':'java','day':1},
    len : null,
    len1 : undefined,
    learn :function() {
        console.log('hello,student4!');
    },
    learn1() {
        console.log('learn1')
    } 
};
console.log(oStudent.course.name);
/*  (1) for...in(输出数组名) */
// for (let p in oStudent4) {
//     console.log(p);
// };

/* (2) Object.keys() */
console.log(Object.keys(oStudent4));

/* (3) for..of(输出数组的每一项，包括值) */
// for (let p of Object.keys(oStudent4)) {
//     console.log(p);
// };


const values1 = Object.keys(oStudent4);
console.log(values1);
for (let values of values1){
    console.log(values);
};


/* (4) Object.entries() */
const [a,b] = Object.entries(oStudent4);
console.log([a,b]);
for (let [a,b] of Object.entries(oStudent4)) {
    console.log(`key:${a},values:${b}`);
                //  键      值 
}


// 四、按引用赋值
const aa = {name:'yang'};
const bb = aa;
bb.name1 = 'yang1';
console.log(aa.name);

// 1.greet()
function greet(greeting, name, age) {

}

function greet({ greeting, name, age }) {
    return `${greeting}! 我是${name}，今年${age}岁。`;
}
let a = greet({ greeting: "师傅，你好", age: 10, name: "Bart" });
    console.log(a); // -> 师傅，你好！我是Bart，今年10岁。
function greet({ greeting = "Hello", name, age = 18 }) {
    return `${greeting}！我是${name}，今年${age}岁。`;
}
let b = greet({});
console.log(b); //-> Hello！我是undefined，今年18岁。
let c = greet({ name: "Lisa", age: 8 });
console.log(c); // -> Hello！我是Lisa，今年8岁。


// 2.this
const dice = {
    side : 6,
    roll() {
        // 生成随机数
        return Math.floor(Math.random() * this.side) + 1;
    }
}
console.log(dice.roll());



// 对象字面量模式
let x = 1,y = 2, z = 3;
console.log(Math.max(x,y,z));

const myMath1 = {
    max: function(...num) {
        return num;
    }
};

myMath1.max();