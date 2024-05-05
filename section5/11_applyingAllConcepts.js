import {getAllRoomsInfo, createReservation, askMenuOp, idGeneratorWrapper, getStrOfUsrReservations, cancelReservation, editReservations} from "./bookingAppUtils.js";

// Ruta del archivo data.json
const url = "section5/data.json"; // Cambiar por la ruta correcta

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
            if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Habitaciones:", data.rooms);
          console.log("Tipos de Habitaciones:", data.roomTypes);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 0);
  });
}

const mainMenu = (rooms, roomTypes, reservations, idGenReserv) =>{
    let msg, ops, usrAns, allRoomsInfo
    msg = "Ingrese opción:\n"+
            "1. Reservar habitación\n" +
            "2. Ver reservas bajo un nombre de usuario\n" +
            "3. Cancelar reserva\n" +
            "4. Editar reserva\n" +
            "5. Salir\n"
    ops = /^[1-5]$/
    usrAns = Number(askMenuOp(msg, ops))
    // Obtener habitaciones después de cargar los datos
    allRoomsInfo = getAllRoomsInfo(rooms, roomTypes)
    switch(usrAns){
        case 1:
            createReservation(allRoomsInfo, reservations, idGenReserv)
            mainMenu(rooms, roomTypes, reservations, idGenReserv)
            break
        case 2:
            const {usrReservations:_, msg} = getStrOfUsrReservations(reservations)
            alert(msg)
            mainMenu(rooms, roomTypes, reservations, idGenReserv)
            break
        case 3:
            cancelReservation(reservations)
            mainMenu(rooms, roomTypes, reservations, idGenReserv)
            break
        case 4:
            editReservations(reservations)
            mainMenu(rooms, roomTypes, reservations, idGenReserv)
            break
        case 5:
            // Exit the program
            alert("Hasta pronto! Gracias por usar el programa")
            return
    }
}

const main = () =>{
    alert("Bienvenido a la aplicación para hacer la reserva de su habitación")
    // Llamar a la función para cargar y mostrar el contenido de data.json
    cargarYMostrarData()
    .then(({ rooms, roomTypes }) => {
        // Menu principal
        const reservations = []
        let idGenReserv = idGeneratorWrapper()
        mainMenu(rooms, roomTypes, reservations, idGenReserv)
        })
    .catch((error) => {
        console.error("Error al manejar la promesa:", error);
    });
}

main()
