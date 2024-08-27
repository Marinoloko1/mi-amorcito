// login.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const username = document.querySelector('input[name="uname"]').value;
    const password = document.querySelector('input[name="psw"]').value;

    // Validar los datos ingresados  
    if (username === "vero" && password === "28/06/2024") {
        alert("Inicio de sesión exitoso. ¡Bienvenida, Amorcito!");
        // Redirigir al usuario a la página 
        window.location.replace("Login/index.html", "_blank");
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
});
