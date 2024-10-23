// Function to fetch list of dog breeds (like fetching a list of products)
function fetchDogBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch dog breeds');
            }
            return response.json();  // Parse the breeds list as JSON
        });
}

// Function to fetch a random image for a selected breed (like fetching reviews for a product)
function fetchBreedImage(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch image for breed: ${breed}`);
            }
            return response.json();  // Parse the image data as JSON
        });
}

// Nested promise example: Fetch breeds and a random image for a selected breed
fetchDogBreeds()
    .then(breedsData => {
        const breeds = Object.keys(breedsData.message);  // Extract breed names from the data
        console.log('List of dog breeds:', breeds);
        const selectedBreed = breeds[0];  // Selecting the first breed in the list
        console.log(`Fetching image for breed: ${selectedBreed}`);
        return fetchBreedImage(selectedBreed);  // Nested promise to fetch image for the breed
    })
    .then(imageData => {
        console.log('Random breed image:', imageData.message);  // Display the image URL
    })
    .catch(error => {
        console.error('Error:', error);  // Catch any errors in the chain
    });
    
