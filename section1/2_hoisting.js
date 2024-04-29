const showCode = code =>{
  let msg = "Consider the following block of code:\n"
  msg += "<--\n" + code + "\n-->\n" + "Do you think it will be affected by Hoisting? "+
      "Confirm for 'yes', Cancel for 'no'"
  return confirm(msg)
}

const evalCode = code =>{
  try{
    eval(code)
    return true
  }catch{
    return false
  }
}

const askVariables = () => {
  let code = "console.log(\"Valor de a:\", a);\n" +
  "var a = 1;"
  let msg
  // 1st example
  if(showCode(code) === evalCode(code)){
    msg = "You are right! "
  }else{
    msg = "Incorrect! "
  }
  msg += "Hoisting affects variables declared with 'var', so the result of printing 'a' is 'undefined' "
  alert(msg)

  // 2nd example
  code = "console.log(\"Valor de b:\", b);\n"+
      "let b = 2;"
  msg = ""
  if(showCode(code) === evalCode(code)){
    msg = "You are right! "
  }else{
    msg = "Incorrect! "
  }
  msg += "Hoisting does not affect variables declared with 'let', so the result is an error of type 'ReferenceError' "
  alert(msg)

  // 3rd example
  code = "console.log(\"Valor de c:\", c);\n"+
      "const c = 3;"
  msg = ""
  if(showCode(code) === evalCode(code)){
    msg = "You are right! "
  }else{
    msg = "Incorrect! "
  }
  msg += "Hoisting does not affect variables declared with 'const', so the result is an error of type 'ReferenceError' "
  alert(msg)
}

const askFunctions = () => {
  let code = "console.log(\"Resultado de funcionDeclarada:\", funcionDeclarada());\n\n" +
  "function funcionDeclarada() {\n" +
      "  return \"Función declarada ha sido llamada.\";\n" +
      "}"
  let msg
  // 1st example
  if(showCode(code) === evalCode(code)){
    msg = "You are right! "
  }else{
    msg = "Incorrect! "
  }
  msg += "Hoisting affects declared functions, so the result is that calling the function actually works "
  alert(msg)

  //2nd example
  code = "console.log(\"Resultado de funcionExpresada:\", funcionExpresada());\n\n" +
  "const funcionExpresada = function () {\n" +
      "  return \"Función expresada ha sido llamada.\";\n" +
      "};"
  msg = ""
  if(showCode(code) === evalCode(code)){
    msg = "You are right! "
  }else{
    msg = "Incorrect! "
  }
  msg += "Hoisting does not affect expressed functions, so the result is that calling the function produces and error of type 'ReferenceError' "
  alert(msg)
}

const main = () =>{
  alert("Instructions: You will be prompted multiple block of codes and you will try to guess whether the code is affected by hoisting or not")
  askVariables()
  askFunctions()
}

main()