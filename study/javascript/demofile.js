//自我提醒的注释  注释单行
/*这种注释
可以多行注释
*/
//  <!-- 这也是js里的注释__单行

/// <!--在html里必须把后边加上--> 
// html风格的注释 最好不要在js里出现容易混淆!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//控制台信息star
console.log("%c%c博客名称%czdcxf","line-height:28px;","line-height:28px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px","color:#3fa9f5;line-height:28px;font-size:16px;");

console.log("%c%c网站地址%chttp://www.zdcxf.com","line-height:28px;","line-height:28px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px","color:#ff9900;line-height:28px;font-size:16px;");

console.log("%c%c企鹅号码%c3148028117","line-height:28px;","line-height:28px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px","color:#008000;line-height:28px;font-size:16px;");

console.log("%c%c苟利国家生死以，岂因祸福避趋之。","line-height:28px;","line-height:28px;padding:4px 0px;color:#fff;font-size:16px;background-image:-webkit-gradient(linear,left top,right top,color-stop(0,#ff22ff),color-stop(1,#5500ff));color:transparent;-webkit-background-clip:text;");


//控制台信息end
var mood ;
var age ;

/*alert(mood);
alert(age);*/

/*
一条语句声明多个变量
*/
 var mood,arg;

//变量以及赋值
var mood = "happy";
var age =33;

//效率高一点 一石二鸟 变量赋值一起搞
var mood = "happy",age =33;

//变量区分大小写 oo OO oO Oo 不是一个变量

//变量允许出现 空格以及符号 $例外 开头不能为数字
//一般命名方法驼峰式myMood 容易区分内容

//变量的值和类型随时更改
/*var age ="thirty three";
alert(age);
age =33;
alert(age);
*/

//使用"\"来转义 ' " 这两个引号达到输出效果
var height= "about 5'10\" tall";
//alert(height);


var sleeping =true;

var married = true; 

//alert (married);


var married = "true";
//alert (1);
//alert (married);


//2.25 数组array
//字符串、数值和布尔值都是 标量scalar 
//如果某个变量是标量，他在任意时刻就只能有一个值。
//想使用一个变量来储存一组数字就需要使用数组array。

//在JavaScript里 可以用Array 声明数组 
//可以指定数组初始元素个数 也就是数组的长度lenght

var beatles = Array(4);

//也可以不给出元素个数

var beatles = Array();
//向数组添加蒜素的操作成为 填充populating 
//填充数组时不仅需要给出新元素的值还需要给出新元素在数组中存放的位置
//这个位置就是元素的下标 index
//数组里一个元素配有一个下标 必须用方括号括起来
//array[index] =element;
//例；
var beatles = Array();
beatles[0] = "John Array";
beatles[1] = "Paul";
beatles[2] = "George";
beatles[3] = "Ringo";
//简单的数组书写 自动分配下标  0-3 
//var beatles = Array ("John","Paul","George","Ringo");
//var beatles = ["John","Paul","George","Ringo"];
//数组不一定是字符串 也可以把一些布尔值存入一个数组 还可以把一组数字存入数组
var years = [1940,1941,1942,1943];
var lennon = ["John",1940,false];
//数组元素还可以是变量
//把beatles数组的第一个元素赋值为 变量 name的值“John”
var name = "John var"
//beatles[0] = name 
//数组元素的值还可以是另一个数组的元素
//var names = ["Ringo","John","Paul","George"];
//beatles[1]= names[3];

//数组还可以包含其他数组
var lennonStudy = ["John",1940,false];
var beatlesStudy = [];
beatlesStudy[0] = lennonStudy;
/*
>	beatlesStudy[0]
<	["John", 1940, false]
>	beatlesStudy[0]
<	["John", 1940, false]
>	beatlesStudy[0][1]
<	1940
*/

