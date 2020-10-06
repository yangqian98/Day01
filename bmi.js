/*
                    作业 01
Mark 和 John 在 PK 他们的 BMI（Body Mass Index，体重指数）。
体重指数是用这个公式计算的：
BMI = mass / height^2 = mass / (height * height)。
其中，mass是体重，单位为 kg；height为身高，单位为米。
请用 JavaScript 编写一个程序，命名为 `bmi.js` ，完成如下任务：
1. 用变量存储 Mark 和 John 的体重以及身高；
2. 计算二人的 BMI；
3. 创建一个布尔变量，用来包含 Mark 的 BMI 是否比 John更高；
4. 打印一个字符串到控制台，包含第三步的变量（比如"Mark的BMI是否比John更高？true"）
 */

 // 1.声明变量：储存 Mark 和 John 的身高、体重
 let MHeight = 1.78,MMass = 60;
 let JHeight = 1.70,JMass = 55;
// 2.计算 BMI
let M_BIM = MMass / (MHeight * MHeight);
let J_BIM = JMass / (JHeight * JHeight);
console.log("Mark的BMI为："+ M_BIM);
console.log("John的BMI为："+J_BIM);
// 3.布尔变量：包含 Mark 的 BMI 是否比 John更高(三元运算）
let compare;        // 声明变量
compare = (M_BIM > J_BIM) ? true : false;   // 比较：若前者大，则输出 true，反之输出 false
console.log(compare);
// 4.打印字符串：包含第三步中的变量 compare
console.log("Mark的BMI是否比John更高？",String(compare));
