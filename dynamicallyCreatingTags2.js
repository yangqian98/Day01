/* 
    二、对 CSS 样式的操作
*/

const oList = document.querySelector('#list1')  // ul

// 1、ul 的第二子元素结点
const oli = oList.firstElementChild.nextElementSibling
// (1)设置背景颜色  (backgroud color => backgroundColor)
oli.style.backgroundColor = 'skyblue'  

// (2)方式一：设置边框
// oli.style.cssText = 'border:1px green solid'
// 方式二：
oli.style.border = '1px green solid'

// 获取所有属性的集合
const comStyle = window.getComputedStyle(oli)
console.log(comStyle)
// 获取某一个元素的属性值
console.log(comStyle.borderLeft)
