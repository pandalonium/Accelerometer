var devicex = 0;
var devicey = 0;
var velx = 0;
var vely = 0;

window.onload = () => {
    window.addEventListener("devicemotion", (e) => {
        let dt = e.interval / 1000;

        velx += dt*e.acceleration.x/2;
        devicex += dt*velx;
        velx += dt*e.acceleration.x/2;

        vely += dt*e.acceleration.y/2;
        devicey += dt*vely;
        vely += dt*e.acceleration.y/2;
        console.log(`accel: ${e.acceleration.x} ${e.acceleration.y}<br>vel: ${velx} ${vely}<br>pos: ${devicex} ${devicey}`)

        document.body.innerHTML= (`accel: ${e.acceleration.x} ${e.acceleration.y}<br>vel: ${velx} ${vely}<br>pos: ${devicex} ${devicey}`)
    })
}