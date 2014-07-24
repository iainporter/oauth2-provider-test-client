$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/oauth2-provider/v1.0/healthcheck"
    }).then(function(data) {
       $('.message').append(data);
    });
});
