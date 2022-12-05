const ball = document.getElementById("ball")

ball.addEventListener("mousedown", (e) => {
    console.log("Click")
    // ball.style.zIndex = 1000;



    function moveBall(corX, corY) {
        ball.style.left = corX - ball.offsetWidth / 2 + 'px'
        ball.style.top = corY - ball.offsetHeight / 2 + 'px'
    }



    function onMouseMove(e) {
        moveBall(e.pageX, e.pageY)
    }

    onMouseMove(e)

    document.body.addEventListener("mousemove", onMouseMove)

    ball.onmouseup = e => {
        document.body.removeEventListener("mousemove", onMouseMove)
    }
})

