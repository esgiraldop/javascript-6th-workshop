const getAllRoomsInfo = (rooms, roomTypes) =>{
    const availabRooms = []
    rooms.forEach((room) => {
            availabRooms.push({roomNumber: room.number,
                roomType: roomTypes.find((type) => type.id === room.roomTypeId).name,
                capacity: roomTypes.find((type) => type.id === room.roomTypeId).capacity,
                isAvailable: room.availability
            })
        })
    return availabRooms
}

const filterRoomByCapacity = (roomsInfo, thr) => {
    return roomsInfo.filter(room => room.capacity >= thr && room.isAvailable)
}

const askUsrNum = (msg) =>{
    let usrAns
    do{
        usrAns = prompt(msg)
        if(isNaN(Number(usrAns)) || usrAns <= 0 || Math.round(Number(usrAns)) !== Number(usrAns)){
            alert("Por favor entre una respuesta válida")
        }
    }while(isNaN(Number(usrAns)) || usrAns <= 0 || Math.round(Number(usrAns)) !== Number(usrAns))
    return usrAns
}

const askMenuOp = (msg, ops) =>{
    let usrAns
    const regexp = new RegExp(ops)
    do{
        usrAns = prompt(msg)
        if(!regexp.test(usrAns)){
            alert("Por favor ingrese una respuesta válida")
        }
    }while(!regexp.test(usrAns))
    return usrAns
}

const idGeneratorWrapper = () =>{
    let init = 1
    const idGenerator = () =>{
        return init ++
    }
    return idGenerator
}

const askDate = (msg) =>{
    let date, ans
    const pattern  = /^\d{4}[-]\d{2}[-]\d{2}$/
    const regex = new RegExp(pattern)
    do{
        ans = prompt(msg)
        date = new Date(ans)
        if(!regex.test(ans) || isNaN(Date.parse(date))){
            alert("Por favor ingrese una fecha válida")
        }
    }while(!regex.test(ans) || isNaN(Date.parse(date)))
    return date
}

const getReservationsUsrName = (usrName, reservations) => {
    //Function to get all the reservations made for a specific room based on the name of the user
    return reservations.filter(element => element.usrName === usrName)
}

const getStrOfUsrReservations = (reservations) =>{
    let msg = "Señor usuario, por favor ingrese su nombre para visualizar las reservas a su nombre"
    const usrName = askName(msg)
    const usrReservations = getReservationsUsrName(usrName, reservations)
    msg = `Sr/sra. ${usrName},`
    if(usrReservations.length === 0){
        msg += "no hay reservas a su nombre"
    }else{
        msg += "sus reservas se listan a continuación:\n\n" +
        JSON.stringify(usrReservations).replace("},{", "\n\n") + "\n\n"
    }
    return {usrReservations, msg}
}

const getReservationsRoomNum = (roomNum, reservations) => {
    //Function to get all the reservations made for a specific room based on its number. Returns an array of dictionaries
    return reservations.filter(element => element.roomNum === roomNum)
}

const isRoomAvailabDates = (crrntRoomReservations, initDate, endDate) =>{
    // Function to check if a specific room is available within a range of dates
    //Getting end and init dates of reservations for the selected room
    const reservedInitDates = crrntRoomReservations.map(item => item.initDate)
    const reservedEndDates = crrntRoomReservations.map(item => item.endDate)
    //looping over init and end dates for the current room to check if the selected date is overlapping any of the reserved date ranges
    for(let i = 0; i < reservedInitDates.length; i++){
        if( (initDate > reservedInitDates[i] && initDate < reservedEndDates[i]) || (endDate > reservedInitDates[i] && endDate < reservedEndDates[i]) ){
            return false
        }
    }
    return true
}

const askName = (msg) => {
    let usrName
    const pattern = /^[a-z]+ [a-z]+$/
    const regex = new RegExp(pattern)
    do{
        usrName = prompt(msg).toLowerCase()
        if(!regex.test(usrName)){
            alert("Por favor ingrese un nombre válido")
        }
    }while(!regex.test(usrName))
    return usrName
}

const askDateRange = () =>{
    let msg, initDate, endDate
    msg = "Por favor ingrese la fecha inicial de estadía en formato yyyy-mm-dd: "
    initDate = askDate(msg)
    do{
        msg = "Por favor ingrese la fecha final de estadía en formato yyyy-mm-dd: "
        endDate = askDate(msg)
        if(endDate <= initDate){
            alert("La fecha final de su reserva no puede ser anterior a la fecha inicial. Intente de nuevo")
        }
    }while(endDate <= initDate)
    return {initDate, endDate}
}

