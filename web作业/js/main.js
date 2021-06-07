window.onload = (function () {
  console.log(123)
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
  })
})
function throttle(fn, delay) {
  let preTime = new Date();
  return function () {
    let context = this,
      args = arguments,
      nowDate = new Date();
    if (nowDate - preTime >= delay) {
      preTime = new Date();
      fn.apply(context, args)
    }
  }
}

function getScrollTop(){
  var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if(document.body){
    bodyScrollTop = document.body.scrollTop;
  }
  if(document.documentElement){
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}
window.addEventListener('scroll',throttle((e)=>{
  console.log(getScrollTop())
  if(getScrollTop() >= 1901){
    const leftBar =  document.querySelector(".leftbar-inner");
    leftBar.style.position = "relative";
    leftBar.style.transform = "translate3d(0px, 1990px, 0px)";
  } else {
    const leftBar =  document.querySelector(".leftbar-inner");
    leftBar.style.position = "fixed";
    leftBar.style.transform = "translate3d(0px, 0px, 0px)";
  }
}, 200))
