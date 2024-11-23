document.addEventListener('DOMContentLoaded', function () {
  // Ensure body is empty before writing the message
  document.body.innerHTML = '';  // Clear any existing content in the body
  // Write the string to the page
  document.body.textContent = 'DOM load success';
});
