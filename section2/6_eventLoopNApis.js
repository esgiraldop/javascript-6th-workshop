console.log("Mensaje 1: Inmediatamente")
setTimeout(()=> console.log("Mensaje 2: Con timeout de 0 segundos"), 0)

setTimeout(() => console.log("Mensaje 3: Con timeout de 1 segundo"), 1000)

// Answering the questions from the statement

//1. Why "Mensaje 2: Con timeout de 0 segundos" is not shown immediately after "Mensaje 1: Inmediatamente" despite having a delay of 0 seconds? R/ In my case, the second message happens to be shown immediately after message 1. This may be happening because the time the browser takes to run the first console.log and taking it off the stack, and sending the first setTimeout to the heap, waiting zero seconds, sending the task to the macrotask queue and then sending it to the stack again so the second message is printed is so short that it is not noticeable. And when the second task gets to the macrotask queue, the first console.log was already took off the queue so the event loop allows the second console.log to go to the stack without waiting any additional time to zero seconds.