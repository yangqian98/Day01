// IIFE
/* 立即运行的函数(临时变量，用完之后就丢失) */
// ① (es5)
(function() {
    var temp = 2;
})();
console.log(temp);   // 报错：temp 没有定义（由于是临时变量，用一下就丢失了)

// ②（es6) 等同于 ①
{
    const temp = 1;
}
console.log(temp);

(function () {
    const name = "Peter Parker";
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(),
      today = days[date.getDay()];
    console.log(`${name}，欢迎回来。今天是${today}`);
  })();
  
  {
    const name = "Peter Parker";
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(),
      today = days[date.getDay()];
    console.log(`${name}，欢迎回来。今天是${today}`);
  }
  
  ("use strict");
  
  

// 应用一  —— 临时变量
// 应用二  —— 初始化代码

// 严格模式，放在自己的代码之前（但如果要用别人的代码，可能会出错，因为别可能没有使用严格模式。
// 因此，建议用在一个临时变量里面
'use strict';   

// 应用三  —— 创建
// 模块模式
var myMoudle = (function() {
    var myPrivateVar,myPrivateMethod;
    // 私有变量
    myPrivateVar = 0;
    // 私有方法
    myPrivateMethod = function(foo) {
        console.log(foo);
    };
    // return 出来的变量是公开变量
    return {
        // 公开变量
        myPublicVar : "foo",
        // 公开方法
        myPublicFunction : function(bar) {
            myPrivateVar ++;
            myPrivateMethod(bar);
        }, 
    };
})();

// 暴露的模块模式
var myRevealingModule = (function() {
    var privateCounter = 0;
    function privateFunction() {
        privateCounter ++ ;
    }
    function publicFunction() {
        publicIncrement();
    }
    function publicIncrement() {
        privateFunction();
    }
    function publicGetCount() {
        return privateCounter;
    }
    // 暴露公有属性和方法，指向私有属性和方法
    return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount,
    };
})();
myRevealingModule.start();
myRevealingModule.increment();
myRevealingModule.count();

