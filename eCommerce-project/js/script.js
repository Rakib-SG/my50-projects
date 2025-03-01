document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Create a FormData object from the form element
    const formData = new FormData(event.target);

    // Log the FormData content (for debugging purposes)
    for (let [name, value] of formData.entries()) {
        console.log(name, value);
    }

    // Send form data using the Fetch API
    fetch('https://example.com/submit', {
        method: 'POST',
        body: formData, // The FormData object is sent directly in the body
    })
    .then(response => response.json())  // Assuming the server responds with JSON
    .then(data => {
        // Handle success response from the server
        document.getElementById('response').innerHTML = 'Form submitted successfully!';
    })
    .catch(error => {
        // Handle any errors
        document.getElementById('response').innerHTML = 'Error submitting form.';
        console.error('Error:', error);
    });
});
