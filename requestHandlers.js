function iniciar() {
  console.log("Manipulador de peticion 'iniciar' fue llamado.");

  function sleep(milliSeconds) {  
    // obten la hora actual
    var startTime = new Date().getTime();
    // atasca la cpu
    while (new Date().getTime() < startTime + milliSeconds); 
  }

  sleep(10000);
  return "Hola Iniciar";
}

function subir() {
  console.log("Manipulador de peticion 'subir' fue llamado.");
  return "Hola Subir";
}

exports.iniciar = iniciar;
exports.subir = subir;