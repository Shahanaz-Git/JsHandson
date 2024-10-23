// Fetching user data using the JSONPlaceholder API
function fetchUserData(UserId){
    return fetch(`https://jsonplaceholder.typicode.com/users/${UserId}`)
    .then(response=>{
         // Check if the response is successful (status code 200-299)
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON response
    });
}
fetchUserData(2)
.then(Userdata=>{
    console.log("User data fetched successfully:",Userdata);
}).catch(error=>{
        console.log("Error fetching user data:", error);
});

//output :{id: 2, name: "Ervin Howell", userna...