$(document).ready(function() {

    var topics = ["Thom Yorke Dancing", "Jimmy Page", "Jimi Hendrix", "Clayton Kershaw", "Kicked In The Nuts", "Throwing Computer"]

    for (i = 0; i < topics.length; i++) {
        $("#buttons-div").append(`<button type='button' class='btn btn-primary btn-large'>${topics[i]}</button>`);
    }

    $("button").on("click", function() {
        var selectedGif = this.innerHTML;
        console.log(this);
        console.log(selectedGif);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + selectedGif + "&api_key=dc6zaTOxFJmzC";
        $.get(queryURL).done(function(response) {

            console.log(queryURL);
            for (i = 0; i < response.data.length; i++) {
                $("#gif-gallery").append(`<img src="${response.data[i].images.fixed_height.url}">
                	<br
                	><p class="text center">Rating: ${response.data[i].rating}</p>`);
            }
        })
    });

})
