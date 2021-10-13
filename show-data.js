let requestURL = 'editorial.json';
let request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        writePhotoGallery(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();

function writePhotoGallery(json) {
    // alert("yes");
    // alert(json.data[0].image);
    var columnClass = {center: "col p-0"}
    for (var i = 0; i < 3; i++) {
        document.getElementById("gallery").innerHTML += `<div class="col p-0">`
        
    }
    // alert(json.data.length / 3);
}

/* <div class="col p-0">
    <div class="row mb-4 mx-0 detail-hover position-relative">
        <img src="image/0.jpg" width="100%" class="p-0">
        <div class="photo-overlay-1" onclick="openDetail(0)"></div>
        <div class="photo-overlay-2 p-3 justify-content-end">
            <button class="btn btn-light m-1 hyper-text-w">
                <img src="icon/heart.svg" width="16px">
            </button>
            <button class="btn btn-light m-1 hyper-text-w">
                <img src="icon/plus.svg" width="16px">
            </button>
        </div>
        <div class="photo-overlay-3 p-3 justify-content-between bottom-0">
            <div class="btn px-0 hyper-text-w">
                <img src="user-icon/0.jpg" height="32px" class="rounded-pill">
                <span class="text-white mx-2">John Judge</span>
            </div>
            <button class="btn btn-light m-1 hyper-text-w">
                <img src="icon/arrow-down.svg" width="16px">
            </button>
        </div>
    </div>
</div>

<div class="col px-4">
</div>

<div class="col p-0">
</div> */