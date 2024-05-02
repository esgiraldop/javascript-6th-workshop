const checkInput = (options, ans) => {
  return ans.every(element => options.includes(element)) && ans.length === 5
}

const askInput = (options, msg) => {
  do{
    ans = prompt(msg).split(" ")
    if(checkInput(options, ans) === false){
      alert("Please input a valid answer")
    }
  }while(checkInput(options, ans) === false)
  return ans
}

let code = "\tconsole.log('Inicio del script');// --> (1)\n" +
"\t\n" +
"\tsetTimeout(() => {\n" +
"\tconsole.log('Primer setTimeout');// --> (2)\n" +
"\t}, 0);\n" +
"\n" +
"\tsetTimeout(() => {\n" +
"\t\tconsole.log('Segundo setTimeout');// --> (3)\n" +
"\t}, 0);\n" +
"\t\n" +
"\tPromise.resolve('Promesa resuelta').then(console.log);// --> (4)\n" +
"\n" +
"\tconsole.log('Fin del script');// --> (5)\n\n"

let msg = "Consider the following code:\n\n" +
code +
"What's the order of execution of the code? (Use the numbers pointed by the arrows. Enter the numbers separated by one space): "
let ans
const options = ['1', '2', '3', '4', '5']

// Asking and checking input
ans = askInput(options, msg)

//Checking the response is in the correct order
const crrctOrder = ['1', '5', '4', '2', '3']
const boolOrder = ans.map((elem, idx) => elem === crrctOrder[idx])
console.log("ans: ", ans)
console.log("crrctOrder: ", crrctOrder)
console.log("boolOrder: ", boolOrder)
if(boolOrder.every(element => element === true)){
  alert("Congrats. You entered the right order!")
}else{
  // There is at least one wrong answer
  boolOrder.forEach((element, idx) => {
    if (element === true){
      alert(`Correct! Line ${ans[idx]} is executed in order #${crrctOrder[idx]}`)
    }else
    {
      console.log(idx)
      switch(idx){
        case 0:
          alert(`Here should go line ${crrctOrder[idx]} instead of ${ans[idx]}. Remember Non-asyncronous tasks have priority over all since they stay in the stack until they are executed`)
          break
        case 1:
          alert(`Here should go line ${crrctOrder[idx]} instead of ${ans[idx]}. Remember Non-asyncronous tasks have priority over all since they stay in the stack until they are executed`)
          break
        case 2:
          alert(`Here should go line ${crrctOrder[idx]} instead of ${ans[idx]}. As at this point, all the Non-asyncronous tasks were took off the stack (executed), so when it comes to asyncronous tasks, promises have priority over callbacks (setTimeout is a callback-based function). This is because tasks in a promise are send to the micro-task queue in comparison to the callback-based functions whose tasks are sent to the macro queue. And the event loop gives priority to the micro tasks over the macro tasks.`)
          break
        case 3:
          alert(`Here should go line ${crrctOrder[idx]} instead of ${ans[idx]}, since out of the macro tasks (functions with SetTimeout), this one was the first to enter to the stack and in consequence the first to enter to macro tasks queue`)
          break
        case 4:
          alert(`Here should go line ${crrctOrder[idx]} instead of ${ans[idx]}, since out of the macro tasks (functions with SetTimeout), this one was the last to enter to the stack and in consequence the last to enter to macro tasks queue. In summary, this task has the lowest priority of all.`)
          break
      }
    }
  }
  )
  alert(code+`In summary, the correct order of execution is: ${crrctOrder}`)
}
