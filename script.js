function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
};

$("#submitbutton").click(function() {
    
    var errormessage = "";
    var missingfield = "";

    $('#error').html("");
    $('#success').html(""); 

    
    if ($('#Email').val() == "") {
        missingfield += "<p>Email not filled</p>";
    } else if (isEmail($('#Email').val()) == false) {
       
        errormessage += "<p>Email id is not valid</p>";
    }

    
    if ($('#phoneno').val() == "") {
        missingfield += "<p>Phone number not filled</p>";
    } else if ($.isNumeric($("#phoneno").val()) == false) {
        errormessage += "<p>Phone number is not valid</p>";
    }

   
    if ($('#password').val() == "") {
        missingfield += "<p>Password not filled</p>";
    }

    
    if ($("#password").val() != $("#confirmpassword").val()) {
        errormessage += "<p>Password does not match</p>";
    }

    if (errormessage == "" && missingfield == "") {
        $('#success').html("You are Registered");
    } else {
        $('#error').html(missingfield + errormessage);
    }
});
