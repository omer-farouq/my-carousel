const imgArray = [
    "images/pic-1.jpg",
    "images/pic-2.jpg",
    "images/pic-3.jpg",
    "images/pic-4.jpg",
    "images/pic-5.jpg",
    "images/pic-6.jpg",
    "images/pic-7.jpg",
    "images/pic-8.jpg",
    "images/pic-9.jpg",
];

let imgIndex = 0;
const imgElement = document.getElementById("img-element");
setInterval(() => {
    if(imgIndex === imgArray.length){
        imgIndex = 0;
    }
    imgUrl = imgArray[imgIndex];
    // console.log(imgIndex, imgUrl);
    imgElement.setAttribute("src", imgUrl)
    imgIndex++;
}, 1500)