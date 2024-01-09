var snows = [] // 雪花对象数组
var count = 200 // 雪花的个数

function Snow(w, h, context) {
  this.w = w
  this.h = h
  this.context = context
}

function init() {
  let canvas = document.createElement('canvas')
  canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;')
  canvas.setAttribute('id', 'canvas_snow')
  document.getElementsByTagName('body')[0].appendChild(canvas)
  
  var context = canvas.getContext('2d') // 2d 即指二维平面
  var w = window.innerWidth
  var h = window.innerHeight
  canvas.width = w // 全局分布
  canvas.height = h
  
  let snow = new Snow(w, h, context)

  for (var i = 0; i < count; i++) {
    snows.push({
      x: Math.random() * w, // Math.random()用于生成0～1的随机数
      y: Math.random() * h,
      r: Math.random() * 5,
    })
  }

  // 每毫秒刷新一次, 控制雪花飘落的速度
  snow.draw()
  setInterval(() => {
    snow.draw()
  }, 1)
}

Snow.prototype.draw = function() {
  this.context.clearRect(0, 0, this.w, this.h)
  
  this.context.beginPath()
  for (var i = 0; i < count; i++) {
    var snow = snows[i]
    
    this.context.fillStyle = "rgb(255,255,255)" // 设置雪花的样式
    this.context.shadowBlur = 10
    this.context.shadowColor = "rgb(255,255,255)"
    
    this.context.moveTo(snow.x, snow.y) // moveTo 移动到指定的坐标
    
    // 使用 canvas arc() 创建一个圆形
    // x, y, r：圆的中心的 x 坐标和 y 坐标，r 为半径
    // 0, Math.PI * 2 起始弧度和结束弧度
    this.context.arc(snow.x, snow.y, snow.r, 0, Math.PI * 2)
  }

  // 画布填充
  this.context.fill()
  
  this.move()
}

Snow.prototype.move = function() {
  for (var i = 0; i < count; i++) {
    var snow = snows[i]
    snow.y += (7 - snow.r) / 10 // 从上往下飘落
    snow.x += ((5 - snow.r) / 10) // 从左到右飘落
    
    if (snow.y > this.h) {
      snows[i] = {
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        r: Math.random() * 5,
      }
    }
  }
}

// 初始化
init()