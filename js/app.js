document.addEventListener("DOMContentLoaded", function() {

    // slider
    var next = document.querySelector(".smaller_1");
    var prev = document.querySelector(".smaller_2");
    var liElements = document.querySelectorAll(".slider li");

    var counter = 0;

    next.addEventListener("click", function() {

        liElements[counter].style.display = "none";

        if (counter === liElements.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        liElements[counter].style.display = "inline-block";
    });

    prev.addEventListener("click", function() {

        liElements[counter].style.display = "none";

        if (counter === 0) {
            counter = liElements.length - 1;
        } else {
            counter--;
        }

        liElements[counter].style.display = "inline-block";
    });

});
