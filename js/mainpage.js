// function check() {
//   var arr = ['我不是人类', '我是人类'];
//   var isPeople = Boolean(Math.random());
//   var ans = confirm(arr[Number(isPeople)]);
//   if(isPeople) {
//     if(ans) {
//       return ;
//     }
//     else {
//       window.open('turngexpress.github.io/404','_self');
//     }
//   }
//   else {
//     if(ans) {
//       window.open('turngexpress.github.io/404','_self');
//     }
//     else {
//       return ;
//     }
//   }
// }


// 会在页面加载完成后触发
window.onload = function () {
 
    (function () {
        // 获取滑动控件容器 ,灰色背景
        var dragContainer = document.getElementById("dragContainer");
        // 获取滑块左边部分,绿色背景
        var dragBg = document.getElementById("dragBg");
        // 获取滑动验证容器文本
        var dragText = document.getElementById("dragText");
        //获取滑块
        var dragHandler = document.getElementById("dragHandler");
        // 滑块的最大偏移量  =  滑块验证容器文本长度  -  滑块长度
        var maxHandleOffset = dragContainer.clientWidth -  dragHandler.clientWidth;
 
        // 是否验证成功的标记
        var isVertifySucc = false;
 
        initDrag();
 
        function initDrag(){
            
            dragText.textContent = "拖动滑块验证";
            // 给滑块添加鼠标按下监听
            dragHandler.addEventListener("mousedown", onDragHandlerMouseDown);
        }
        // 选中滑块
        function onDragHandlerMouseDown(){
            // 鼠标移动监听
            document.addEventListener("mousemove", onDragHandlerMouseMove);
            // 鼠标松开监听
            document.addEventListener("mouseup", onDragHandlerMouseUp);
        }
 
        //滑块移动
        function onDragHandlerMouseMove (){
          
            // 滑块移动量
            var left = event.clientX - dragHandler.clientWidth / 2;
            // /
            if(left < 0){
                left = 0;
                // 如果 滑块移动量 > 滑块的最大量  ,则调用 验证成功函数
            }else if(left > maxHandleOffset ){
                left = maxHandleOffset;
            }
            // 滑块移动量
            dragHandler.style.left = left + "px";
            // 绿色背景长度
            dragBg.style.width = dragHandler.style.left;
        }
        // 松开滑块函数
        function onDragHandlerMouseUp () {
     
            document.removeEventListener("mousemove", onDragHandlerMouseMove);
      
            document.removeEventListener("mouseup", onDragHandlerMouseUp);
            var left = event.clientX - dragHandler.clientWidth / 2;
            if(left > maxHandleOffset){
                left = maxHandleOffset;
                verifySucc();
            }else{
                // 初始化滑块移动量
                dragHandler.style.left = 0;
                dragBg.style.width = 0;
            }
        }
        function verifySucc(){
            isVertifySucc = true;
            dragText.textContent = "验证通过";
            dragText.style.color = "white";
            // 验证通过的滑块背景
            dragHandler.setAttribute("class","dragHandlerOkBg");
            //移除鼠标按下监听
            dragHandler.removeEventListener("mousedown", onDragHandlerMouseDown);
            //移除鼠标移动监听
            document.removeEventListener("mousemove", onDragHandlerMouseMove);
            // 移除鼠标松开监听
            document.removeEventListener("mouseup", onDragHandlerMouseUp);
            // 匹配成功进行跳转
            // window.location.href="成功页面.html";
 
        }
    })()
}
