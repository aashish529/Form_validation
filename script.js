function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#submitbutton").click(function() {
    
    var errormessage = "";
    var missingfield = "";
    
   
    $("#error").html("");

    
    if ($('#Email').val() == "") {
        missingfield += "<p>Email not filled</p>";
    }
    if ($('#phoneno').val() == "") {
        missingfield += "<p>Phone number not filled</p>";
    }
    if ($('#password').val() == "") {
        missingfield += "<p>Password not filled</p>";
    }

    
    if ($('#Email').val() != "" && isEmail($('#Email').val()) == false) {
        errormessage += "<p>Email ID is not valid</p>";
    }
    
    if ($('#phoneno').val() != "" && $.isNumeric($("#phoneno").val()) == false) {
        errormessage += "<p>Phone number is not valid</p>";
    }
    
    if ($("#password").val() != "" && $("#password").val() != $("#confirmpassword").val()) {
        errormessage += "<p>Passwords do not match</p>";
    }

    
    if (errormessage == "" && missingfield == "") {
        
        $("#error").html("<p style='color:green; font-weight:bold;'>You are Registered!</p>");
    } else {
        
        $('#error').html(missingfield + errormessage);
    }
});
