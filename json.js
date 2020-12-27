/* JSON 对象 */
const oStudent4 = {
    "student Name" : 'yangqian',
    sge : 22,
    org : ['love','smart'],
    course : {'name':'java','day':1},
    len : null,
    len1 : undefined,
    learn :function() {
        console.log('hello,student4!');
    },
    learn1() {
        console.log('learn1')
    } 
};
let a = JSON.stringify(oStudent4,null,2);
console.log(a);


const b = `{
    "student Name": "yangqian",
    "sge": 22,
    "org": [
      "love",
      "smart"
    ],
    "course": {
      "name": "java",
      "day": 1
    },
    "len": null
  }`;
const oStudent1 = JSON.parse(b);
console.log(oStudent1);

for (let p in oStudent1){
      console.log(p);
  }