window.onload = () => {
    window.addEventListener("devicemotion", (e) => {
        document.write(String(e.acceleration.x));
    })
}