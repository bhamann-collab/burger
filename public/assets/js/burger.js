



$( document ).ready(function() {
    //When the add burger button gets clicked
    $(".create-form").on("submit", function(event) {
    event.preventDefault();

    //Getting the Burger name and the devoured bool
    let newBurger = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger

    }).then(
        function() {
            //Reload page
            location.reload();
        }
    )
})

    //When the user clicks on the burger update button
    $(".update-form").on("submit", function(event) {
        event.preventDefault();

        //Passing 3 variables through AJAX: Burger ID that wants to be changed, the new burger name and the devored bool
        let updateBurger = {
            currentName: $("#currentBurger").val(),
            name: $("#ca2").val().trim(),
            devoured: $("[name=devoured2]:checked").val().trim()
        };

        $.ajax("/api/burger-update", {
            type: "POST",
            data: updateBurger
        }).then(
            function() {
                console.log("updated burger on the menu")
                //Reload page
                location.reload();
            }
        )
    })
});