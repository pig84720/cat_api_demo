document.write('<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>');
var stop = document.querySelector("#stop");
var play = document.querySelector("#play");

play.onclick = function() {
    if(cat1) {
        swal("可以下載喜歡的貓貓圖囉", "滑鼠移至貓貓圖=>右鍵=>另存圖檔", "success");
        play.src = "https://image.flaticon.com/icons/svg/2468/2468825.svg"
        clearInterval(cat1);
        cat1 = null;
        clearInterval(cat2);
        cat2 = null;
        clearInterval(cat3);
        cat3 = null;
        clearInterval(cat4);
        cat4 = null;
    } else {
        play.src = "https://image.flaticon.com/icons/svg/715/715343.svg"
        cat1 = setInterval(function(){
            get_some_cat(".img1");
            }, 5000);
        cat2 = setInterval(function(){
            get_some_cat(".img2");
            }, 5000);
        cat3 = setInterval(function(){
            get_some_cat(".img3");
            }, 5000);
        cat4 = setInterval(function(){
            get_some_cat(".img4");
            }, 5000);
    }
}

var get_some_cat = function(class_name) {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("GET", "https://api.thecatapi.com/v1/images/search");
    xhr.setRequestHeader("x-api-key", "7a6fa237-814b-44bb-88a2-fa95812cc603");
    xhr.onload = () => {
        let data = JSON.parse(xhr.responseText);
        if(data[0].length !== 0) {
            document.querySelector(class_name).src = data[0].url;
        } else {
            alert("api發生錯誤")
        }
    }
    xhr.send(data);
}
var cat1 = setInterval(function(){
    get_some_cat(".img1");
    }, 5000);
cat1;

var cat2 = setInterval(function(){
    get_some_cat(".img2");
    }, 5000);
setTimeout(cat2,3000);

var cat3 = setInterval(function(){
    get_some_cat(".img3");
    }, 5000);
setTimeout(cat3,6000);

var cat4 = setInterval(function(){
    get_some_cat(".img4");
    }, 5000);
setTimeout(cat4,9000);