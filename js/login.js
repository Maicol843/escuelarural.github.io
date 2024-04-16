document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Validación de usuario y contraseña
  if (username === 'Rural4' && password === 'rural4') {
    // Usuario y contraseña válidos, redireccionar a otra página
    window.location.href = 'html/inicio.html';
  } else {
    // Mostrar mensaje de alerta
    alert('Nombre de usuario o contraseña incorrecto');
  }
});

