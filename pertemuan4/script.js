const judul = document.getElementById('judul');
judul.innerHTML = "<b>Hello Kidar</b>";
judul.style.color = "red";

const li = document.getElementsByTagName('li');
for (let index = 0; index < li.length; index++) {
    const element = li[index];
    element.style.color     = 'red'
    element.style.listStyle = 'none'
};
let colors = ['red', 'green', 'blue']
const p = document.getElementsByClassName('p');
for (let index = 0; index < p.length; index++) {
    p[index].innerHTML = `P${index+1}`;
    p[index].style.color     = colors[index]; 
};

const a = document.querySelector('#a a');
a.setAttribute('href', 'https://facebook.com')
a.textContent = "Facebook";

const pbaru = document.createElement('p');
const txtPBaru = pbaru.appendChild(document.createTextNode('P Baru'));

pbaru.appendChild(txtPBaru)

