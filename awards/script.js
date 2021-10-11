document.querySelector(":root").style.setProperty("--current-height", window.innerHeight - 60 + "px");
var x = window.onresize = function () {
    document.querySelector(":root").style.setProperty("--current-height", window.innerHeight - 60 + "px");
}