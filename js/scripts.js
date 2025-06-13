function validateLogin(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
   
    const validUsername = "aissa";
    const validPassword = "ramos";
  
    if (username === validUsername && password === validPassword) {
      window.location.href = "home.html";
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  }