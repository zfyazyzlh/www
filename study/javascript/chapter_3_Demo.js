//控制台信息star
console.log("%c%c博客名称%c再度重相逢","line-height:20px;","line-height:20px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px","color:#3fa9f5;line-height:20px;font-size:16px;");

console.log("%c%c网站地址%chttp://www.zdcxf.com","line-height:20px;","line-height:20px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px","color:#ff9900;line-height:20px;font-size:16px;");

console.log("%c%c企鹅号码%c3148028117","line-height:20px;","line-height:20px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px","color:#008000;line-height:20px;font-size:16px;");

console.log("%c%c苟利国家生死以，岂因祸福避趋之。","line-height:20px;","line-height:20px;padding:4px 0px;color:#fff;font-size:16px;background-image:-webkit-gradient(linear,left top,right top,color-stop(0,#ff22ff),color-stop(1,#5500ff));color:transparent;-webkit-background-clip:text;");

//控制台信息end

//第三章 DOM

//3.1 文档 DOM 中的 D
//如果没有document（文档），DOM就无从谈起了 当创建一个网页并把它加载到Web浏览器中时，DOM就再幕后悄然而生

//3.2 对象 DOM 中的 O
//js里的对象分为三种类型
//用户自定义对象user-defined object 由程序员自行创建的对象 本书不讨论
//内建对象native object 内建在JS里的对象 如 Array Math Date 等
//宿主对象host object 由浏览器提供的对象
//window对象对应着浏览器窗口本身 这个对象的属性和方法统称 BOM 浏览器对象模型 
//作者觉得称为 window object model。 窗口对象模型） 
//BOM 提供了windo.open window.blur等方法 这写方法某种程度上要为到处被滥用的各种弹出窗口和下拉菜单负责 23333

//3.3模型 DOM中的 M
//可以代表 模型 model 也可以说是Map 地图

//DOM把一份文档表示为一棵树（这里说的树是数学意义上的树）
// parent(父) child （子） sibling （兄弟）
/**
 * 节点树
 * html
 *  ├──head
 *  │     └──title
 *  │   
 *  ├──body  
 *  │      ├──h1     
 *  │      ├──p
 *  │      └──ul
 *  │            ├──li
 *  │            ├──li
 *  │            └──li
 *  └──────────
 * */

//3.4节点
// 节点node 是网络术语 表示网络中的一个连接点 一个网络是由一些节点构成的集合

//3.4.1元素节点
//DOM的原子是元素节点element node
// <p></p> ..

//3.4.2文本节点
//文本节点 text node
//文本节点总是被包含再元素节点的内部    （<p>balabala</p> ..）

//3.4.3 属性节点
// <p title = "agentle reminder">balabala</p>
//          在DOM中  title = "agentle reminder" 是一个属性节点 attribute node 

//3.4.4 CSS
//

//
//
//
//
//
//