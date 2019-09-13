$(function () {

    // devouring of burger
    $(".change-devoured").on("click", function (event) {
        let id = $(this).data("id");
        let devouredState = {
            devoured: true
        };

        // put request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {

                // update list
                location.reload();
            }
        )
    });


    // submit for new burger
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#ba").val().trim(),
            devoured: false
        };

        $.post("/api/burgers", newBurger)
            .then(function () {
                console.log("new burger added");

                location.reload();
            })
    });

});

$(document).ready(function () {
    $('.tooltipped').tooltip();
}); 