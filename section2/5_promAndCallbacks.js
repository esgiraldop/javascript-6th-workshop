const manejarAsincronia = (callback, promise) =>{
    promise.then(response => callback(response)).catch(response => callback(response))
}

let myPromise = new Promise((resolve, reject) =>{
    let ans = confirm("Do you want to cancel or confirm the promise?")
    if(ans){
        setTimeout(() => {resolve("resolved")}, 2000)
    }
    setTimeout(() => {reject("rejected")}, 2000)
})

let callBack = (response) =>{
    let msg = "Promise "
    if(response === "resolved"){
        msg += response + " and callback executed"
    }else{
        msg += response + " and callback NOT executed"
    }
    alert(msg)
}

manejarAsincronia(callBack, myPromise)

// Answering questions
// 1. What happens if I change the time of promise resolution from 5 seconds to 1 second? R/ The callback will take less to be called, since this time has always to be finished first than the callback

// 2. How does the function behave if the promise is rejected instead of resolved? R/ The callback is not called and a print message with "promised not resolved" is propmted to the user.

//3. Can I modify the function so the callback handles different type of information depending on the result of the promise R/ Yes, I can do that by returning a response from the promise in reject() or resolve(), then pass it as a parameter for the callback in the "then" or "except"