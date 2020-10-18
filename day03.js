// 一、创建对象
// 通过 Object 构造函数
let myObject = new.Object();
myObject.name = "yangqian";
myObject.age = 22;

console.log(myObject);

// 2.通过对象字面量创建对象
const oStudent = {};
oStudent.name = "yangqian";
oStudent.age = 22;

const oStudent1 ={
    name:"yangqian",
    age:22
}
console.log(oStudent1.name);
console.log(oStudent1.age);

// 查看变量类型
console.log(typeof oStudent1);      // 结果：object

// 二、数组（array）
// 1.与其他语言不同的是可以存储任意类型的数据   2.数组长度可变（动态大小）
// 声明数组（方式一）
const a1 = new Array();
// （方式二）
const a2 = [];
console.log(typeof a2);  // 结果：object
console.log(a2[0]);     // 结果：undefined
// 给空数组赋值（方式一）
a2[0] = 'a';
a2[1] = 2;
a2[5] = true;

// 判断 a2 是否是数组
console.log(a2 instanceof Array);  
console.log(a2);
console.log(a2[3]);   // 结果：undefined
// （方式二）
const a3 = [1,2,3,'abc',true,undefined,null];
console.log(a3);


// 当删除数组中一个元素时，数组长度没有改变，用 undefined 替代了
const avengers = ["美国队长","钢铁侠","猪猪侠","图图"]
delete avengers[2];
console.log(avengers);


const number1 = [1,2,3,4];
let a = number1[0];
let b = number1[1];
let c = number1[2];
let d = number1[3];
console.log(`a=${a},b=${b},c=${c},d=${d}`);

// 解构语法
const [a,b,c,d] = [1,2,3,4];
console.log(`a1=${a},b1=${b},c1=${c},d1=${d}`);

// 模板数组
const [a,b] = ["yangqian",true,1,2,3];
console.log(`a=${a},b=${b}`);


const avengers = ["美国队长","钢铁侠","猪猪侠","图图"];
console.log(avengers.length);
avengers.length = 1;
console.log(avengers);
avengers.length = 0;
console.log(avengers);


/* 三、数组的属性和方法 */
// 1、pop()——删除数组的最后一个元素，最终变成一个新数组，删除的位置不会保留，不同于 delete 删除
const avengers = ["美国队长","钢铁侠","猪猪侠","图图"];
avengers.pop();
console.log(avengers);
// 2、push()——添加一个元素到数组的末尾
avengers.push("yangqian");
console.log(avengers);
// 3、shift()——删除第一个元素
avengers.shift();
// 返回删除的元素的内容
console.log(avengers.shift());
console.log(avengers);   // 查看最终数组
// 4.unshift()——添加元素到数组的第一个
avengers.unshift("yangqian");
console.log(avengers); 


// 5、数组合并
// （方式一）
const avengers = ["美国队长","钢铁侠","猪猪侠","图图"];
const heroes = ["美国","中国","韩国","英国"];
const merge = avengers.concat(heroes);
console.log(avengers,heroes,merge);

// （方式二）
const avengers = ["美国队长","钢铁侠","猪猪侠","图图"];
const heroes = ["美国","中国","韩国","英国"];
const merge = [...avengers,...heroes];
console.log(merge);

// 6、join()
const avengers = ["美国队长","钢铁侠","猪猪侠","图图"];
const av1 = avengers.join();
const av2 = avengers.join("&");
console.log(av1);
console.log(av2);

// 7、slice()——数组切片（左闭右开——>索引写到第四个元素，但第四个元素不会被切掉）
const avengers = ["美国队长","钢铁侠","猪猪侠","图图"];
const av3 = avengers.slice(1,3);  // 数字为元素索引
console.log(avengers);
console.log(av3);

// splice()——数组切片（与 slice不同，写到第几个元素就会切掉全部写出的元素）
const avengers = ["美国队长","钢铁侠","猪猪侠","图图"];
const av4 = avengers.splice(1,3);
console.log(av4);
console.log(avengers);
// splice()——切掉元素同时添加元素（添加的元素会直接添加到切除元素的位置里，相当于补空）
const avengers = ["美国队长","钢铁侠","猪猪侠","图图"];
const av5 = avengers.splice(1,3,"yanqqian",611);
console.log(av5);
console.log(avengers);

