$(document).ready(function() {

    var object;
    var dataBackup;
    var switch1;
    var switch2;
    var topics = ["Giannis dunk", "The Greek Freak", "Kobe dunk", "MJ dunk", "Allen Iverson dunk", "Spud Webb dunk", "Vince Carter dunk", "Shaq dunk"]

    function printButtons() {
        $("#buttons-div").html("");
        for (i = 0; i < topics.length; i++) {
            $("#buttons-div").append(`<button type='button' class='btn btn-primary btn-large'>${topics[i]}</button>`);
        }
    }
    printButtons();

    $(document).on("click", ".btn", function() {
        $("#gif-gallery").empty();
        var selectedGif = this.innerHTML;

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + selectedGif + "&limit=10&api_key=dc6zaTOxFJmzC";

        $.get(queryURL).done(function(response) {
            object = response;
            console.log(queryURL);
            for (i = 0; i < response.data.length; i++) {

                dataBackup = `${object.data[i].images.original.url}`

                $("#gif-gallery").append(`<span class="icons" id="icons"><img class="gif" src="${object.data[i].images.original_still.url}" id="img" data-backup="${object.data[i].images.original.url}">
                    <br>
                    <p class="text center">Rating: ${object.data[i].rating}</p><span>`);
            }
        })
    })

    $(document).on("click", "#img", function() {

        // we create variables that change the attributes of the selcted images
        switch1 = $(this).attr("src")
        switch2 = $(this).attr("data-backup")

        $(this).attr("src", switch2);
        $(this).attr("data-backup", switch1);
    })

    $(document).on("mouseenter", "#img", function() {

        switch1 = $(this).attr("src")
        switch2 = $(this).attr("data-backup")

        $(this).attr("src", switch2);
        $(this).attr("data-backup", switch1)
    })

    $(document).on("mouseleave", "#img", function() {

        switch1 = $(this).attr("src")
        switch2 = $(this).attr("data-backup")

        $(this).attr("src", switch2);
        $(this).attr("data-backup", switch1)   
    })

    $(document).on("click", "#add-gif", function(event) {

        event.preventDefault();
        var gif = $("#gif-input").val().trim();
        topics.push(gif);
        printButtons()
    });
})
