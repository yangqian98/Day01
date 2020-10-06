/* 作业02
John 和 Mike 都在不同的队打篮球。在最近的3场比赛中，John 的队得了89分、120分和103分，
而 Mike 的队得了116分、94分和123分。
用 JavaScript 编写程序，存为 `ball.js`，完成以下任务：
1. 计算每队的平均分；
2. 决定哪支球队平均获胜（平均分最高），并将胜者打印到控制台。在输出中也包括平均分；
3. 然后改变分数来显示不同的赢家。别忘了考虑到可能会有平局（平均分相同）；
4. Mary 也打篮球，她的队得了97分、134分和105分。像前面一样，把平均分胜出者记录到控制台；
5. 像前面一样，改变分数以产生不同的赢家，记住可能会有平局。 
*/
// 1.计算 John、Mike、Mary三队的平均分
let johnAvg = (89 + 120 + 103) / 3;
let mikeAvg = (116 + 94 + 123) / 3;
let maryAvg = (97 + 134 + 105) / 3;
console.log("John的平均分是："+johnAvg+"\n" + "Mike的平均分是："+mikeAvg+"\n"
            + "Mary的平均分是："+maryAvg+"\n");
// 2,4.条件控制语句：判断三队中平均分最高的队伍，并连同分数一块打印出来(找出获胜队伍)
if ((johnAvg > mikeAvg) && (johnAvg > maryAvg)){
    console.log("John是获胜队伍！" + "平均分为：" + johnAvg);
}
else if ((maryAvg > mikeAvg) && (johnAvg < maryAvg)){
    console.log("Mary是获胜队伍！" + "平均分为：" + maryAvg);
}
else if ((johnAvg < mikeAvg) && (mikeAvg > maryAvg)){
    console.log("Mike是获胜队伍！" + "平均分为：" + mikeAvg);
}
else{
    console.log("平局");
}
console.log("--------------------------------------------")
// 3,5.将分数改变后在进行判断，结果会出现改变
let johnAvg1 = (105 + 120 + 114) / 3;
let mikeAvg1 = (116 + 100 + 123) / 3;
let maryAvg1 = (97 + 134 + 108) / 3;
console.log("John的平均分是："+johnAvg1+"\n" + "Mike的平均分是："+mikeAvg1+"\n"
            + "Mary的平均分是："+maryAvg1+"\n");
if ((johnAvg1 > mikeAvg1) && (johnAvg1 > maryAvg1)){
    console.log("John是获胜队伍！" + "平均分为：" + johnAvg1);
}
else if ((maryAvg1 > mikeAvg1) && (johnAvg1 < maryAvg1)){
    console.log("Mary是获胜队伍！" + "平均分为：" + maryAvg1);
}
else if ((johnAvg1 < mikeAvg1) && (mikeAvg1 > maryAvg1)){
    console.log("Mike是获胜队伍！" + "平均分为：" + mikeAvg1);
}
else{
    console.log("平局!");
}