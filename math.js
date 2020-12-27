// Math 对象
let x = 1, y = 2, z = 3;
console.log(`最大值为：${Math.max(x,y,z)}`);

const scores = [1,2,2,32,12,2,333];
console.log(`最大值为：${Math.max(...scores)}`);


let a = Math.random() * 6;   // 0-1.0 之间的小数（这里×6时指0-5之间）
console.log(a);
// 向下取整数
console.log(Math.floor(a) + 1);  // 1-6之间


Math.floor(Math.random(a *6)) + 1  // 生成 1-6 之间的