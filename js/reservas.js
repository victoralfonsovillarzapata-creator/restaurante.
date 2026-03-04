  
function confirmarReserva() {

    let nombre = document.querySelector('input[type="text"]').value;

    // if (nombre === "") {
    //   alert("Por favor ingrese su nombre");
    //   return;
    // }
    
    let campos = document.querySelectorAll('.form-control');

    for (let i = 0; i < campos.length; i++) {
      if (campos[i].value === "") {
        // alert("Por favor complete todos los campos");
        Swal.fire({
                icon: "ERROR!!",
                title: "📍Error faltan datos",
                text: "Por favor complete todos los campos!"
        });
        return;
      }
    }

    let respuesta = confirm("¿Desea confirmar la reserva?");

    if (respuesta) {
      // alert("Gracias " + nombre + ", tu reserva ha sido registrada.");
      Swal.fire({
                title: "Reserva registrada",
                text: "Gracias por tu reserva",
                icon: "success",
                draggable: true
      });
    } else {
      // alert("Reserva cancelada. Puedes intentarlo nuevamente.");
      Swal.fire({
                title: "Cancelada",
                text: "☹️Reserva cancelada. Puedes intentarlo de nuevo.",
                icon: "success",
                draggable: true
            });
    }
  }