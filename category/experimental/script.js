var localFile = 'experimental.json';
var request = new XMLHttpRequest();
var jsonData;

request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        writePhotoGallery(JSON.parse(request.responseText));
    }
};

request.open("GET", localFile, true);
request.send();

function writePhotoGallery(json) {
    jsonData = json;
    var index = 0;
    var gallery = document.getElementById("gallery");
    var columnClass = ["col-xl-4 col-lg-12 col-md-12 col-sm-12 p-xl-0 p-lg-0 p-md-0 px-sm-3", "col-xl-4 col-lg-12 col-md-12 col-sm-12 px-xl-4 p-lg-0 p-md-0 px-sm-3", "col-xl-4 col-lg-6 col-md-12 col-sm-12 p-lg-0 p-lg-0 p-md-0 px-sm-3"];
    for (var i = 0; i < 3; i++) {
        gallery.innerHTML += `<div id="column${i}" class="${columnClass[i]}">`;
        for (var j = 0; j < 6; j++) {
            document.getElementById(`column${i}`).innerHTML += `<div class="row mb-4 mx-0 detail-hover position-relative">
                                                                <img src="image/${index}.jpg" width="100%" class="p-0">
                                                                <div class="photo-overlay-1" onclick="openDetail(${index})"></div>
                                                                <div class="photo-overlay-2 p-3 justify-content-end">
                                                                    <button class="btn btn-light m-1 hyper-text-w">
                                                                        <img src="../../icon/heart.svg" width="16px">
                                                                    </button>
                                                                    <button class="btn btn-light m-1 hyper-text-w">
                                                                        <img src="../../icon/plus.svg" width="16px">
                                                                    </button>
                                                                </div>
                                                                <div class="photo-overlay-3 p-3 justify-content-between bottom-0">
                                                                    <div class="btn px-0 hyper-text-w">
                                                                        <img src="user-icon/${index}.jpg" height="32px" class="rounded-pill">
                                                                        <span class="text-white mx-2">${json.data[index].userName}</span>
                                                                    </div>
                                                                    <button class="btn btn-light m-1 hyper-text-w">
                                                                        <img src="../../icon/arrow-down.svg" width="16px">
                                                                    </button>
                                                                </div>
                                                            </div>`;
            index++;
        }
        gallery.innerHTML += `</div>`;
    }
}

function setSearchBGAndBorder(BGColour, borerColour, position) {
    document.getElementsByClassName("search-box-container")[position].style.background = BGColour;
    document.getElementsByClassName("search-box-container")[position].style.border = `1px solid ${borerColour}`;
}

var responseHeight = window.onresize = function () {
    document.getElementById("detailContent").style.height = `${window.innerHeight}px`;
}

function openDetail(photoIndex) {
    document.body.style.overflow = 'hidden';
    document.getElementById("photoDetail").innerHTML = `<img src="../../icon/cross.svg" height="24px" class="m-2 position-fixed icon-thin" onclick="photoDetail.style.display = 'none';  document.body.style.overflow = 'auto'">
                                                            <div id="detailContent" class="d-flex justify-content-center photo-detail-container" style="height: ${window.innerHeight}px; padding-top: 1%">
                                                                <div class="col-10 p-3 bg-white rounded-top text-nowrap">

                                                                    <div class="row pb-4">
                                                                        <div class="col d-flex justify-content-start">
                                                                            <div class="btn p-0 pointer d-flex flex-row">
                                                                                <img src="user-icon/${photoIndex}.jpg" height="30px" class="rounded-pill">
                                                                                <span class="mx-2 d-flex flex-column align-items-start" style="font-size: .9em;">
                                                                                    <span style="line-height: 1.3em;">${jsonData.data[photoIndex].userName}</span>
                                                                                    <a href="" style="font-size: .75em; line-height: 1.3em;">Available for hire ☑︎</a>
                                                                                </span>
                                                                            </div>
                                                                        </div>

                                                                        <div class="col d-flex justify-content-end">
                                                                            <button class="btn btn-light btn-outline-secondary py-0 ms-2 detail-btn-1">
                                                                                <img src="../../icon/heart.svg" width="12px">
                                                                            </button>
                                                                            <button class="btn btn-light btn-outline-secondary py-0 ms-2 detail-btn-1">
                                                                                <img src="../../icon/plus.svg" width="12px">
                                                                            </button>
                                                                            <div class="btn-group ms-2 rounded">
                                                                                <button class="btn text-white py-1 detail-btn-2">Download free</button>
                                                                                <button class="btn p-1 detail-btn-2" style="margin-left: 1px;">
                                                                                    <img src="../../icon/dropdown-arrow.svg" width="20px">
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="row d-flex justify-content-center" style="height: 80%;">
                                                                        <img src="image/${photoIndex}.jpg" height="100%" class="m-0 p-0" style="width: auto;">
                                                                    </div>

                                                                    <div class="row py-4">

                                                                        <div class="col d-flex">
                                                                            <div class="col-3 d-flex flex-column">
                                                                                <span class="text-muted" style="font-size: .9em;">Views</span>
                                                                                <span>${jsonData.data[photoIndex].views}</span>
                                                                            </div>
                                                                            <div class="col-3 d-flex flex-column">
                                                                                <span class="text-muted" style="font-size: .9em;">Downloads</span>
                                                                                <span>${jsonData.data[photoIndex].downloads}</span>
                                                                            </div>
                                                                            <div class="col-3 d-flex flex-column">
                                                                                <span class="text-muted" style="font-size: .9em;">Featured in</span>
                                                                                <span>${jsonData.data[photoIndex].featured}</span>
                                                                            </div>
                                                                        </div>

                                                                        <div class="col">
                                                                            <div class="col d-flex justify-content-end">
                                                                                <button class="btn btn-outline-secondary py-1 ms-2 detail-btn-1">
                                                                                    <img src="../../icon/share.svg" width="12px" class="me-1">Share
                                                                                </button>
                                                                                <button class="btn btn-outline-secondary py-1 ms-2 detail-btn-1">
                                                                                    <img src="../../icon/info.svg" width="12px" class="me-1">Info
                                                                                </button>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>`;
    document.getElementById("photoDetail").style.display = "initial";
}