const commons = {
  //12000 -> 12,000
  withComma(val) {
    if (val == null || val == 0) {
      return val;
    }
    val = Math.ceil(val);
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  //현재 시간 오후 10:32:56 / 09:10:02
  currentTime() {
    const current = new Date();
    let hr = current.getHours().toString();
    let min = current.getMinutes().toString();
    let sec = current.getSeconds().toString();

    if (hr.length < 2) hr = `0${hr}`;
    if (min.length < 2) min = `0${min}`;
    if (sec.length < 2) sec = `0${sec}`;

    if (hr > 12) {
      let newHour = Math.abs(hr - 12).toString();
      if (newHour.length < 2) newHour = `0${newHour}`;

      const add = [newHour, min, sec].join(':');
      return `오후 ${add}`;
    } else {
      const add = [hr, min, sec].join(':');
      return `오전 ${add}`;
    }
  },
};

export default commons;
