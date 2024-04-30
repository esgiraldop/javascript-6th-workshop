const manejarAsincronia = (callback, promise) =>{
    promise.then(() => callback()).catch(() => {
        alert("Promise not fulfilled and callback not executed")
    })
}

let myPromise = new Promise((resolve, reject) =>{
    let ans = confirm("Do you want to cancel or confirm the promise?")
    if(ans){
        setTimeout(() => {resolve()}, 2000)
    }
    setTimeout(() => {reject()}, 2000)
})

let callBack = () =>{
    alert("Promise fulfilled and callback executed")
}

manejarAsincronia(callBack, myPromise)