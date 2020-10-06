/* 作业03
用JavaScript编写程序，取名 `star.js`，在控制台输出如下图形：
   *
  * *
 * * *
* * * *
 * * *
  * *
   *
 */
let all = "";
for(let i=1; i<=4; i++){       // 上面四行的循环（第一重）
    let blank = " "; // " " 引号里面的空格会使得整个图形向右边移动一个空格的位置
    let stars = " ";
    for(let m=1; m<=4-i; m++){   //第一重循环里面的第一个循环（循环输出空格）
        blank = blank + " ";
    }
    for(let n=1; n<=i; n++){        //第二个循环（打印 *）
        stars = stars + "*" + " ";
    }
    all = all + blank + stars + "\n"; 
}
for(let i=4-1; i>0; i--){       //后三排的循环（第二重循环）
    let blank = " ";
    let stars = " ";
    for(let m=1; m<=4-i; m++){  //打印空格
        blank += " ";
    }
    for(let n=1; n<=i; n++){       //打印 *
        stars += "*" + " ";
    }
    all += blank + stars + "\n";   //字符串的拼接,拼为一行
}
console.log(all);
