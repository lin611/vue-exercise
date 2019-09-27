/**
 * 公用方法库 utils
 *
 * **/
const utils = {
  //实时搜索调用
  throttle: (function () {
    let timeoutId = 0;
    return function (method, delay) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(method, delay);
    }
  })(),
  //导出文件下载
  downloadFile(url) {
    url = url + "&token=" + sessionStorage.getItem('token');
    let a = document.createElement("a");
    a.setAttribute("href", encodeURI(url));
    a.setAttribute("target", "_blank");
    a.setAttribute("id", "openwin");
    document.body.appendChild(a);
    a.click();
  },
  //获取当前时间值，设置基准时间
  getTimeRange: function (day, format) {
    let today = new Date();
    let tillNowMill = today.getTime() + 1000 * 60 * 60 * 24 * day;
    today.setTime(tillNowMill);

    let tYear = today.getFullYear();
    let tMonth = today.getMonth();
    let tDate = today.getDate();
    let tDay = today.getDay();
    let tHour = today.getHours();
    let tMinute = today.getMinutes();
    let tSecond = today.getSeconds();

    tMonth = this.timeFormat(tMonth + 1);
    tDate = this.timeFormat(tDate);
    // tDay = this.timeFormat(tDay);
    tHour = this.timeFormat(tHour);
    tMinute = this.timeFormat(tMinute);
    tSecond = this.timeFormat(tSecond);

    switch (format) {
      case "yyyy-MM-dd": //年月日
        return [tYear, tMonth, tDate].join("-");
        break;
      case "yyyy-MM-dd hh:mm:ss" :    //时分秒
        return [tYear, tMonth, tDate].join("-") + " " + [tHour, tMinute, tSecond].join(":");
        break;
      case "yyyy/MM/dd hh:mm:ss":
        return [tYear, tMonth, tDate].join("/") + " " + [tHour, tMinute, tSecond].join(":");
        break;
    }
  },
  //时间格式化
  timeFormat: function (time) {
    if (time.toString().length === 1) {
      return "0" + time;
    }
    return time;
  },

};

export default utils;
