/* 
    一、动态创建结点
*/

const oList = document.querySelector("#list1")

const oliElement = document.createElement('li')
oliElement.textContent = "swify"

// 创建文本结点
// const oTextNode = document.createTextNode('swify')
// oliElement.appendChild(oTextNode)
// oList.appendChild(oliElement)

// oList.append(oliElement)


// 将新插入的结点添加到最前面
oList.prepend(oliElement)


// 插入成第二个结点
oList.firstElementChild.after(oliElement)

// 插入成倒数第二个结点
oList.lastElementChild.before(oliElement)

// 删除最后一个结点
oList.lastElementChild.remove()

// 结点替换
oList.lastElementChild.previousElementSibling.replaceWith(oliElement)

// 将 list1 这个属性添加到 li 上
oList.lastElementChild.classList.add('list1')
// oList.classList.remove('list1')

oList.firstElementChild.classList.toggle('list1')

// 用 classList 来控制 css
oList.addEventListener('mouseover',(event) => {
    event.target.classList.toggle('list1')
})

