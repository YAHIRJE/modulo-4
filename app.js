document.getElementById("submitButton").addEventListener("click", function () {
    const dateInput = document.getElementById("dateInput").value;
    if (dateInput) {
        fetchImage(dateInput);
    } else {
        alert("Please enter a date in the format YYYY-MM-DD");
    }
});

function fetchImage(date) {
    const apiKey = "xUXR6eVVbH3bVQh2OHhiJZ8mwHIIfkXiWQ3QTtMc"; 
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.media_type === "image") {
                displayImage(data.url, data.title);
            } else {
                displayError("The selected date does not have an image.");
            }
        })
        .catch(error => displayError("An error occurred while fetching the image."));
}

function displayImage(imageUrl, title) {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = `
        <h2>${title}</h2>
        <img src="${imageUrl}" alt="${title}">
    `;
}

function displayError(message) {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = `<p>${message}</p>`;
}
