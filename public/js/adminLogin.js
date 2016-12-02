const data = require("../data");
const adminData = data.admin;
var loginForm = document.getElementsByClassName("templatemo-login-form");

if (loginForm) {
    var Admin = document.getElementById("Admin");
    var password = document.getElementById("Password");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        try {
            var adminValue = Admin.value;
            var passwordValue = password.value;

            var passwordValue1 = getPasswordByAdmin(adminValue);
            if(passwordValue == passwordValue1){
                document.loginForm.action="admin/adminUser";
            }
        }
    })
}


