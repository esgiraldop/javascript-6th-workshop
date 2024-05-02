const askNum = () =>{
    let ans
    do{
       ans = prompt("Please enter an interval in seconds (Enter only positive numbers): ")
        if(isNaN(Number(ans)) || Number(ans) < 0){
            alert("Please enter a valid value")
        }
    }while(isNaN(Number(ans)) || Number(ans) < 0)
    return ans
}

let jsonPromise= new Promise((resolve, reject) =>{
    let ans, url
    //ans = askNum()
    // url = "https://jsonplaceholder.typicode.com/posts"
    url = "https://jsonplaceholder.typicode.com/posts_FAKEURL"
    const fetchFunc = () =>{
        fetch(url).
        then(response => {if(response.ok===true){return response.json()}
        else {
            throw new Error("Error no cargo")
        }}).
        then(data => resolve(data)).
        catch((err) => reject(err))
        console.log("Waiting time finished")
    }
    setTimeout( fetchFunc, 1000)
})

jsonPromise.then(response =>{
    alert("Here is your data:\n\n" + JSON.stringify

    (response, null, 2))
    console.log(response)
}
    ).then(() => alert("Data retrieved successfully")
).catch(response => alert(response))