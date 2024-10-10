{ const buttonAlerta=document.getElementById("buttonAlerta");
  const input = document.getElementById("miCampoTexto");
 
  const handleStyleButton1 = () => {
   const valor = input.value;
   alert('Has ingresado: ' +valor);
   }
 
  buttonAlerta.addEventListener("click", ()=>{
   console.log('El usuario hizo un click');
   handleStyleButton1();
  })}