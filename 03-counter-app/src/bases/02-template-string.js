const nombre = "Angel";
const apellido = "Pineda";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

// console.log( nombreCompleto );

export function getSaludo(nombre = "Estraño") {
  return "Hola " + nombre;
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
