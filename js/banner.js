window.onload = function () {
    var arr = ['./img/banner/lin.jpg','./img/banner/1.jpg','./img/banner/2.jpg','./img/banner/3.jpg','./img/banner/4.jpg','./img/banner/bian.jpg', './img/banner/6.jpeg'];
    var img = document.getElementsByTagName("img")[0];
    var i = 0;
    setInterval(function () {
        i++;
        if (i == arr.length) {
            i = 0;
        }
        img.src = arr[i];
    }, 2000);
    var li1 = document.getElementsByTagName("li")[0];
    var li2 = document.getElementsByTagName("li")[1];
    var li3 = document.getElementsByTagName("li")[2];
    var li4 = document.getElementsByTagName("li")[3];
    var li5 = document.getElementsByTagName("li")[4];
    var li6 = document.getElementsByTagName("li")[5];
    li1.onclick = function(){
        window.location.href = "./allusion.html"
    } 
    li2.onclick = function(){
        window.location.href = "./monument.html"
    } 
    li3.onclick = function(){
        window.location.href = "./figure.html"
    } 
    li4.onclick = function(){
        window.location.href = "./delicacy.html"
    } 
    li5.onclick = function(){
        window.location.href = "./celebrity.html"
    } 
    li6.onclick = function(){
        window.location.href = "./specialty.html"
    } 
}