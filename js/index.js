$(document).ready(function() {

    // Enable Flex Slider image carousel
    $('.flexslider').flexslider({
        animation: "slide"
    });

    $(".projectButton").each(function(index) {
        this.title = "Open in a new tab";
    });
});
