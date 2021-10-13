$('.dropdown-toggle').dropdown()

alert("yes")

function setSearchBGAndBorder(BGColour, borerColour, position) {
    document.getElementsByClassName("search-box-container")[position].style.background = BGColour;
    document.getElementsByClassName("search-box-container")[position].style.border = `1px solid ${borerColour}`;
}

function openDetail(index) {
    document.body.style.overflow = 'hidden';
    document.getElementById("photoDetail").innerHTML = `<img src="icon/cross.svg" height="24px" class="m-2 position-fixed icon-thin" onclick="photoDetail.style.display = 'none';  document.body.style.overflow = 'auto'">
                                                            <div class="d-flex pt-3 justify-content-center photo-detail-container">
                                                                <div class="col-10 p-3 bg-white rounded-top">

                                                                    <div class="row pb-4">
                                                                        <div class="col d-flex justify-content-start">
                                                                            <div class="btn p-0 pointer d-flex flex-row">
                                                                                <img src="user-icon/${0}.jpg" height="30px" class="rounded-pill">
                                                                                <span class="mx-2 d-flex flex-column align-items-start" style="font-size: .9em;">
                                                                                    <span style="line-height: 1.3em;">John Judge</span>
                                                                                    <a href="" style="font-size: .75em; line-height: 1.3em;">Available for hire ☑︎</a>
                                                                                </span>
                                                                            </div>
                                                                        </div>

                                                                        <div class="col d-flex justify-content-end">
                                                                            <button class="btn btn-light btn-outline-secondary py-0 ms-2 detail-btn-1">
                                                                                <img src="icon/heart.svg" width="12px">
                                                                            </button>
                                                                            <button class="btn btn-light btn-outline-secondary py-0 ms-2 detail-btn-1">
                                                                                <img src="icon/plus.svg" width="12px">
                                                                            </button>
                                                                            <div class="btn-group ms-2 rounded">
                                                                                <button class="btn text-white py-1 detail-btn-2">Download free</button>
                                                                                <button class="btn p-1 detail-btn-2" style="margin-left: 1px;">
                                                                                    <img src="icon/dropdown-arrow.svg" width="20px">
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="row d-flex justify-content-center">
                                                                        <img src="image/${index}.jpg" height="720px" class="m-0 p-0" style="width: auto;">
                                                                    </div>

                                                                    <div class="row py-4">

                                                                        <div class="col d-flex">
                                                                            <div class="col-3 d-flex flex-column">
                                                                                <span class="text-muted" style="font-size: .9em;">Views</span>
                                                                                <span>--</span>
                                                                            </div>
                                                                            <div class="col-3 d-flex flex-column">
                                                                                <span class="text-muted" style="font-size: .9em;">Downloads</span>
                                                                                <span>--</span>
                                                                            </div>
                                                                            <div class="col-3 d-flex flex-column">
                                                                                <span class="text-muted" style="font-size: .9em;">Featured in</span>
                                                                                <span>Editorial</span>
                                                                            </div>
                                                                        </div>

                                                                        <div class="col">
                                                                            <div class="col d-flex justify-content-end">
                                                                                <button class="btn btn-outline-secondary py-1 ms-2 detail-btn-1">
                                                                                    <img src="icon/share.svg" width="12px" class="me-1">Share
                                                                                </button>
                                                                                <button class="btn btn-outline-secondary py-1 ms-2 detail-btn-1">
                                                                                    <img src="icon/info.svg" width="12px" class="me-1">Info
                                                                                </button>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>`;
    document.getElementById("photoDetail").style.display = "initial";
}