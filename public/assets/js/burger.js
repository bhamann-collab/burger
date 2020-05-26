



$( document ).ready(function() {
    $(".create-form").on("submit", function(event) {
    event.preventDefault();

    let newBurger = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    };

    console.log(newBurger)

    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger,
        success: function() {console.log("success")},
        error: function() {console.log("fail")}
    }).then(
        function() {
            console.log("created new burger on the menu")
            //Reload page
            location.reload();
        }
    )
})

    $(".update-form").on("submit", function(event) {
        event.preventDefault();

        let updateBurger = {
            currentName: $("#currentBurger").val(),
            name: $("#ca2").val().trim(),
            devoured: $("[name=devoured2]:checked").val().trim()
        };

        console.log(updateBurger)

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