(function(global,cb){
  if(!global.echarts) throw Error("echarts不存在")
  if(!global.$) throw Error("Jquery 不存在")
  if(!global.layer) throw Error("Layui layer不存在")
  if(!global.laydate) throw Error("Layui laydate")
  cb(global)
})(window,function(global){
    console.log(global)
  //依赖资源
    const $echarts =global.echarts
    const $ =global.$
    const $layer =global.layer
    const $laydate =global.laydate

  //内部变量
    let xAxis =[]
    let yAxis =[]
    let series =[]
  //内部方法
let methods={
      //echarts
    _yAxis(data) {
      let _yAxis = [];
      data.satelliteTasks.forEach((item) => {
        _yAxis.push(item.satelliteName)
      })
      return _yAxis.reverse()
    },
//  不需要,使用 echarts 的type="time"为x轴
/*    _xAxis(data){
      let beginTime =new Date(data.beginTime.replace(new RegExp("-","gm"),"/")).getTime()
      let endTime = new Date(data.endTime.replace(new RegExp("-","gm"),"/")).getTime()
      const dayMilliSeconds  = 1000*60*60*24;
      const _xAxis =[]
      for (beginTime; beginTime <= endTime; beginTime += dayMilliSeconds) {
        _xAxis.push(this.formatDate(beginTime))
      }
      return _xAxis
    },*/
    _series(data) {
      let seriesData = []
      const scatterObject = {
        name: '',
        type: 'scatter',
        itemStyle: {
          normal: {
            opacity: 0.8
          }
        },
        large:true,
        largeThreshold:200,
        animationThreshold:200,
        symbolSize(val) {
          return val[2];
        },
        data: []
      }
      let satelliteTasks = data.satelliteTasks
      for (let i = 0; i < satelliteTasks.length; i++) {
        let arr = []
        satelliteTasks[i].task.forEach((item) => {
          /!*arr2前两个参数为对应的X,Y轴, 第三个参数为图形大小，第四个为任务数据*!/
          let arr2 = [item.beginTime, satelliteTasks[i].satelliteName,
            this._symbolSize(item.beginTime, item.endTime), item]
          arr.unshift(arr2)
        })
        let ob = Object.assign({}, scatterObject)
        ob.name = satelliteTasks[i].satelliteName
        ob.data = arr
        seriesData.push(ob)
      }
      return seriesData
    },
    _assembleData(){

    },
    updateGanttData(params){

    },
    _symbolSize(beginTime, endTime) {
      beginTime = new Date(beginTime).getTime()
      endTime = new Date(endTime).getTime()
      /*图形大小策略，根据时间计算，
      * 最大支持天级任务
      * 每十秒 增加1px，每5分钟加2px 每10分钟加
      */
      /**/
      /*  console.log(endTime - beginTime)*/
      const a = Math.floor((Math.random(1)+0.1)*40)
      return a
    },
    _options(params,ctx) {
      //  不需要，使用 echarts 的type="time"为x轴
     /* xAxis = methods._xAxis(params)*/
      yAxis = methods._yAxis(params)
      series = methods._series(params)
      console.log(this)
      return {
          animation: true,
          legend: {
            data: [].concat(yAxis).reverse()
          },
          toolbox: {
            show: true,
            left:'85%',
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {show : false},
              magicType: {show : false},
              restore: {},
              saveAsImage: {},
              myTimeType:{
                show: true,
                title: '切换显示',
                icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                onclick: function (){

                }
              }
            },
          },
          tooltip: {
            show: true,
            formatter: function (params) {
              /!*悬浮显示的任务名称*!/
/*              console.log(params)*/
              const data =params.data[3]
              let s ='<p>'+params.seriesName+'</p>'
              const keys=Object.keys(data);
              for(key in data){
              /*  s+='<p> <span style="color:red;">'+key+'</span>: '+data[key]+'</p>'*/
                s+='<p>'+key+': '+data[key]+'</p>'
              }
              return s
            }
          },
          xAxis: {
            type: 'time',
            position: 'top',
          },
          yAxis: {
            type: 'category',
            data: yAxis,
          },
          dataZoom: [
            {
              type: 'slider',
              show: true,
              xAxisIndex: [0],
              start: 0,
              end: 12
            },
            {
              type: 'slider',
              show: true,
              yAxisIndex: [0],
              left: '92%',
            },
            {
              type: 'inside',
              xAxisIndex: [0],
            },
            {
              type: 'inside',
              yAxisIndex: [0],
            }
          ],
          series: series
        }
      },
    //Util
    getDurationTime(beginTime, endTime) {
      /!*两个时间戳计算相隔多少天多少小时多少分多少秒*!/
      beginTime = new Date(beginTime).getTime()
      endTime = new Date(endTime).getTime()
      let _timeStamp = (endTime - beginTime) / 1000;
      let _durationTime = ''
      const year = Math.floor(_timeStamp / 86400 / 365);
      if (year > 0) {
        _durationTime += year + ' 年 '
      }
      _timeStamp = _timeStamp % (86400 * 365);
      const month = Math.floor(_timeStamp / 86400 / 30);
      if (month > 0) {
        _durationTime += month + ' 月 '
      }
      _timeStamp = _timeStamp % (86400 * 30);
      const day = Math.floor(_timeStamp / 86400);
      if (day > 0) {
        _durationTime += day + ' 日 '
      }
      _timeStamp = _timeStamp % 86400;
      const hour = Math.floor(_timeStamp / 3600);
      if (hour > 0) {
        _durationTime += hour + ' 时 '
      }
      _timeStamp = _timeStamp % 3600;
      const minute = Math.floor(_timeStamp / 60);
      if (minute > 0) {
        _durationTime += minute + ' 分 '
      }
      _timeStamp = _timeStamp % 60;
      const second = _timeStamp;
      if (second > 0) {
        _durationTime += second + ' 秒 '
      }
      /!*  console.log(year+','+month+','+day+','+hour+','+minute+','+second);*!/
      return _durationTime
    },
    formatDate(date){
      date =new Date(date)
      let retDate = date.getFullYear() + "-";  // 获取年份。
      retDate += date.getMonth() + 1 + "-";    // 获取月份。
      retDate += date.getDate();               // 获取日。
      retDate += date.getHours()>=10?' '+ date.getHours() :' 0'+ date.getHours()     // 获取时。
      retDate += date.getMinutes()>=10?':'+date.getMinutes() :':0'+ date.getMinutes()       // 获取分。
      retDate +=date.getSeconds() >=10?':'+ date.getSeconds() :':0'+ date.getSeconds()      // 获取秒。
      return retDate;
    },
    /**/
    showTaskDetail(params) {
      const {beginTime,endTime} = params
      let durationTime = this.getDurationTime(beginTime, endTime)
      const dialog=$layer.open({
        type: 1,
        area: ['450px', '300px'], //宽高
        title:"星信息详情",
        shadeClose: true,
        content: `<form class="dialogForm" style="width: 410px; margin: 0 auto;padding: 20px;">
                    <div class="form-item" style="padding: 5px;">
                        <label for="beginTime" style="">开始时间:</label>
                        <input type="text" name="dialogBeginTime" id="beginTime" value="${beginTime}"
                           style="padding: 10px;border: 0;border: 1px grey solid;border-radius: 3px;width: 76%">
                    </div>
                    <div class="form-item" style="padding: 5px;">
                        <label for="beginTime" style="">结束时间:</label>
                        <input type="text" name="dialogEndTime" id="endTime"  value="${endTime}"
                        style="padding: 10px;border: 0;border: 1px grey solid;border-radius: 3px;width: 76%">
                    </div>
                     <div class="form-item" style="padding: 5px;">
                        <label for="durationTime" style="">持续时间:</label>
                        <input type="text" name="dialogDurationTime" value="${durationTime}"
                        style="padding: 10px;border: 0;border: 1px grey solid;border-radius: 3px;width: 76%">
                    </div>
                    <div class="form-item" style="padding: 5px;">
                        <input type="button" id="dialogSubmit" name="dialogSubmit" value="确定"
                            style="background: none;border: 0;border-radius: 3px;padding: 10px;margin:0 5px;color:white;background: #009688;cursor: pointer;">
                        <input type="button" id="dialogCancel" name="dialogCancel" value="取消"
                        style="background: none;border: 0;border-radius: 3px;padding: 10px;margin:0 5px;color:white;background: #FFB800;cursor: pointer;">
                    </div>
                  </form>
                  `,
        success:function(){
          laydate.render({
            elem: '#beginTime', //指定元素
            type: 'datetime'
          });
          laydate.render({
            elem: '#endTime', //指定元素
            type: 'datetime'
          });
          $("#dialogCancel").click(function(){
              $layer.close(dialog)
          })
          $("#dialogSubmit").click(function(){
            methods.updateTaskDetail()
          })
        }
      });
    },
    updateTaskDetail() {
      console.log("Aa")
    },
  }

class Gantt {
  constructor(params){
      this.$ctx =this
      //图形渲染的dom（要求id）
      this.$el=params.el
      //图形高度
      this.$height =params.height
      //图形宽度
      this.$width =params.width
      //图形的数据
      this.$data = params.data || {}
      //请求地址
      this.$url = params.url
      // 请求参数
      this.$queryData =params.queryData

      this.$myChart = null
      this.init(params)
  }
  init(params) {
    if(this.$width){
      $("#"+this.$el).css({'width':this.$width})
    }
    if(this.$height){
      $("#"+this.$el).css({'height':this.$height})
    }
    this.$myChart = $echarts.init(document.getElementById(this.$el));
    this.$myChart.showLoading()
    this.setOptions()
  }
  setOptions(option){
    const that =this
    /*从后台获取数据*/
    if(option && typeof option == 'object'){
      that.$myChart.setOption(methods._options(option),true)
    }else if(that.$url){
      $.ajax({
        url:that.$url,
        type: 'post',
        data:that.$queryData,
        success: function (res) {
          that.$data = res.data
          that.$myChart.setOption(methods._options(that.$data,that.$ctx),true)
          that.$myChart.hideLoading()
          that.addListener(that.$data)
        },
        error:function(){
          that.$myChart.showLoading(  {
            text: '数据获取失败',
            color: '#ffffff',
            textColor: '#8a8e91',
            maskColor: 'rgba(255, 255, 255, 0.8)',
          })
        }
      })
    }else if(that.$data){
      that.$myChart.setOption(methods._options(that.$data),true)
      that.$myChart.hideLoading()
      that.addListener(that.$data)
    }
  }
  updateData(){

  }
  addListener(data){
    global.addEventListener("resize", () => {
      this.$myChart.resize();
    });
    this.$myChart.on('dblclick',(params)=>{
   /*   console.log(params)*/
      methods.showTaskDetail(params.data[3])
    })
  }
}
  global.Gantt = Gantt
})


