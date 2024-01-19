// clock-hand rotation calculation

setInterval(() => {
    let d = new Date();
    let htime = d.getHours();        // getting hour
    let mtime = d.getMinutes();        // getting minute
    let stime = d.getSeconds();        // getting second
    let hrotation = 30*htime + mtime/2;         // hour hand rotation
    let mrotation = 6*mtime;             // minute hand rotation
    let srotation = 6*stime;             // seconds hand rotation

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);