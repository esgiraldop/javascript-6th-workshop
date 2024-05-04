import {getAllRoomsInfo, filterRoomByCapacity, askUsrNum, askMenuOp} from "./bookingAppUtils.js";

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
    }, 3000);
  });
}

const mainMenu = (usrAns) =>{
    let msg, ops
    msg = "Ingrese opción:\n"+
            "1. Reservar habitación\n" +
            "2. Ver reservas bajo un nombre de usuario\n" +
            "3. Cancelar reserva\n" +
            "4. Editar reserva\n" +
            "5. Salir\n"
    ops = /^[1-5]$/
    usrAns = Number(askMenuOp(msg, ops))
    switch(usrAns){
        case 1:
            console.log("Did you come here?")
            alert("Case 1 selected")
            mainMenu()
            break
        case 2:
            alert("Case 2 selected")
            mainMenu()
            break
        case 3:
            alert("Case 3 selected")
            mainMenu()
            break
        case 4:
            alert("Case 4 selected")
            mainMenu()
            break
        case 5:
            // Exit the program
            return "Goodbye. Thanks for using the program!"
    }
}

const main = () =>{
    alert("Bienvenido a la aplicación para hacer la reserva de su habitación")
    // Llamar a la función para cargar y mostrar el contenido de data.json
    cargarYMostrarData()
    .then(({ rooms, roomTypes }) => {

        let allRoomsInfo, filteredRooms, usrAns, msg, ops
        // Menu principal
        mainMenu()

        /*
        // Obtener habitaciones disponibles después de cargar los datos
        allRoomsInfo = getAllRoomsInfo(rooms, roomTypes)
        usrAns = askUsrNum()
        filteredRooms = filterRoomByCapacity(allRoomsInfo, usrAns)

        alert(JSON.stringify(filteredRooms))
        */
        })
        .then(msg => {
            console.log("This is a test")
            alert(msg)
        })
        .catch((error) => {
        console.error("Error al manejar la promesa:", error);
    });
}

main()
