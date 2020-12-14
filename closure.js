// 闭包（closure）:
//               简单来讲，一个函数闭合了(捕获)了外部作用域的变量，即可称其为闭包
// 如何识别：（1）如果一个内层函数访问了了外部作用域的变量
//          （2）如果一个内层函数返回了外层函数变量
// 在全局作用域下的变量可以访问函数内层的对象
function outerFunc() {
    let outerVar = "I am outside!";
    function innerFunc() {
        console.log(outerVar);
    }
    return innerFunc;
}
const myInnerFunc = outerFunc();
myInnerFunc();   // I am outside!

// 引用错误


// 词法作用域
  
  const myGlobal = 0;
  function func() {
    const myVar = 1;
    console.log(myGlobal); // 输出 0
    function innerOfFunc() {
      const myInnerVar = 2;
      console.log(myVar, myGlobal); // 输出 1 0
      function innerOfInnerOfFunc() {
        console.log(myInnerVar, myVar, myGlobal); // 输出 2 1 0
      }
      innerOfInnerOfFunc();
    }
    innerOfFunc();
  }
  func();
  
  let countClicked = 0;
  myButton.addEventListener("click", function handleClick() {
    countClicked++;
    myText.innerText = `You clicked ${countClicked} times`;
  });
  
  const message = "Hello, World!";
  setTimeout(function callback() {
    console.log(message); // 输出 "Hello, World!"
  }, 1000);
  
  function multiply(a) {
    return function executeMultiply(b) {
      return a * b;
    };
  }
  
  const double = multiply(2);
  double(3); // => 6
  double(5); // => 10
  const triple = multiply(3);
  triple(4); // => 12
  
  function multiplier(x, y) {
    return x * y;
  }
  const tax = multiplier(0.22, 400); // 88
  
  function multiplier(x, y) {
    if (y === undefined) {
      return function (z) {
        return x * z;
      };
    } else {
      return x * y;
    }
  }
  calcTax = multiplier(0.22);
  calcTax(400); // 88
  