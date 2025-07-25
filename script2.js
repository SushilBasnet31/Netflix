




// const form1 = document.querySelector(".form")
// const input = document.querySelector("#pass")
// const email1 = document.querySelector("#email")
// const sbtn = document.querySelector(".submit")

// const passinput = document.querySelector(".check")
// let link1 = document.querySelector(".link")






// form1.addEventListener("submit", (e) => {
//     e.preventDefault() // yo line chaye submit click garda reload huna batw rokxaa

//     let newInput = input.value.trim()
//     let email2 = email1.value.trim()

//     let len = newInput.length
//     console.log(len)

//     const hasUppercase = /[A-Z]/;
//     const hasNumber = /\d/;
//     const Password = "C12345678"


//     passinput.innerText = ""

//     if (newInput == "" ) {
//         const msg = document.createElement("span")
        
//         msg.innerText = "Password cant be left empty."
//         msg.style.color = "red"
//         input.style.border = "red"
//         passinput.appendChild(msg)
//     }

//     else if (len <= 8 || !hasUppercase.test(newInput) || !hasNumber.test(newInput)) {

//         const msg = document.createElement("span")


//         msg.innerText = "Password must be longer than 8 characters and include an uppercase letter and a number."
//         msg.style.color = "red"
//         passinput.appendChild(msg)
//         input.value = ""
         
//     }

//     else if ( Password === newInput && email2 === "netflix@gmail.com"){
    
//     setTimeout(() => {
//         window.location.href = "searchmovie.html";}, 1000);

    
//     }

//     else if(email2 !== "netflix@gmail.com"){
//         const msg = document.createElement("span")


//         msg.innerText = "Invalid email"
//          msg.style.color = "red"
//         passinput.appendChild(msg)
//         input.value = ""
//         email1.value = ""
//     }

//     else {
//         const msg = document.createElement("span")


//         msg.innerText = "invalid password"
//          msg.style.color = "red"
//         passinput.appendChild(msg)
//         input.value = ""

//     }


    
   
    
    
// })

const passinput = document.querySelector(".check")

document.querySelector(".submit").addEventListener("click", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("pass").value;

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (emailInput === storedEmail && passwordInput === storedPassword) {
     setTimeout(() => {
         window.location.href = "searchmovie.html";}, 1000);

  } else {
    alert("Invalid email or password.");
  }
});


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


