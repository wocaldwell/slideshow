"use strict";

$(document).ready(function() {

    // show slide when play is clicked
    $("#play-button").click(playSlideShow);

    function playSlideShow() {
        $("#slide--0").fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--1").delay(7000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--2").delay(14000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--3").delay(21000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--4").delay(28000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--5").delay(35000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--6").delay(42000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--7").delay(49000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--8").delay(56000).fadeIn(2000).delay(3000).fadeOut(2000);
        $("#slide--9").delay(63000).fadeIn(2000).delay(3000).fadeOut(2000);
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