// sort()——将数组元素依次输出
const number2 = [1,10,2,28,3,9];
const av6 = number2.sort();
console.log(av6);
console.log(number2);

//reverse()——将数组元素倒叙输出
const number3 = [1,10,2,28,3,9];
const av7 = number3.reverse();
console.log(av7);
console.log(number3);


// indexOF()——
const avengers = ["美国队长","钢铁侠","猪猪侠","图图"];
const av8 = avengers.indexOf("美国队长");
console.log(av8);

// includes()——
const avengers = ["美国队长","钢铁侠","猪猪侠","图图"];
const av9 = avengers.includes("美国队长");
console.log(av9);


/* 四、多维数组 */
const ma = [[1,2],[3,4]];
console.log(ma);
console.log(ma[0][0]);
console.log(ma[1][0]);

// 扁平数组（将数组嵌套）
const summer = ['Jun','Jul','Aug'];
const winter = ['Dec','Jan','Feb'];
const nested = [summer,winter];
console.log(nested);

const flat = [...summer,...winter];
console.log(flat);

/* 五、Set */
// 添加元素
const oSet = new Set();
oSet.add(1);
oSet.add(2);
oSet.add(3).add(4).add(5);
oSet.add(6);
console.log(oSet);

const list1 = new Set([1,2,3,4,5,6]);
console.log(list1);

// 挨个输出定义的字符，会自动合并相同的字符
const list2 = new Set("hello");
console.log(list2);

// Set 的属性
//1、 size——只读，获取集合中元素数目
const list3 = new Set().add("the").add("quick").add("or").add("fox");
console.log(list3.size);

// 无效
list3.size = 2;
console.log(list3);

// 2、has()——
const list4 = new Set().add("the").add("quick").add("or").add("fox");
a = list4.has('brown');
console.log(a);

//3、delete()——
const list4 = new Set().add("the").add("quick").add("or").add("fox");
const b = list5.delete("fox");
console.log(b);
console.log(list5);

list5.clear();
console.log(list5);

// 4、from()——
// (方式一)
const list6 = new Set().add("the").add("quick").add("or").add("fox");
const a1 = Array.from(list6);
console.log(a1);
// (方式二)
const list6 = new Set().add("the").add("quick").add("or").add("fox");
const a2 = [...list6];
console.log(a2);

// 5、删除重复的元素(数组去重)
const oArray1 = [1,2,12,3,1,3,5];
// 步骤一：先将数组转换成集合（自动去重）
const oSet1 = new Set(oArray1);
console.log(oSet1);
// 步骤二：再将集合转换回数组
const oArray2 = [...oSet1];
console.log(oArray2);

/* WeakSet */
// 创建一个学生对象
let student = {
    name:"xiaoming",
    age:21
};
// 方式一：Set()——会发生内存泄漏
const strong = new Set();
strong.add(student);
student = null;
// console.log([...strong][0]);
console.log(strong.has(student));

// 方式二：WeakSet()——方式内存泄漏
let student = {
    name:"xiaoming",
    age:21
};
const week = new WeakSet();
// weak.add(1);
weak.add(student);
student = null;
console.log(week.has(student));


/* 六、Map */
// Map映射
// 1、set()
const oMap = new Map();
oMap.set(1,"I") 
oMap.set(2,"II") .set(3,"IV").set(4,"IV").set(5,"V")
console.log(oMap);
console.log(oMap.size);
// 2、get()
// 取 key 为 5 的元素
const a = oMap.get(5);    // 5是 key
console.log(a);
oMap.set('name',"xiaoming");
const b = oMap.get('name');
console.log(oMap);
console.log(b);
// has(key)
console.log(oMap.has('name'));
// delete()
const c = oMap.delete('name');
console.log(c);
// clear()
oMap.clear();
console.log(oMap);

// 嵌套数组
const oMap = new Map().set(1, "I").set(2,'II').set('b',"III").set(4,"IV").set('a',"V")
const oArray = [...oMap];
console.log(oArray);

const oMap = new Map().set(1, "I").set(2,'II').set('b',"III").set(4,"IV").set('a',"V")
const oArray = Array.from(oMap)
console.log(oArray);

const student = {
    name: 'xiao',
    age: 21
};

student.name = 'xiao'
student.age = 21
student = null;