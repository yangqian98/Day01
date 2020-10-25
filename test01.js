/* 
小明和他家人在泰国旅游，到3个不同的饭店吃饭。账单(bill)分别是124元、48元
和268元
为了给服务员小费(tip)，小明创建了一个简单的小费计算器函数(tipCalculator)。如
过账单小于 50 元，他会给账单的 20% 作为小费；如果账单在 50 到 200 之间，他会
给账单的 15% z作为小费；如果账单超过 200 元，他会给账单的 10% 作为小费。
小明想要 2 个数组：
(1) 一个数组包含三个小费(每个账单一个)；
(2) 一个数组包含所有三个最终支付金额(账单 + 小费)。
最后把这 2 个数组输出到控制台

方案一：可以声明两个空数组(一个小费、一个总消费)，然后循环遍历账单数组。
       采用数组索引的方式来计算小费，然后将每一个小费与其账单相加即得到总消费
       关键步骤：
           const tip = [];
           const cost = [];
           tip[i] = bill[i] * X%
           cost[i] = tip[i] + bill[i]

方案二：可以声明两个空数组(一个小费、一个总消费)，函数体内再声明两个
       变量(tip、cost)，计算小费时就可以直接采用数字方式来计算(tip = bill[i] * X%)，
       最后将计算得到的结果运用添加元素到数组的知识点(arrayName.push(varName))来添加到
       最开始声明的数组中即可。
       关键步骤：
            const tips = [];
            const costs = [];
            let tip;           函数体内声明
            tip = bill[i] * X%
            const cost = tip + bill[i]
            添加到数组
            tips.push(tip);
            costs.push(cost);
循环遍历数组：①for   ② for-in   ③ forEach    ④for-of(ES6新增)
*/
const tip = [ ];   // 定义一个小费空数组
const cost = [ ];  // 定义一个总消费的空数组   

const tipCalculator = (bill) => { 
// 声明函数(传入了一个账单(bill)参数)
// function tipCalculator(bill){
    for (let i = 0;i < bill.length;i++){
        // var tip;  // 声明一个小费变量
        if(bill[i] < 50){
            tip[i] = bill[i] * 0.2;  // 小费
        }
        else if ((bill[i] > 50) && (bill[i] < 200)){
            tip[i] = bill[i] * 0.15;
        }
        else if(bill[i] > 200){
            tip[i] = bill[i] * 0.1;
        }
        tip[i] = Math.round(tip[i] * 100) / 100;   // 输出小费保留一位小数
        // 计算总消费（方案一）
        cost[i] = tip[i] + bill[i];
        // (方案二)
        // const cost = tip + bills[i];
        // tips.push(tip);
        // costs.push(cost);
    }
    //输出小费和最终支付金额
    console.log ("小费：",tip ,"\n总消费：",cost);

}
tipCalculator([124,48,268]);  // 传参打印输出函数