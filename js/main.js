"use strict";

$(document).ready(function() {

    // show slide when play is clicked
    $("#play-button").click(playSlideShow);

    function playSlideShow() {
        $("#instructions").fadeOut(1000);
        $("#slide--0").delay(1000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--1").delay(8000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--2").delay(15000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--3").delay(22000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--4").delay(29000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--5").delay(36000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--6").delay(43000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--7").delay(50000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--8").delay(57000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--9").delay(64000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#instructions").delay(71000).fadeIn(2000);
    }

   function makeSlides(imageList) {
        var idCounter = 0;
        for (var i = 0; i < imageList.images.length; i++) {
            var currentSlide = imageList.images[i];
            $("#slide-container").append(` <div id="slide--${idCounter}" class="slide">
                                                <h3>${currentSlide.name}</h3>
                                                <img src="${currentSlide.url}" alt="${currentSlide.name}">
                                                <p class="img-description">${currentSlide.description}</p>
                                            <div>`);
            idCounter += 1;
        }
        // hide all slides
        $(".slide").hide();
   }
   // load images JSON
   $.ajax({
        url:"images.json"
    }).done(makeSlides);
});