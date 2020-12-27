/* 
    三、事件
    同一个事件的同一个对象可以添加很多监听事件
*/

const oButton1 = document.querySelector('#myButton1')
// 箭头函数
// const callback = () => {
//     console.log('click1')
// }
// oButton1.addEventListener('click1',callback)

// 注册事件处理程序
const callback1 = () => {
    console.log('click1')
}
oButton1.onclick = callback1    //  如果后面加上括号就是马上执行

const callback2 = () => {
    console.log('new click1')
}
oButton1.onclick = callback2    //  如果后面加上括号就是马上执行

// 多个事件都可以进行
oButton1.addEventListener('click',() => {
    console.log('click2')
})

oButton1.addEventListener('click',() => {
    console.log('click3')
})


// 当要删除某一事件监听时，不能将回调函数写在事件中，应该写出来：
const callback3 = () => {
    console.log('click4')
}
oButton1.addEventListener('click4',callback3)


