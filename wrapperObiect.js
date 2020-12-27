/* 
    包装器对象（内置对象）
*/

/* 一、Boolean 对象 */
// 1.当做构造函数来用
let bool = new Boolean(true);
console.log(typeof bool);   //object
console.log(bool === true);   // false
console.log(bool.valueOf());    // true
console.log(bool.toString());    // true

// 2.当做函数来用
let a = Boolean('true');
console.log(a);   // true

// 3.0,undefined,'',NaN   转换时会变成 false
let b = Boolean(0);
console.log(b);   // false

let b = Boolean([]);
console.log(b);     // true


/* 二、Number 对象 */
let num = new Number(123);
console.log(num.length);

// 1.静态方法
// (1) 转换成整型
let c = Number.parseInt(111232.9009)
console.log(c)

let d = Number.parseFloat(11123)
console.log(d)

// (2) 判断是否是整数
let e = Number.isInteger(111.8)
console.log(e)

// 2.实例方法
let f = (345).toLocaleString("zh-hans-CN-u-nu-hanidec");
console.log(f);



/* 三、String 对象  */
// 1.静态方法
let h = String.fromCharCode(97);    // 转 ASCLL 码
h = String.fromCodePoint('0x99');
console.log(h);

// 2.实例方法
let j = 'yangqian';
console.log(j.slice(1,3));    // an —— 左开右闭
console.log(j);

let j1 = 'yangqian';
console.log(j1.concat('xyz'));



/* 四、JSON 对象 */


/* 五、Math 对象 */



/* 六、RegExp 对象 */









