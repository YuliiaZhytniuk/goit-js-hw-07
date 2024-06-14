const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  const registerForm = {
    email: `${email}`,
    password: `${password}`,
  }
  
  if (email === "" || password === "") {
    alert ('All form fields must be filled in');
  } else {
    const registerForm = {
      email: email,
      password: password,
    }
  };
    
  console.log(registerForm);
  loginForm.reset();
}

