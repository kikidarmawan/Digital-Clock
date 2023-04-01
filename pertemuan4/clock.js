const clock = document.getElementById('time');
setInterval(() => {
    const date = new Date();
    let jam = date.getHours();
    let menit = date.getMinutes();
    let detik = date.getSeconds();
    clock.textContent = `${jam}:${menit}:${detik}`;
}, 1000);