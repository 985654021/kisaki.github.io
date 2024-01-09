document.addEventListener('DOMContentLoaded', function() {
  var scrollTopBtn = document.getElementById('scrollTop');

  // 当页面滚动时显示或隐藏向上箭头图标
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  // 点击向上箭头图标回到页面顶部
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动效果
    });
  });
});