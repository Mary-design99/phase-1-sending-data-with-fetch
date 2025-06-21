function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(response => response.json())
    .then(data => {
      // Append the new id to the DOM
      const newElement = document.createElement('p');
      newElement.textContent = `ID: ${data.id}`;
      document.body.appendChild(newElement);
    })
    .catch(error => {
      // Append error message to the DOM
      const errorElement = document.createElement('p');
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}