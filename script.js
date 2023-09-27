"use strict";

const bookVideo = document.querySelector(".book-video");



bookVideo.addEventListener("contextmenu", function(e){
    console.log("right clicked");
    e.preventDefault()

});
