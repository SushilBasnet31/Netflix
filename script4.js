
// const form = document.querySelector(".form")

// form.addEventListener("submit" , (e)=>{
//     e.preventDefault()

//     setTimeout(() => {
//         window.location.href = "form.html";}, 1000);


// })

const passinput = document.querySelector(".check")

document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const n = document.getElementById("email").value;
    const email = document.querySelector("input[name='email']").value.trim();
    const password = document.getElementById("pass").value.trim();
    const confirmPassword = document.getElementById("pass1").value.trim();

   

    let len = password.length
    console.log(len)

    const hasUppercase = /[A-Z]/;
    const hasNumber = /\d/;
    


    passinput.innerText = ""

    if (password == "" ) {
        const msg = document.createElement("span")
        
        msg.innerText = "Password cant be left empty."
        msg.style.color = "red"
        
        passinput.appendChild(msg)
    }

    else if (len <= 8 || !hasUppercase.test(password) || !hasNumber.test(password)) {

        const msg = document.createElement("span")


        msg.innerText = "Password must be longer than 8 characters and include an uppercase letter and a number."
        msg.style.color = "red"
        passinput.appendChild(msg)
        password.value = ""
        confirmPassword = ""
         
    }

    else if (password !== confirmPassword) {

        const msg = document.createElement("span")


        msg.innerText = "invalid password"
        msg.style.color = "red"
        passinput.appendChild(msg)
        password.value = ""
        confirmPassword.value = ""



        // alert("Passwords do not match!");
        // return;
    }
    else{
    // Save to localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    // Redirect to Sign In page
    window.location.href = "form.html";
    }
});

const sign = document.querySelector(".oroption")
sign.addEventListener("click" , ()=>{
  
        window.location.href = "form.html";
   

})





function togglePassword() {
    const passwordInput = document.getElementById("pass");
    const icon = document.querySelector(".toggle-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.innerHTML = `<i class='fa-solid fa-eye'></i>`; // change icon if you want
    } else {
        passwordInput.type = "password";
        icon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    }
}

function togglePassword1() {
    const passwordInput = document.getElementById("pass1");
    const icon = document.querySelector(".toggle-icon1");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.innerHTML = `<i class='fa-solid fa-eye'></i>`; // change icon if you want
    } else {
        passwordInput.type = "password";
        icon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    }
}
