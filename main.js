window.onload = () => {
    window.addEventListener("devicemotion", (e) => {
        console.log(e.acceleration.x);
    })
}