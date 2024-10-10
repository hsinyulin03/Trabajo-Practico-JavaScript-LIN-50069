console.log('5. Objetos en JavaScript');
console.log('Ejercicio 1');
{
  let persona={
    nombre:'Hsin Yu',
    edad:21,
    ciudad:'Mendoza',
    propiedadOriginal: function(){
      console.log('Persona: '+this.nombre+ ' Edad: '+this.edad+' Ciudad: '+this.ciudad);
    },
    actualizarCiudad: function(nuevaCiudad){
      this.ciudad=nuevaCiudad;
    }
  }
  console.log('Propiedades originales de la persona ');
  persona.propiedadOriginal();
  persona.actualizarCiudad('Buenos Aires')
  console.log('Propiedades actualizadas de la persona ');
  console.log('Persona: '+persona.nombre+ ' Edad: '+persona.edad+' Ciudad: '+persona.ciudad);
}