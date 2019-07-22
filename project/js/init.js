// https://stackoverflow.com/a/2507043
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

(function($) {
    $(function() {

        $('.sidenav').sidenav();

    }); // end of document ready
})(jQuery); // end of jQuery name space
$(".dropdown-trigger").dropdown({
    coverTrigger: false
});
$('#send-message-button').on('click', (e) => {
    e.preventDefault();
    const name = $("#contact_name").val().trim();
    const organisation = $("#contact_organisation").val().trim();
    const email = $("#contact_email").val().trim();
    const message = $("#contact_message").val().trim();
    if (name == "") {
        $("#send-message-button").addClass("red");
        $("#send-message-button").text("Please enter your name")
    } else if (email == "" || !isEmail(email)) {
        $("#send-message-button").addClass("red");
        $("#send-message-button").text("Please enter a valid email")
    } else if (message == "") {
        $("#send-message-button").addClass("red");
        $("#send-message-button").text("Please enter a message")
    } else {
        const data = {
            name,
            organisation,
            email,
            message
        };
        $("#send-message-button").addClass("disabled");
        $("#progress-bar").addClass("progress");
        $.post('/email', data, function(res) {
            $("#progress-bar").removeClass("progress");
            if (res.sent) {
                $("#send-message-button").text("Sent!")
            } else {
                $("#send-message-button").addClass("red");
                $("#send-message-button").text("Oops! Try again")
                $("#send-message-button").removeClass("disabled");
            }
        });
    }
});