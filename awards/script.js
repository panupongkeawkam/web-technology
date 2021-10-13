document.querySelector(":root").style.setProperty("--current-height", window.innerHeight - 60 + "px");

var x = window.onresize = function () {
    document.querySelector(":root").style.setProperty("--current-height", window.innerHeight - 60 + "px");
}

function setSearchBGAndBorder(BGColour, borerColour, position) {
    document.getElementsByClassName("search-box-container")[position].style.background = BGColour;
    document.getElementsByClassName("search-box-container")[position].style.border = `1px solid ${borerColour}`;
}