//关联数组
/*
beatles 数组是传统数组的经典例子：
每个元素的下标是一个数字，每增加一个元素，这个数字就依次增加1.
第一个元素的下标是0 ，第二个元素的下标是1，以此类推
如果在填充数组时只给出了元素的值，
这个数组的就将是一个传统数组，他的各个元素的下标将被自动创建和刷新
也可以给出下标来改变这种默认的行为
给出下标时，不必局限于使用整数数字，也可以使用字符串
*/
var lennonDemo =Array();
lennonDemo['name']= "John";
lennonDemo['year']= 1940;
lennonDemo['living']= false;

//lennonDemo['name']
//"John"
//lennonDemo['year']
//1940
//lennonDemo['living']
//false

/*这样的数组叫关联数组，由于使用字符串代替数字值，因而代码更具有可读性。
但是这并不是一种好习惯
本质上 在创建关联数组时候，你创建的是array对象的属性
JavaScript里面 所有的变量实际上都是某种类型的对象
布尔值就是一个Boolean类型的对象
一个数组就是一个array类型的对象
你实际上是给LennonDOM数组添加了 name year living三个属性
理想情况下 不应该修改array对象的属性 应该使用通用的 对象 Object
*/
//2.2.6 
var lennon1 = Object();
lennon1.name = "John";
lennon1.year = 1940 ;
lennon1.living = false;


var lennon2 = {name:'John',year:1940,living:false};
//>>lennon2.name
//<"John"

var beatles =Array();
beatles[0] = lennon2;
/*
>>beatles[0]
<Object { name: "John", year: 1940, living: false }

>>beatles[0].name
<"John"
*/

var beatles = {};
beatles.vocalist = lennon2;

/*
>>beatles.vocalist
<Object { name: "John", year: 1940, living: false }

>>beatles.vocalist.name
<"John"
*/ 

//2.3
/* 

>>1+4
<5

>>1+4*5
<21

>>1+(4*5)
<21
>>(1+4)*5
<25

*/

var total = (1+4)*5;

//>>total
//<25

var temp_fahrenheit =95;
var temp_celsius = (temp_fahrenheit - 32)/1.8;

/* 
>>temp_fahrenheit
<95

>>temp_celsius
<35

>>95-32
<63

>>63/1.8
<35
*/
var year2 = 1111
year2 =  year2 + 1 ;

//>>year2
//<1112

/*
>>year2
<1112

>>year2
<1112

>>year2++
<1112

>>year2++
<1113

>>year2
<1114

>>year2
<1114

>>year2++
<1114

>>year2++
<1115

>>year2
<1116

>>year2++
<1116
*/

var message = "I am feeling" +"happy";
var messageChina = "我失"+"去了你";
/*
>>message
<"I am feelinghappy"
>>messageChina
<"我失去了你"
*/

var mood1 = "happy";
var message1 = "I am feeling" + mood1;
/*
>>message1
<"I am feelinghappy"
*/
var year22 = 2005;
var message2 = "The year is " + year22;

/**
 * >>message2
 * <"The year is 2005"
 * 
 * 
 * 
 *  >>alert("10"+20);
 *  < 1020
 * 
 * >>alert(10 +20);
 * <30
 */


var year222 = 2010;
var message22 = "The year is "
message22 += year222;

//>>message22
//<"The year is 2010"


//2.4条件语句

/*
if (condition) {
    statement;
}
*/
if (1>2) {
    alert("The world has gone mad!");
}
//如果只包含一条语句可以写成

if (1>2) alert("the world has gone mad!");


if (1>2) {
    alert("The world has gone mad!");
}else{
    document.write(" 由js 写入 条件语句 ==All is well with the world");
}

//条件判定 == > < >=
var my_mood ="happy";
var you_mood = "sad";
if (my_mood == you_mood) {
    alert("We both feel the same");
}

if (my_mood != you_mood) {
    document.write("</br>对比 不等于 if (my_mood != you_mood)");
}

var a = false;
var b = "";
if (a == b ) {
    document.write("</br>a equals b == 并不是真正的等于 === 会严格的比较 不仅比较值还比较变量的类型 !=同理用!==");
}

