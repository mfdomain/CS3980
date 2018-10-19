
$(document).ready(function() {

    // set up event handlers for links
    $("#image_list a").click(function(evt) {


        $("#caption").fadeTo(1000, 0, callback);
        let caption = $(this).attr("title");
        let imageURL = $(this).attr("href");

        function callback(){
            $("#image").fadeTo(1000, 0, x);
        }

        function x(){
            $("#image").attr("src", imageURL);
            $("#caption").text(caption);
            $("#image").fadeTo(1000, 1);
            $("#caption").fadeTo(1000, 1);
        }

        // cancel the default action of the link
        evt.preventDefault();
    }); // end click

    // move focus to first thumbnail
    $("li:first-child a").focus();
}); // end ready

