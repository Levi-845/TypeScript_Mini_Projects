function clock() {
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var period = document.getElementById('period');
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var ampm = h >= 12 ? "PM" : "AM";
    if (h > 12)
        h = h - 12;
    var hh = (h < 10) ? "0" + h : h.toString();
    var mm = (m < 10) ? "0" + m : m.toString();
    var ss = (s < 10) ? "0" + s : s.toString();
    if (hours)
        hours.innerHTML = hh;
    if (minutes)
        minutes.innerHTML = mm;
    if (seconds)
        seconds.innerHTML = ss;
    if (period)
        period.innerHTML = ampm;
}
setInterval(clock, 1000);