const verifyReservation = (allRoomsInfo, reservations) =>{
    // TODO: How do I make this setTimeout to work here and not appear at the end after the main promise? setTimeout(() => Resolve("Habitación disponible"), 5000)

    let msg, guestsNum, filteredRooms, initDate, endDate, roomNum, isRoomAvailab, usrName, crrntRoomReservations
    do{
        msg = "Por favor entre el número de personas que usarán la habitación: "
        guestsNum = askUsrNum(msg)
        filteredRooms = filterRoomByCapacity(allRoomsInfo, guestsNum)
        if(filteredRooms.length === 0){
           alert("No hay habitaciones actualmente con esta capacidad. Por favor intente con un menor número de huéspedes.")
        }
    }while(filteredRooms.length === 0)
    msg = "Estas son las habitaciones disponibles según el número de personas a hospedar:\n\n"
    msg += filteredRooms.map(elem => `Número de habitación: ${elem.roomNumber}, Tipo de habitación: ${elem.roomType}, Máximo número de huéspedes: ${elem.capacity}`).join("\n\n") + "\n\n"
    // Getting room numbers of filtered rooms
    const filteredRoomsNums = filteredRooms.map(elem => elem.roomNumber)
   msg += "Por favor ingrese número de la habitación para la que quiere chequear disponibilidad"
    // Generating the regex for available options
    const ops = filteredRoomsNums.map(elem => `^${elem}$`).join("|")
    roomNum = askMenuOp(msg, ops)
    do{
        // Checking the available room by dates without taking into account the setTimeOut
        crrntRoomReservations = getReservationsRoomNum(roomNum, reservations)
        const reservedDates = crrntRoomReservations.map(item => `[${item.initDate} - ${item.endDate}]`).join("\n\n")
        if(reservedDates.length > 0){
            alert(`La habitación ${roomNum} está reservada en las siguientes fechas:\n${reservedDates}` )
        }else{
            alert(`La habitación ${roomNum} no está reservada para ninguna fecha`)
        }
        let {initDate: init, endDate: end} = askDateRange()
        initDate = init; endDate = end
        isRoomAvailab = isRoomAvailabDates(crrntRoomReservations, initDate, endDate)
        if(!isRoomAvailab){
            alert(`La habitación ${roomNum} ya ha sido reservada entre el ${initDate} y el ${endDate}. Por favor intente con otra fecha`)
        }
    }while(!isRoomAvailab)
    msg = "La habitación está disponible y puede ser reservada en estas fechas!\n" +
        "Por favor ingrese su primer nombre y apellido, separado por un espacio: "
    usrName = askName(msg)
    return [roomNum, initDate, endDate, usrName, guestsNum]
}

const createReservation = (vectInfo, idGenReserv, reservations)=>{
    let msg
    const [roomNum, initDate, endDate, usrName, guestsNum] = vectInfo
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true
            const reservation = {
            id: idGenReserv(),
            roomNum,
            initDate,
            endDate,
            usrName,
            guestsNum
        }
        reservations.push(reservation)
        msg = "Reserva creada!\nLos datos son los siguientes:\n"

        if(!flag){
            reject("La reserva no pudo ser creada")
        }
        resolve(alert(msg + JSON.stringify(reservation)))
        }, 3000)
    })
}

const cancelReservation = reservations =>{
    let id2delete, idxOfItem2delete, msg
    msg = "Por favor ingrese el id de la reserva que quiere eliminar. " +
        `Estas son las reservas actuales activas: ${JSON.stringify(reservations).replace("},{", "\n\n")}`
    const ops = reservations.map(elem => `^${elem.id}$`).join("|")
    console.log(ops)
    id2delete = Number(askMenuOp(msg, ops))
    idxOfItem2delete = reservations.findIndex(item => item.id === id2delete)
    alert(`Item ${JSON.stringify(reservations[idxOfItem2delete])} eliminado exitosamente!`)
    reservations.splice(idxOfItem2delete, 1)
}

const editReservations = reservations =>{
    let msg, id2modify, idxOfItem2modify
    const {usrReservations, msg: msg1} = getStrOfUsrReservations(reservations)
    msg = msg1 + "Por favor ingrese el número de reserva que desea editar"
    const ops = reservations.map(elem => `^${elem.id}$`).join("|")
    console.log(ops)
    id2modify = Number(askMenuOp(msg, ops))
    idxOfItem2modify = reservations.findIndex(item => item.id === id2modify)
    let {initDate, endDate} = askDateRange()
    reservations[idxOfItem2modify].initDate = initDate
    reservations[idxOfItem2modify].endDate = endDate
    alert(`Item ${JSON.stringify(reservations[idxOfItem2modify])} modificado exitosamente!`)
}

export {getAllRoomsInfo, verifyReservation, createReservation, askMenuOp, idGeneratorWrapper, getStrOfUsrReservations, cancelReservation, editReservations}