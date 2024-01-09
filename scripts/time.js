// 获取当前时间并更新显示
function showTime() {
  var date = new Date();
  var hours = date.getHours().toString().padStart(2, '0');
  var minutes = date.getMinutes().toString().padStart(2, '0');
  var seconds = date.getSeconds().toString().padStart(2, '0');
  var time = hours + ':' + minutes + ':' + seconds;

  var clock = document.getElementById('clock');
  clock.innerText = time;
}

// 等待页面加载完成后开始显示时间特效
window.addEventListener('DOMContentLoaded', function() {
  // 每秒钟更新一次时间
  setInterval(showTime, 1000);
});