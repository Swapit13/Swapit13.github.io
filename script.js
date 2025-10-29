// Countdown
(function(){
  const target = new Date(window.WEDDING_DATE_ISO);
  const d = document.getElementById('days');
  const h = document.getElementById('hours');
  const m = document.getElementById('minutes');
  const s = document.getElementById('seconds');

  function tick(){
    const now = new Date();
    let diff = target - now;
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
    const mins = Math.floor((diff % (1000*60*60))/(1000*60));
    const secs = Math.floor((diff % (1000*60))/1000);

    d.textContent = String(days).padStart(2,'0');
    h.textContent = String(hours).padStart(2,'0');
    m.textContent = String(mins).padStart(2,'0');
    s.textContent = String(secs).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);

  // Year auto-fill
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
