/*
 * @Description: 文件说明
 * @FilePath: \vue-base\src\utils\index.js
 */
export function getDate(type = null, number = 0) {
  let nowdate = new Date();
  let y, m, d, retrundate, weekdate;
  switch (type) {
    case "day": //取number天前、后的时间
      nowdate.setTime(nowdate.getTime() + 24 * 3600 * 1000 * number);
      y = nowdate.getFullYear();
      m = nowdate.getMonth() + 1;
      d = nowdate.getDate();
      retrundate = y + "/" + m + "/" + d;
      break;
    case "week": //取number周前、后的时间
      weekdate = new Date(nowdate + 7 * 24 * 3600 * 1000 * number);
      y = weekdate.getFullYear();
      m = weekdate.getMonth() + 1;
      d = weekdate.getDate();
      retrundate = y + "/" + m + "/" + d;
      break;
    case "month": //取number月前、后的时间
      nowdate.setMonth(nowdate.getMonth() + number);
      y = nowdate.getFullYear();
      m = nowdate.getMonth() + 1;
      d = nowdate.getDate();
      retrundate = y + "/" + m + "/" + d;
      break;
    case "year": //取number年前、后的时间
      nowdate.setFullYear(nowdate.getFullYear() + number);
      y = nowdate.getFullYear();
      m = nowdate.getMonth() + 1;
      d = nowdate.getDate();
      retrundate = y + "/" + m + "/" + d;
      break;
    default:
      //取当前时间
      y = nowdate.getFullYear();
      m = nowdate.getMonth() + 1;
      d = nowdate.getDate();
      retrundate = y + "/" + m + "/" + d;
  }
  return retrundate;
}

export function showtimeFormat(time) {
  let date = new Date(time);
  let curDate = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let curYear = curDate.getFullYear();
  let curHour = curDate.getHours();
  let timeStr;
  console.log("year: ", year);
  console.log("curYear: ", curYear);
  if (date < curDate) {
    timeStr = "已过期";
  } else if (year > curYear) {
    timeStr = year + "年" + month + "月" + day + "日 " + hour + ":" + minute;
  } else {
    let pastTime = date - curDate;
    console.log("pastTime: ", pastTime);
    let pastH = pastTime / 3600000;
    console.log("pastH: ", pastH);
    if (pastH > curHour) {
      timeStr = month + "月" + day + "日 " + hour + ":" + minute;
    } else if (pastH >= 1) {
      timeStr = "今天 " + hour + ":" + minute + "分";
    } else {
      let pastM = curDate.getMinutes() - minute;
      if (pastM > 1) {
        timeStr = pastM + "分钟前";
      } else {
        timeStr = "刚刚";
      }
    }
  }
  return timeStr;
}
