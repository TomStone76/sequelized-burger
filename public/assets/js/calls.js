$(function () {
    // $.ajax("/api/burgers", {
    //     type: "GET"
    // }).then(
    //     function(data) {
    //         console.log(data);
    //     }
    // )


    $(".devour-button").on("click", function (event) {  /// This should refer to a different button
        event.preventDefault();

        var id = $(this).data("id");
        var newDevoured = $(this).data("newstatus");

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState,
        }).then(
            function() {
                console.log("changed devoured to ", newDevoured);
                location.reload();
            }
        )
    });

    $("#create-burger").on("click", function (event) {
        event.preventDefault()

        var newBurger = {
            name: $("#bu").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});