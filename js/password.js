
    function checkPswd() {
        var confirmPassword = "admin";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="j1.html";
        }
        else{
            alert("Passwords do not match.");
        }
    }
    function checkPswd2() {
        var confirmPassword2 = "admin";
        var password2 = document.getElementById("pswd2").value;
        if (password2 == confirmPassword2) {
             window.location="j2.html";
        }
        else{
            alert("Passwords do not match.");
        }
    }
