function clock(): void {
    const hours = document.getElementById('hours') as HTMLElement | null;
    const minutes = document.getElementById('minutes') as HTMLElement | null;
    const seconds = document.getElementById('seconds') as HTMLElement | null;
    const period = document.getElementById('period') as HTMLElement | null;

    let h: number = new Date().getHours();
    let m: number = new Date().getMinutes();
    let s: number = new Date().getSeconds();

    const ampm: string = h >= 12 ? "PM" : "AM";

    if (h > 12) h = h - 12;

    const hh: string = (h < 10) ? "0" + h : h.toString();
    const mm: string = (m < 10) ? "0" + m : m.toString();
    const ss: string = (s < 10) ? "0" + s : s.toString();

    if (hours) hours.innerHTML = hh;
    if (minutes) minutes.innerHTML = mm;
    if (seconds) seconds.innerHTML = ss;
    if (period) period.innerHTML = ampm;
}

setInterval(clock, 1000);