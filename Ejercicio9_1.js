console.log('9. Local Storage');
console.log('Ejercicio 1');

{const buttonGuardar = document.getElementById("buttonGuardar");
const buttonEliminar = document.getElementById("buttonEliminar");
const emailDisplay = document.getElementById("emailDisplay");

// Función para obtener y guardar el correo electrónico
const getDataInputs = () => {
    const email = document.getElementById("email").value;
    localStorage.setItem("datos", JSON.stringify(email));
    mostrarEmail(email);
};

// Función para mostrar el correo guardado
const mostrarEmail = (email) => {
    emailDisplay.textContent = email;
};

// Verificar si hay un correo guardado en localStorage al cargar la página
const savedEmail = localStorage.getItem('datos');
if (savedEmail) {
  mostrarEmail(JSON.parse(savedEmail));
}

// Manejar el clic en el botón de guardar
buttonGuardar.addEventListener('click', getDataInputs);

// Manejar el clic en el botón de eliminar
buttonEliminar.addEventListener('click', function() {
    localStorage.removeItem('datos');
    emailDisplay.textContent = '';
});

}