
document.getElementsByClassName("container-fluid")[0].style.height = window.innerHeight + "px";

var x = window.onresize = function () {
    document.getElementsByClassName("container-fluid")[0].style.height = window.innerHeight + "px";
}