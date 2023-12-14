// JavaScript code to handle adding new person and popup form

// Open popup form when "Add New Person" button is clicked
document.getElementById('addPersonBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'block';
  });
  
  // Close popup form
  function closePopup() {
    document.getElementById('popupForm').style.display = 'none';
  }
  
  // Handle submission of the new person form
  document.getElementById('newPersonForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const photoUrl = document.getElementById('photo').value;
    if (name.trim() !== '' && photoUrl.trim() !== '') {
      addNewPerson(name, photoUrl);
      document.getElementById('name').value = '';
      document.getElementById('photo').value = '';
      closePopup();
    } else {
      alert('Please fill in both fields.');
    }
  });
  
  // Function to add a new person to the displayed list
  function addNewPerson(name, photoUrl) {
    const peopleContainer = document.querySelector('.people-container');
    const newPerson = document.createElement('div');
    newPerson.classList.add('person');
    newPerson.innerHTML = `
      <img src="${photoUrl}" alt="${name}">
      <p class="profile-name">${name}</p>
    `;
    peopleContainer.appendChild(newPerson);
  }
  