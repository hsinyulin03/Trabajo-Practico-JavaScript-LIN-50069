console.log('7. Introduccion al DOM');
 console.log('Ejericio 1');

 {const button=document.getElementById("button");
 const contenedor = document.getElementById("contenedor");

 const handleStyleButton = () => {
  contenedor.classList.add('cambiarColorp');
  }

 button.addEventListener("click", ()=>{
  console.log('El usuario hizo un click');
  handleStyleButton();
 })}
