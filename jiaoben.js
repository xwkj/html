console.log("我是脚本，我可以进行浏览器环境中的运算，和页面上元素的操控，交互")

let im=document.querySelector("img")
im.onclick=function(){
    im.style.border="5px solid #f00"
}