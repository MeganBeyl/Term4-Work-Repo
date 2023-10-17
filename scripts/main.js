$(document).ready(function(){

    //-------------------------------------------------------------------------------------
    // Sign Up Form
    //-------------------------------------------------------------------------------------

    //On Submit, prevent default form submission behavior and do this instead

    $('#signUpForm').submit(function(event) {
        event.preventDefault();

        if (this.checkValidity() === false) {
            event.stopPropagation();
        } else {
            //Add any code that should run on submit
            window.location.href= 'pages/browse.html';
        }
        $(this).addClass('was-validated');
    });
});