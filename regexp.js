/* 
    创建正则表达式
*/

// 方式一
const pattern = /javaScript/;
let a =pattern.test('javaScript');
console.log(a);


// 方式二
// RegExp
const pattern1 = new RegExp('javaScript');
let b = pattern1.exec('javaScript');
console.log(b);


let b1 = /dog/.test('hot dog');  
console.log(b1);  // true

let b2 = /d.g/.test('hot dog');  
console.log(b2);  // true

let b3 = /^dog/.test('hot dog');  
console.log(b3);  // true


const pattern = new RegExp('[a-zA-Z]+ing');
console.log(pattern.test('joke')); // false
console.log(pattern.test('joking')); // true
console.log(pattern.exec('joking')); // [ 'joking', index: 0, input: 'joking', groups: undefined ]


let c = /11|22/.test('2232432');
console.log(c);   // true


let d = (new RegExp('1\\+1').test('1+1'));
console.log(d);

/*  匹配原则  */

// abcd任意一个出现就可以
let f = /[abcd]/.test('php');
console.log(f);
// a-d里面某一个在就可
let f1 = /[a-d]/.test('pbp');
console.log(f1);


let g = /[\d]/.test(1233);
console.log(g);


let h = /l{0}k/.test('loooook');
console.log(h);

