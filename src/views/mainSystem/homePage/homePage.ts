import { defineComponent } from 'vue'
window.addEventListener('message', function (e) {
  // console.log(e.data)
  // console.log(e.origin)
  // console.log(e.source)
})
export default defineComponent({
  name: 'theContent',
  components: {
  },
  data () {
    return {
      nowDateYmd: '', // 当前日期-年月日
      nowDateWeek: '', // 当前日期-星期
      nowDateTime: '', // 当前日期-上下午
      nowDateHmd: '' // 当前日期-星期时分秒
    }
  },
  methods: {
    currentTime () {
      setInterval(this.formatDate, 500)
    },
    formatDate () {
      const date = new Date()
      const year = date.getFullYear() // 年
      const month = date.getMonth() + 1 // 月
      const day = date.getDate() // 日
      const week = date.getDay() // 星期
      const weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      let hour: number = date.getHours() // 时
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (hour <= 12) {
        this.nowDateTime = '上午'
      } else {
        this.nowDateTime = '下午'
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      hour = (String)(hour < 10 ? '0' + hour : hour) // 如果只有一位，则前面补零
      let minute: number = date.getMinutes() // 分
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      minute = (String)(minute < 10 ? '0' + minute : minute) // 如果只有一位，则前面补零
      let second: number = date.getSeconds() // 秒
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      second = (String)(second < 10 ? '0' + second : second) // 如果只有一位，则前面补零
      this.nowDateYmd = `${year}年${month}月${day}日`
      this.nowDateWeek = ` ${weekArr[week]} `
      this.nowDateHmd = ` ${hour}:${minute}:${second} `
    }
  },
  mounted () {
    this.currentTime()
  },
  // 销毁定时器
  unmounted () {
    if (this.formatDate) { // 注意在vue实例销毁前，清除我们的定时器
      clearInterval(this.formatDate)
    }
  }
})
