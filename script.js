function setSearchBGAndBorder(BGColour, borerColour, position) {
    document.getElementsByClassName("search-box-container")[position].style.background = BGColour;
    document.getElementsByClassName("search-box-container")[position].style.border = `1px solid ${borerColour}`;
}