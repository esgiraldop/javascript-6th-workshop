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
    return roomsInfo.filter(room => room.capacity >= thr)
}

const askUsrNum = () =>{
    let usrAns
    do{
        usrAns = prompt("Por favor entre el número de personas que usarán la habitación: ")
        if(isNaN(Number(usrAns)) || usrAns <= 0 || Math.round(Number(usrAns)) !== Number(usrAns)){
            alert("Please enter a valid answer")
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
            alert("Please enter a valid answer")
        }
    }while(!regexp.test(usrAns))
    return usrAns
}

export {getAllRoomsInfo, filterRoomByCapacity, askUsrNum, askMenuOp}