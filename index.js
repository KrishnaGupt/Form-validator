console.log("This is validatiom of form");

const user = document.getElementById("user");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validUser = false;
let validEmail = false;
let validPhone = false;

user.addEventListener("blur", () => {
  let regex = /^[a-zA-Z]([a-zA-Z0-9]){0,10}/;
  const userRegex = user.value;
//   console.log(regex, userRegex);
  if (regex.test(userRegex)){
    // console.log("system matched");
    const errorUser = document.getElementById("error-user");
    errorUser.classList.remove("show");
    validUser = true;
    
  } else {
    // console.log("system unmatched");
    const errorUser = document.getElementById("error-user");
    errorUser.classList.add("show");
    validUser = false;
  }
});
email.addEventListener("blur", () => {
  let regex = /^[a-zA-Z]\.?[a-zA-Z0-9]\S[a-zA-Z]\.?[a-zA-Z]/;
  // ([/.]?[a-zA-Z][0-9]\S[a-zA-Z]\.[a-zA-Z])
  const emailRegex = email.value;
//   console.log(regex, emailRegex);
  if (regex.test(emailRegex)) {
    // console.log("system matched");
    const errorEmail = document.getElementById("error-email");
    errorEmail.classList.remove("show");
    validEmail = true;
  } else {
    // console.log("system unmatched");
    const errorEmail = document.getElementById("error-email");
    errorEmail.classList.add("show");
    validEmail = false;
  }
});
phone.addEventListener("blur", () => {
  let regex = /^([0-9]){10}$/;
  const phoneRegex = phone.value;
//   console.log(regex, phoneRegex);
  if (regex.test(phoneRegex)) {
    // console.log("system matched");
    const errorPhone = document.getElementById("error-phone");
    errorPhone.classList.remove("show");
    validPhone = true;
  } else {
    // console.log("system unmatched");
    const errorPhone = document.getElementById("error-phone");
    errorPhone.classList.add("show");
    validPhone = false;
  }
});

const sBtn = document.getElementById("sbtn");
sBtn.addEventListener("click", function(){
//   console.log("success");
  if (validUser && validEmail && validPhone) {
    const success = document.getElementById("success");
    const fail = document.getElementById("fail");
    success.classList.add('show');
    fail.classList.remove('show');
  } else {
    // console.log("fail");
    const success = document.getElementById("success");
    const fail = document.getElementById("fail");
    fail.classList.add('show');
    success.classList.remove('show');
  }
})
