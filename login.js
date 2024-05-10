function check() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    console.log(email.value);
    console.log(password.value);
    // var storedName = localStorage.getItem('email');
    // var storedPw = localStorage.getItem('password');
    
    if (email.value.length == 0) {
        console.log("kkkkkk")
        alert("fill this requirements");
    }
    else if (password.value.length == 0) {
        alert("fill this requirements!");
    }
    else {
        let stored_users = JSON.parse(localStorage.getItem('userDetails'))
        if (stored_users) {
            stored_users.forEach(userDetails => {
                if (email.value.toLoewerCase() === userDetails.email.toLoewerCase() && password.value === userDetails.password) {
                    alert('You are logged in ' + email);

                }
                console.log(stored_users);
            });


        }
        else {
            localStorage.setItem('userDetails', '[]');

        }
        return alert("valid email and password are required!");

    }
}