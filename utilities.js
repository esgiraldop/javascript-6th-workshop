const askOption = (msg, options) => {
    //Function to ask for an answer and return a validated option
    let ans
    do{
       ans = prompt(msg)
        if(options.includes(ans) === false){
            alert("Invalid option. Please try again")
        }
    }while(options.includes(ans) === false)
    return ans === '1'
}

export {askOption}