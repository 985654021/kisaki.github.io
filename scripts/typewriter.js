var text = "我们的情人，不过是随便借个名字，用幻想吹出来的肥皂泡。把信拿去吧，你可以使假戏成真！";
var index = 0;
var output = document.querySelector('.top p');

// 清空原来的文字内容
output.textContent = "";

// 设置定时器，每隔一定时间显示一个字
var timer = setInterval(function() {
  output.textContent += text[index];
  index++;
  if (index === text.length) {
    clearInterval(timer);
  }
}, 100); // 每隔100毫秒显示一个字