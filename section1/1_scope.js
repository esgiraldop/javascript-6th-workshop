import {askOption} from "../utilities.js"

const askUser = () =>{
    let msg
    const options = ['1', '2']
    msg = "Is 'globalVariable' accessible from this context?\n1. Yes\n2. No"
    let globalVariableAns = askOption(msg, options)
    msg = "Is 'functionVariable' accessible from this context?\n1. Yes\n2. No"
    let functionVariableAns = askOption(msg, options)
    msg = "Is 'blockVariable' accessible from this context?\n1. Yes\n2. No"
    let blockVariableAns = askOption(msg, options)
    return {
        globalVariableAns,
        functionVariableAns,
        blockVariableAns
    }
}

const scope = () => {
    // Global Scope
    let usrAns, errors = 0, totalErrors = 0, globVarCanBeAccessed, funcVarCanBeAccessed, blockVarCanBeAccessed, msg
    const totalQuestions = 9
    var globalVariable = "I'm a global variable.";

    alert("User, welcome to the global context")
    usrAns = askUser()
    // Testing global variable
    try{
        console.log(globalVariable)
        globVarCanBeAccessed = true
        msg = "The variable 'globalVariable' can indeed be accessed from the global context, so "
    }catch(ReferenceError){
        globVarCanBeAccessed = false
        msg = "The variable 'globalVariable' cannot be accessed from the global context, so "
    }

    if(usrAns.globalVariableAns === globVarCanBeAccessed){
        msg += "GOOD JOB!\n\n"
    }else{
        msg += "YOU MISSED THIS ONE\n\n"
        errors++
    }

    // Testing function variable
    try{
        console.log(functionVariable)
        funcVarCanBeAccessed = true
        msg += "The variable 'functionVariable' can indeed be accessed from the global context, so "
    }catch(ReferenceError){
        funcVarCanBeAccessed = false
        msg += "The variable 'functionVariable' cannnot be accessed from the global context, so "
    }
    if(usrAns.functionVariableAns === funcVarCanBeAccessed){
        msg += "GOOD JOB!\n\n"
    }else{
        msg += "YOU MISSED THIS ONE\n\n"
        errors++
    }

    // Testing block variable
    try{
        console.log(blockVariable)
        blockVarCanBeAccessed = true
        msg += "The variable 'blockVariable' can indeed be accessed from the global context, so "
    }catch(ReferenceError){
        blockVarCanBeAccessed = false
        msg += "The variable 'blockVariable' cannnot be accessed from the global context, so "
    }
    if(usrAns.blockVariableAns === blockVarCanBeAccessed){
        msg += "GOOD JOB!\n\n"
    }else{
        msg += "YOU MISSED THIS ONE\n\n"
        errors++
    }
    totalErrors = errors
    msg+=`You missed ${errors}/3 questions in this section`
    alert(msg)
    function testScope() {
        // Function Scope
        var functionVariable = "Soy una variable local.";

        // Testing in the function context
        errors = 0
        msg = ""
        alert("User, welcome to the function context")
        usrAns = askUser()
        // Testing global variable
        try{
            console.log(globalVariable)
            globVarCanBeAccessed = true
            msg = "The variable 'globalVariable' can indeed be accessed from the function context, so "
        }catch(ReferenceError){
            globVarCanBeAccessed = false
            msg = "The variable 'globalVariable' cannot be accessed from the function context, so "
        }

        if(usrAns.globalVariableAns === globVarCanBeAccessed){
            msg += "GOOD JOB!\n\n"
        }else{
            msg += "YOU MISSED THIS ONE\n\n"
            errors++
        }

        // Testing function variable
        try{
            console.log(functionVariable)
            funcVarCanBeAccessed = true
            msg += "The variable 'functionVariable' can indeed be accessed from the function context, so "
        }catch(ReferenceError){
            funcVarCanBeAccessed = false
            msg += "The variable 'functionVariable' cannnot be accessed from the function context, so "
        }
        if(usrAns.functionVariableAns === funcVarCanBeAccessed){
            msg += "GOOD JOB!\n\n"
        }else{
            msg += "YOU MISSED THIS ONE\n\n"
            errors++
        }

        // Testing block variable
        try{
            console.log(blockVariable)
            blockVarCanBeAccessed = true
            msg += "The variable 'blockVariable' can indeed be accessed from the function context, so "
        }catch(ReferenceError){
            blockVarCanBeAccessed = false
            msg += "The variable 'blockVariable' cannnot be accessed from the function context, so "
        }
        if(usrAns.blockVariableAns === blockVarCanBeAccessed){
            msg += "GOOD JOB!\n\n"
        }else{
            msg += "YOU MISSED THIS ONE\n\n"
            errors++
        }
        totalErrors += errors
        msg+=`You missed ${errors}/3 questions in this section`
        alert(msg)

      if (true) {
        // Block Scope
        let blockVariable = "Soy una variable de bloque.";

        // Testing in the block context
        errors = 0
        msg = ""
        alert("User, welcome to the block context")
        usrAns = askUser()
        // Testing global variable
        try{
            console.log(globalVariable)
            globVarCanBeAccessed = true
            msg = "The variable 'globalVariable' can indeed be accessed from the block context, so "
        }catch(ReferenceError){
            globVarCanBeAccessed = false
            msg = "The variable 'globalVariable' cannot be accessed from the block context, so "
        }

        if(usrAns.globalVariableAns === globVarCanBeAccessed){
            msg += "GOOD JOB!\n\n"
        }else{
            msg += "YOU MISSED THIS ONE\n\n"
            errors++
        }

        // Testing function variable
        try{
            console.log(functionVariable)
            funcVarCanBeAccessed = true
            msg += "The variable 'functionVariable' can indeed be accessed from the block context, so "
        }catch(ReferenceError){
            funcVarCanBeAccessed = false
            msg += "The variable 'functionVariable' cannnot be accessed from the block context, so "
        }
        if(usrAns.functionVariableAns === funcVarCanBeAccessed){
            msg += "GOOD JOB!\n\n"
        }else{
            msg += "YOU MISSED THIS ONE\n\n"
            errors++
        }

        // Testing block variable
        try{
            console.log(blockVariable)
            blockVarCanBeAccessed = true
            msg += "The variable 'blockVariable' can indeed be accessed from the block context, so "
        }catch(ReferenceError){
            blockVarCanBeAccessed = false
            msg += "The variable 'blockVariable' cannnot be accessed from the global block, so "
        }
        if(usrAns.blockVariableAns === blockVarCanBeAccessed){
            msg += "GOOD JOB!\n\n"
        }else{
            msg += "YOU MISSED THIS ONE\n\n"
            errors++
        }
        totalErrors += errors
        msg+=`You missed ${errors}/3 questions in this section`
        alert(msg)

        msg = `You missed a total of ${totalErrors}/9 questions, `
        if(totalErrors === 0){
            msg += "so you had a perfect score. Great job!"
        }else if(totalErrors === 1){
            msg += "so you almost had a perfect score. Great job!"
        }else if(totalErrors >= 2 && totalErrors <= 4){
            msg += "so you did a good job but definitely can improve. Keep studying!"
        }else{
            msg += "so you you missed most of the answers. Keep studying!"
        }
        alert(msg)

        console.log("Dentro del bloque:", blockVariable);
      }

      console.log("Dentro de la función:", functionVariable);
    }

    console.log("Fuera de la función:", globalVariable);
    testScope();
}

alert("Instructions: There are three variables\n1. 'globalVariable'\n2. functionVariable\n3. blockVariable\n" +
    "You will have to guess, based on the execution context (Global, function, block) what variables are accessible")
scope()