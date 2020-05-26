



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

    console.log( "ready!" );
});