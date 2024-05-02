const outerFunc = () =>{
    count = 0
    const innerFunc = (count1) =>{
        return count += count1
    }
    return innerFunc
}

const askNum = () =>{
    let ans
    do{
        ans = prompt("Please enter a number to add to the counter")
        if(isNaN(Number(ans))){
            alert("Please enter a number")
        }
    }while(isNaN(Number(ans)))
    return ans
}
let innerFunc, ans, ans1
innerFunc = outerFunc()
alert(`Welcome to the counter app. The initial value of the counter is ${innerFunc(0)}`)
do{
    ans = confirm("Please confirm if you want to increase the counter, or cancel to exit the program")
    if(ans === false){
        break
    }
    ans = askNum()
    innerFunc(Number(ans))
    ans1 = confirm("Do you want to show the counter?")
    if(ans1){
        alert(`The current value of the counter is ${innerFunc(0)}`)
    }
}while(ans)
alert("Thanks for using the app. Please come back soon")