console.log('Ejericio 2');
{
  document.addEventListener('DOMContentLoaded', function() {
    const campoTexto = document.getElementById('miCampo');
    const deshabilitarCampo = document.getElementById('deshabilitarCampo');
    const habilitarCampo = document.getElementById('habilitarCampo');

    deshabilitarCampo.addEventListener('click', function() {
        campoTexto.disabled = true; //permite deshabilitar funcionalmente el campo de texto
        campoTexto.classList.add('disabled'); //se añade la clase disabled al elemento campoTexto
    });

    habilitarCampo.addEventListener('click', function() {
        campoTexto.disabled= false;//permite habilitar funcionalmente el campo de texto
        campoTexto.classList.remove('disabled'); //se elimina la clase disabled del elemento campoTexto
    });
});
}
