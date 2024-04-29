const crearSumador = num1 =>{
    const sumarCinco = num2 =>{
        return num1 += num2
    }
    return sumarCinco
}

let sumarCinco = crearSumador(5)
console.log(sumarCinco(3))
console.log(sumarCinco(3))

// 1. The function crearSumador still can access to the initial value (5) because a function remembers the scope in which it was created, including the variables of that scope, in this case: "num1". When I execute the function crearSumador and pass it to the variable 'sumarCinco', i'm creating the function sumarCinco() which receives the parameter "num1". This function is returned from the function and then assigned to the variable "sumarCinco". Then the function "sumarCinco" can remember the initial value of "num1" because of the closure. Every time I execute the function "sumarCinco()" with a parameter, it remembers "num1", which is an accumulator and adds the new number I passed as input parameter.

//2. The implications in memory when creating many instances of functions with closures is that if the parameters/objects assigned in the context of the inner function are large, then the occupation in memory will be the size of these objects times the number of instances I create from the closure function, increasing the memory overload
