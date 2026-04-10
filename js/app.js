const timerEl = document.getElementById("timer");
let time = 120;
const interval = setInterval(( () => {
    const t = Math.floor(time / 60)
      , e = time % 60;
    timerEl.textContent = String(t).padStart(2, "0") + ":" + String(e).padStart(2, "0"),
    0 !== time ? time-- : clearInterval(interval)
}
), 1e3);