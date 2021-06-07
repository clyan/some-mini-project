var list =[
  "1.名词.pdf",
  "2.冠词&代词.pdf",
  "3.形容词.pdf",
  "4.动词.pdf",
  "5.数词&介词&连词&感叹词.pdf",
  "6.副词.pdf",
  "7.句子成分.pdf",
  "8.句子种类&句子结构.pdf",
  "9.时态&语态.pdf",
  "10.主语从句.pdf",
  "11.宾语从句.pdf",
  "12.表语从句&同位语从句.pdf",
  "13.定于从句.pdf",
  "14.状语从句.pdf",
  "15.非谓语.pdf",
  "16.非谓语(二).pdf",
  "17.虚拟语气.pdf",
  "18.倒装&省略&强调.pdf",
  "19.长难句(四级).pdf",
  "20.长难句(六级).pdf",
  "21.长难句(考研).pdf",
  "22.动词不规则变化表.pdf"
]
var currentPdfName = list[0];
var baseUrl ="//cdn.yanwenyao.com/pdf/";
window.onload =function(){
  initPDF(list[0]);
  init();
  initEvent();
}
function router(name) {
  $("#menuBtn").click();
  initPDF(name);
}
function $(dom){
  return document.querySelector(dom);
}
function $All(dom){
  return document.querySelectorAll(dom);
}
function init(){
  var sHtml ='<ul>';
  for (var i =0;i<list.length;i++){
    if(i==0){
      sHtml+='<li class="active"><a href="javascript:router(\''+list[i]+'\')">'+list[i]+'</a></li>';
    }else{
      sHtml+='<li><a href="javascript:router(\''+list[i]+'\')">'+list[i]+'</a></li>';
    }

  }
  sHtml+='</ul>';
  $("#nav").innerHTML = sHtml;
}
var nav = $("#nav");
function initEvent(){
  nav.addEventListener('click',function (e) {
    var target = e.target;
    if(target.tagName == 'A'){
      changeCurrentTar(target);
    }
  })

  $("#menuBtn").addEventListener('click',function(e){
    var  left = nav.style.left
    if(left == '0px' ||left == ''){
      nav.style.left = '-500px';
      nav.style.display = 'none';
    }else{
      nav.style.display = 'block';
      nav.style.left = '0px';
    }
  })
}

function changeCurrentTar(dom) {
  var brothers =dom.parentNode.parentNode.children;
  Array.prototype.forEach.call(brothers,function(item){
    item.classList.remove('active');
  })
  dom.parentNode.classList.add("active");
}


var  pdfView = $("#pdf-canvas");
pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdn.yanwenyao.com/js/pdf.worker.js';
function initPDF(name){
  loadShow()
  pdfjsLib.getDocument({
    url:baseUrl+name,
    rangeChunkSize:65536*16
  }).promise.then(function(pdf){
    render(pdf)
  })
}

function clearPDF(){
  pdfView.innerHTML ='';
}
var loading = $("#loading");

function loadHide(){
  loading.style.display ='none'
}
function loadShow(){
  loading.style.display ='block'
}
function render(pdf){
  clearPDF();
  for(var i=5;i<pdf.numPages;i++){

    pdf.getPage(i).then(function (page){
      let viewport ="";
      let canvas = document.createElement('canvas');
      let canvasContext = canvas.getContext('2d');
      if(os.isAndroid || os.isPhone){
        var view = getViewPort();
        viewport = page.getViewport({scale:0.55});
        canvas.width =  view.width;
        canvas.height = viewport.height;
      }else{
        viewport = page.getViewport({scale:1.5});
        canvas.width =  viewport.width;
        canvas.height = viewport.height;
      }
      pdfView.appendChild(canvas);
      // 将页面呈现到画布上
      let renderContext = {
        canvasContext: canvasContext,
        viewport: viewport
      }
      page.render(renderContext);
      loadHide();
      scrollTop();
    },function (err) {
      // PDF loading error
      console.error(err);
    });
  }
}

// window.addEventListener('resize', getViewPort)
var toTop =  $(".to-top")
pdfView.onscroll = function() {
  //为了保证兼容性，这里取两个值，哪个有值取哪一个
  //scrollTop就是触发滚轮事件时滚轮的高度
  var scrollTop = pdfView.scrollTop;
  if(scrollTop > 100 ){
    toTop.style.display ='block';
  }else{
    toTop.style.display ='none';
  }
}
toTop.addEventListener('click',scrollTop);
function scrollTop(){
  if (pdfView.scrollTop > 0) {
    pdfView.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

function getViewPort(){
  var height= window.innerHeight||document.documentElement.clientHeight;
  var width=window.innerWidth||document.documentElement.clientWidth;
  return {
    height,
    width
  }
}
var os = function() {
  var ua = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian;
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid : isAndroid,
    isPc : isPc
  };
}();