//2.4.2逻辑操作符
document.write("</br>逻辑操作字符 && 逻辑与  ||逻辑或 操作两个布尔值 逻辑 非 !只能操作单个逻辑</br>");
num = 7
if (!(num > 10 || num < 5)) {
    document.write("</br>if (!(num > 10 || num < 5))");
}


//2.5 循环

/**
*   while (condition) {
*     
*   }
 */
var count = 1 ;
//这里为了不弹窗 把 while里的比较值变成了1
while (count <1) {
    alert (count);
    count++;
}
//document.write(count)变量可以带出循环 
/*

do {
    statements
} while (condition);

*/
do {
 //alert(count);
    count++;
} while (count<1);

//2.5.2 for 循环
/**
for (var count = 1; count < 11 ; count++){
    alert(count);

}



for (initial condition; test condition; alter condition) {
    statements;
    
}
 */


var beatles25 = Array("Ringo","John","Paul","George");


for (var count = 0; count < beatles25.length; count++) {
 //alert太暴力 改成document.write
    document.write("</br>"+(beatles25[count]));
    
}

//2.6 函数

//如果需要多次使用 同一段 代码 把他封装成一个函数 function 
//、、作为一种良好的变成习惯， 应该先对函数做出定义再调用他们
function shout() {
    var beatles26 = Array("Ringo","John","Paul","George");
    for (var count = 0; count < beatles26.length; count++) {
    
        alert(beatles26[count]);
    }
}
//每当要反复做一件事 的时候 可以利用函数来避免重复键入大量相同内容
//函数的真正内容你可以吧不同的数据传递给他们，而他们将使用这些数据完成预定操作

function multiply(num1,num2) {
    var total = num1 * num2;
    alert(total);
}
//return 返回一个数值 字符串数组或者布尔值 
function multiply2(num3,num4) {
    var total1 = num3 * num4;
    return(total1);
}


function convertToCelsius(temp) {
    var result = temp - 32;
    result = result/1.8;
    return result;
}
//函数的真正价值体现在，我们还可以把他当做数据类型来使用
//这就意味着可以把一个函数的调用结果赋给一个变量

var temp_fahrenheit = 95;
var temp_celsius = convertToCelsius(temp_fahrenheit);
//alert(temp_celsius);

//驼峰法命名  第二个单词开始 每个单词首写字母大写

//变量作用域
//全局变量          脚本的任何位置被引用

//局部变量          只存在于声明他的那个函数内部

//再函数内部 var 可以避免全局变量的影响

//2.7变量
/**
 * 对象object{
 * 属性property 隶属于某个特定对象的变量
 * 方法method只有某个特定对象才能调用的函数
 * }
 */
//“点”语法调用 
// Object.Property
// Object.method()


//var jeremy = new Person;
//创建出Person对象的一个新实例Jeremy。 用Person对象的属性来检索jeremy的信息
//jeremy.age
//jeremy.mood

//2.7.1 内建对象
 var beatles = new Array();
//了解数组有多少元素时候用length
 beatles.length;
//其他的还有 Math Date
//处理数值和日期值
 var num27 = 7.561
 var num27 = Math.round(num27);
 

//Date可以用来储存和检索与特定日期和时间有关的信息
//再创建Date对象的新实例时，javscript解释器将自动的使用当前日期和时间对比它进行初始化
 var current_date = new Date();

//Date对象提供了 getDay() getHours() getMonth() 等一系列方法供人们检索特定日期有关的各种信息
 var today = current_date.getDay();
//上面的例子是告诉我们今天星期几

//编写脚本时 内建对象可以快速帮助我们简单的完成许多任务

//2.2.2 宿主对象

// 除了内建对象 脚本里使用一些已经预先定义好的对象 这些对象是由它所运行的环境提供的具体到web应用就是浏览器
//Form Image Element 等都是宿主对象 document 等书中 以后介绍

//2.8 小结
//第二章完 2020.2.26 星期三 11:56

