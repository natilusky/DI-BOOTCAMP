function myMove() {
    let anim = document.getElementById("animate");
    let distance = 0;
    let timer = setInterval(function () {
        if (distance == 350) {
           clearInterval(timer);
       }
       else {
        distance++;
        anim.style.top = distance + "px";
        anim.style.left = distance + "px";
    }
}, 10);
}