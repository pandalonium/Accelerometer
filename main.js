var devicex = 0;
var devicey = 0;
var velx = 0;
var rotation = 0;
var angularvel = 0;

window.onload = () => {
    DeviceMotionEvent.requestPermission().then(() => {
        window.addEventListener("devicemotion", (e) => {
            let dt = e.interval / 1000;
    
            velx += dt*e.acceleration.x/2;
            devicex += dt*velx;
            velx += dt*e.acceleration.x/2;
    
            angularvel += dt*e.rotationRate.alpha/2;
            rotation += dt*angularvel;
            angularvel += dt*e.rotationRate.alpha/2;
            document.body.innerHTML = `${rotation} ${angularvel} ${e.rotationRate.alpha}`
            
    
        })
    })
    
}