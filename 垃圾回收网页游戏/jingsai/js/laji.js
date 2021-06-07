
//初始化变量
var fs=0; //分数
var startStatus = false;
var a;
var lj=""; //垃圾图片路径
//垃圾图片数组
var arr =["images/lj/1_1.jpg","images/lj/1_2.jpg","images/lj/1_2.jpg","images/lj/1_3.jpg","images/lj/1_4.jpg","images/lj/1_5.jpg","images/lj/1_6.jpg","images/lj/2_1.jpg","images/lj/2_2.jpg","images/lj/2_3.jpg","images/lj/2_4.jpg","images/lj/2_5.jpg","images/lj/2_6.jpg","images/lj/2_7.jpg","images/lj/3_1.jpg","images/lj/3_2.jpg","images/lj/3_3.jpg","images/lj/3_4.jpg","images/lj/3_5.jpg","images/lj/3_6.jpg","images/lj/4_1.jpg","images/lj/4_2.jpg","images/lj/4_3.jpg","images/lj/4_4.jpg","images/lj/4_5.jpg","images/lj/4_6.jpg","images/lj/4_7.jpg"];
var nums = []; //存放已选索引值
var timer; //计时器
var imgCJTimer; //计时器
var n=0;//垃圾总数
var m=0;//已显示垃圾数

//==页面加载事件  -- 显示初始化分数和垃圾个数
window.onload = function(){
    document.getElementById("sfs").innerText="0";
    document.getElementById("countFs").innerText=arr.length *10;
    document.getElementById("sljgs").innerText=arr.length;
}
function begin(){
    //改变开始游戏按钮隐藏显示。
    toggleStart();
    setTimeout(function(){
        randomLJ();
    },2000)
}
//出现随机垃圾
function randomLJ(){
    // 延迟隐藏yes，no;
    if(imgCJTimer){
        window.clearTimeout(imgCJTimer)
        imgCJTimer = null;
    }
    imgCJTimer= window.setTimeout(function(){
        document.getElementById("imgCJ").style.display="none";
    },2000);
    // 启动计时器
    start();
}
//计时器
function start(){
    if(timer){
        window.clearTimeout(timer);
        timer = null;
    }
    n = arr.length; //获取垃圾个数
    console.log("n-------"+n);
    var img = document.getElementById("imgLJ");	//获取垃圾图片元素
    var i = Math.floor(Math.random()*n);//生成一个随机数，垃圾索引
    while(nums.includes(i)){  //如果nums里有该垃圾索引，就重新获取一个索引
        i = Math.floor(Math.random()*n);
    }
    m+=1; //已经出现垃圾的个数
    nums.push(i); //将索引添加到数组中
    img.src=arr[i]; //显示随机垃圾
    lj=img.src;  //获取当前显示垃圾的路径
    a = lj.lastIndexOf("/");
    a = lj.substr(a+1,1); //得到路径中表示垃圾分类的数字
    var ss = n-m;

    if(ss<=0){  //如果出现垃圾的个数与垃圾总数相同
        showModal();
        return;
    }
    console.log("bbb")
    document.getElementById("sljgs").innerText=arr.length;
    //控制计时器，没两秒钟显示1个
    timer = window.setTimeout(function(){
        start();
        console.log(nums);
    },2000);
}


function laji(type){
    if(!startStatus){
        return;
    }
    window.clearTimeout(timer)
    timer = null;
    document.getElementById("imgCJ").style.display="block";
    if(a == type){
        fs+=10;
        document.getElementById("imgCJ").src="images/yesORno/yes.jpg";
    }
    else{
        fs-=10;
        document.getElementById("imgCJ").src="images/yesORno/no.jpg";
    }
    document.getElementById("sfs").innerText=fs;
    randomLJ();
}

function toggleStart() {
    if(!startStatus){
        document.getElementById("start").style.visibility = 'hidden';
        startStatus = true;
    }else{
        document.getElementById("start").style.visibility='visible';
        startStatus = false;
    }
}
function reset(){
    document.getElementById("sfs").innerText="0";
    document.getElementById("sljgs").innerText=arr.length;
    nums =[];
    timer && window.clearTimeout(timer)
    timer=null;
    m=0,n=0,fs=0,a=null;
}

function hideModal(){
   var  modal =document.getElementById("modal-1")
    modal.classList.remove("md-show")
    modal.classList.add("md-overlay");
    reset();
}
function showModal(){
    toggleStart()
    var success = document.getElementById("success");
    success.innerText = fs;
    var  modal =document.getElementById("modal-1")
    modal.classList.remove("md-overlay")
    modal.classList.add("md-show")

}