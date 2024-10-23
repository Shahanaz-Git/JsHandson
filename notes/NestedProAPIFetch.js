// Function to fetch user data from API
function fetchUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
            return response.json();  // Parse the user data as JSON
        });
}

// Function to fetch posts for a user by userId
function fetchUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch user posts");
            }
            return response.json();  // Parse the posts as JSON
        });
}

// Nested promise example
fetchUser(1)
    .then(userData => {
        console.log("User data:", userData);  // First API result: User data
        // Now, fetch the posts for this user
        return fetchUserPosts(userData.id);  // Nested promise to fetch posts
    })
    .then(userPosts => {
        console.log("User posts:", userPosts);  // Second API result: User posts
    })
    .catch(error => {
        console.error("Error:", error);
    });
