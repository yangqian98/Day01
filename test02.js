/* 
假设有三个数 a、b、c，求这三个数的平均值的函数为：
function mean(a,b,c){
    return (a + b + c)/3;
}
(1)如果要求任意个数的数字的平均值，改如何改进这个函数呢？请编写改进的
mean1()函数，让该函数可以计算任意个数的数字的平均值。
提示：使用扩展运算符
(2)请编写函数 mean2() ，使用数组的 reduce() 函数改写 mean1() ，让代码更加精简
(3) 请在第二步的基础上编写函数 mean3() ，实现只对数组中的偶数求平均值。

提示：使用回调函数

*/
// 第 1 题
const mean1 = (...numbers) => {
    let sum = 0;
    let avg;
    for (const num of numbers) {
        sum = sum + num;
        avg = sum / num;
    }
    return avg;
}
console.log("平均值：" + mean1(2, 2, 2, 2,2));

// 第 2 题
function mean2(...numbers){
    // 传入对数组中的每个元素执行一个提供的 reduce 函数(升序执行)，
    // 将其结果汇总为单个返回值(这里是每个相加,即求到数组元素之和)。
    var sum = [1,2,3,6,4].reduce((num,surval) => num + surval);
    // 数组长度
    var len = arguments.length;  
    var avg = sum / len;
    return avg;
}
console.log("平均值：" + mean2(1,2,3,6,4));

// 第 3 题
function mean3(...numbers){
    const data = [1,2,3,6,4];
    // 将偶数提出来
    const oArray = [ ];
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 === 0) {
            // 将符合情况的偶数提出来存放到 oArray 这个数组里面
            oArray.push(data[i])  
        }
    }
    // 打印输出偶数数组
    console.log("偶数数组：",oArray);       
    var sum = oArray.reduce((num,surval) => num + surval);
    // 求数组长度
    var len = oArray.length;  
    var avg = sum / len;
    return avg;
}
console.log("偶数平均值：" + mean3());