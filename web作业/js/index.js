let app = new Vue({
  el: "#app",
  data() {
    return {
      carouse:{
        timer: null,
        currentId: 1,
        carouselList:[
          {
            id:1,
            url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1477419899,3551196339&fm=26&gp=0.jpg"
          },
          {
            id:2,
            url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2529678470,1057577684&fm=26&gp=0.jpg"
          },
          {
            id:3,
            url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1145670716,4249636328&fm=26&gp=0.jpg"
          },
        ]
      },
      nav:{
        navList:[
          {
            text:'nav1',
            id:1,
            child:[
              {
                id: 1-1,
                text:'nav1-child'
              },
              {
                id: 1-2,
                text:'nav1-child'
              }
            ]
          },
          {
            text:'nav2',
            id: 2,
            child:[
              {
                id: 2-1,
                text:'nav2-child'
              },
              {
                id: 2-2,
                text:'nav2-child'
              }
            ]
          },
          {
            text:'nav3',
            id: 3,
            child:[
              {
                id: 3-1,
                text:'nav3-child'
              },
              {
                id: 3-2,
                text:'nav3-child'
              },
              {
                id: 3-3,
                text:'nav3-child'
              }
            ]
          },
          {
            text:'nav4',
            id: 4,
            child:[
              {
                text:'nav1-child'
              }
            ]
          }
        ]
      }
    }
  },
  methods:{
    carouselChange(id) {
      this.carouse.currentId = id;
      this.clearTimer();
      this.changeImg (id);
      this.startTimer();
    },
    changeImg (id) {
      const width = this.$refs.carouseImg[0].offsetWidth;
      this.$refs.carouselImgs.style.marginLeft = -(Number(id)-1) * width + 'px';
    },
    clearTimer() {
      clearInterval(this.timer);
      this.carouse.timer = null;
    },
    startTimer() {
      this.carouse.timer = setInterval(()=> {
        if (this.carouse.currentId === this.carouse.carouselList.length) {
          this.carouse.currentId = 1;
        } else {
          this.carouse.currentId += 1;
        }
        this.changeImg (this.carouse.currentId);
      }, 5000)
    }
  },
  computed:{
    getIds() {
        return this.carouse.carouselList.map((v) => {
          return v.id;
        })
    }
  },
  mounted() {
    this.startTimer();
  },
  destroyed() {
    this.clearTimer();
  }
});
