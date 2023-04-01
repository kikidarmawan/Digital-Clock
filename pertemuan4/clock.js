const clock = document.getElementById('time');
setInterval(() => {
    const date = new Date();
    let jam = date.getHours();
    let menit = date.getMinutes();
    let detik = date.getSeconds();
    if (detik < 10) {
        detik = '0' + detik;
    }
    clock.textContent = `${jam}:${menit}:${detik}`;
}, 1000);

const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click', function () {
    wrapper.classList.toggle('.light-mode')
})