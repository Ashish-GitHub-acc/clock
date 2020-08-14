let can = document.getElementById("can");
let c = can.getContext("2d");
can.height = window.innerHeight;
can.width = window.innerHeight;
let w = can.width / 2;
let h = can.height / 2;

let i = 0;
let sq = document.getElementsByTagName("div");

for (let sqr of sq) {
    sqr.style.top = `${w-140}px`;
    sqr.style.left = `${h-140}px`;
    sqr.style.transform = `rotate(${i*30}deg)`;
    i++;
}

c.fillStyle = "white";
c.lineCap = "round";
//let sc=d.getSeconds();
let ph = document.getElementsByTagName("p")[0];

function fn() {
    c.clearRect(0, 0, can.width, can.height);
    let d = new Date();
    let dayy = d.toDateString();
    let sc = d.getSeconds();
    let mn = d.getMinutes();
    let hr = d.getHours() % 12;
    let sca = (sc * 6 * Math.PI) / 180;

    c.lineWidth = 5;
    c.beginPath();
    c.strokeStyle = "#6DCFE0";
    c.arc(w, h, 143, 0, 2 * Math.PI);
    c.stroke();

    c.beginPath();
    c.strokeStyle = "#9387F5";
    c.arc(w, h, 120, 0, 2 * Math.PI);
    c.stroke();

    c.beginPath();
    c.arc(w, h, 3, 0, 2 * Math.PI);
    c.fill();

    c.lineWidth = 3;

    c.beginPath();
    c.strokeStyle = "#93FF3D";
    c.arc(w, h, 112, 0, sca);
    c.stroke();

    c.beginPath();
    c.strokeStyle = "#FED571";
    c.arc(w, h, 106, 0, (((mn * 6) + (0.1 * sc)) * Math.PI) / 180);
    c.stroke();

    c.beginPath();
    c.strokeStyle = "magenta";
    c.arc(w, h, 100, 0, (((hr * 30) + (mn / 2)) * Math.PI) / 180);
    c.stroke();
}
setInterval(fn);