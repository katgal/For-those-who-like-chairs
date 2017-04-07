document.addEventListener("DOMContentLoaded", function() {

    // slider
    function slider() {
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
    }
    slider();

//calculator for section make your own chair
    function order() {
        var arrow = document.querySelectorAll(".list_arrow");
        var listContent = document.querySelectorAll(".list_content");
        var liElements = document.querySelectorAll(".list_content li");
        var chairName = document.querySelector(".chair_name");
        var chairNameValue = document.querySelector(".chair_name_value"); //
        var chairColor = document.querySelector(".chair_color");
        var chairColorValue = document.querySelector(".chair_color_value"); //
        var chairMaterial = document.querySelector(".chair_material");
        var chairMaterialValue = document.querySelector(".chair_material_value"); //
        var checkBox = document.querySelector(".check_box");
        var transport = document.querySelector(".chair_transport");
        var transportValue = document.querySelector(".chair_transport_value"); //
        var priceParagraphs = document.querySelectorAll(".right_panel p");
        var showSum = document.querySelector(".sum-count");

        for (var i = 0; i < arrow.length; i++)
            arrow[i].addEventListener("click", function() {

                // style property represents inline styles of an element, so on first click there
                // is no inline styles, and it assigns rotate(180deg) first and then work correctly;
                // to avoid this added style=""

                if (this.style.transform === "rotate(180deg)" || this.style.transform === "") {
                    this.style.transform = "initial";
                    this.nextElementSibling.classList.remove("hide");
                } else {
                    this.style.transform = "rotate(180deg)";
                    this.nextElementSibling.classList.add("hide");
                }

                for (i = 0; i < liElements.length; i++) {
                    liElements[i].addEventListener("click", function() {
                        var contentText = this.textContent;
                        this.parentElement.parentElement.firstChild.nextSibling.textContent = contentText;

                        if (this.dataset.namePrice) {
                            chairName.textContent = contentText;
                            chairNameValue.textContent = this.dataset.namePrice + " zł";

                        }
                        if (this.dataset.colorPrice) {
                            chairColor.textContent = contentText;
                            chairColorValue.textContent = this.dataset.colorPrice + " zł";

                        }
                        if (this.dataset.materialPrice) {
                            chairMaterial.textContent = contentText;
                            chairMaterialValue.textContent = this.dataset.materialPrice + " zł";
                        }
                        sum();
                    });
                }
            });

        checkBox.addEventListener("click", function() {

            this.firstChild.classList.toggle("hide");
            if (this.firstChild.classList == "") {
                transport.textContent = this.nextElementSibling.textContent;
                transportValue.textContent = this.nextElementSibling.dataset.transportPrice + " zł";
            } else {
                transport.textContent = "";
                transportValue.textContent = "";
            }
            sum();
        });

        function sum() {
            var total = Number(chairNameValue.textContent.substr(0,4)) + Number(chairColorValue.textContent.substr(0,4)) + Number(chairMaterialValue.textContent.substr(0,4)) + Number(transportValue.textContent.substr(0,4));
            showSum.textContent = total + " zł";
        }
    }
    order();


//form validation

    function formValidation() {
        var check = document.querySelector(".form_check");
        check.addEventListener("click", function() {
            this.firstChild.classList.toggle("hide");
        });
    }
    formValidation();
});
