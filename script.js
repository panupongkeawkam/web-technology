function setSearchBGAndBorder(BGColour, borerColour, position) {
    document.getElementsByClassName("my-search-bar")[position].style.background = BGColour;
    document.getElementsByClassName("my-search-bar")[position].style.border = `1px solid ${borerColour}`;
}