let open = document.getElementById("sidebar");
let close = document.getElementById("close");
let box = document.getElementById("box");

function sidebar() {
    open.addEventListener("click", function () {
        box.style.right = "0px";
    });

    close.addEventListener("click", function () {
        box.style.right = "-270px";
    });
}

sidebar();
