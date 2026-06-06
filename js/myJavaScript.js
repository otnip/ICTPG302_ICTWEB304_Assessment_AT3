//Get the button and dropdown content elements
const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');

//Listen for clicks on the dropdown button
dropdownButton.addEventListener('click', () => {
    // Toggle the visibility of the dropdown content
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
})

// Close the dropdown if the user clicks on the button again
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown button')) {
        // Close dropdown if the click is outside
        dropdownContent.style.display = 'none';
    }
});