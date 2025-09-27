document.addEventListener("DOMContentLoaded", () => {
  const stationCodeInput = document.querySelector("#stationCode8");
  const resultBox = document.querySelector('.resultBox8');
  const errorBox = document.querySelector('.errorBox8');
  const tableBody = document.querySelector('#tableAppend8');

  // Check if the form exists before proceeding
  const submitForm = document.querySelector('#submitForm8');

  if (!submitForm) {
    console.error("submitForm8 element not found in the DOM!");
    // Dynamically create and append the form if necessary
    const newForm = document.createElement('form');
    newForm.id = 'submitForm8';
    newForm.innerHTML = `
      <div class="inputBox">
        <span>Station Code</span>
        <select name="" id="stationCode8">
            <option value="code" selected disabled>Code</option>
            <option value="BJU">BJU</option>
            <option value="DEL">DEL</option>
            <option value="BLR">BLR</option>
            <!-- Add more options here -->
        </select>
      </div>
      <input type="submit" value="submit" class="submit-btn submit-btn8">
    `;
    document.querySelector('.container').appendChild(newForm); // Assuming there's a container to append it to

    // Re-bind the event listener to the newly created form
    bindFormSubmission(newForm);
  } else {
    // Proceed with the existing form
    bindFormSubmission(submitForm);
  }

  // Function to handle form submission
  function bindFormSubmission(form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const stationCode = stationCodeInput.value.trim();
      if (!stationCode || stationCode === 'code') {
        alert('Please select a valid station code');
        return;
      }

      // Hardcoded data to simulate the response
      const hardcodedData = {
        data: [
          { code: 'BJU', eng_name: 'Bihar Sharif', state_name: 'Bihar' },
          { code: 'DEL', eng_name: 'Delhi', state_name: 'Delhi' },
          { code: 'BLR', eng_name: 'Bangalore', state_name: 'Karnataka' },
          // Add more stations as needed
        ]
      };

      // Search for the station in the hardcoded data
      const station = hardcodedData.data.find(s => s.code === stationCode.toUpperCase());

      if (station) {
        // Create a row and populate it with station data
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        const nameLink = document.createElement('a');
        nameLink.href = '#';
        nameLink.textContent = station.eng_name;
        nameCell.appendChild(nameLink);

        const stateCell = document.createElement('td');
        stateCell.textContent = station.state_name;

        row.appendChild(nameCell);
        row.appendChild(stateCell);

        // Clear any previous data and append the new row to the table body
        tableBody.innerHTML = ''; // Clear any previous rows
        tableBody.appendChild(row);

        // Clear the input and display the result
        stationCodeInput.value = '';

        // Show the result box and hide the error box
        resultBox.style.display = 'block'; // Show the result box
        errorBox.style.display = 'none'; // Hide the error box
      } else {
        alert('Station not found');
        errorBox.style.display = 'block'; // Show the error box
        resultBox.style.display = 'none'; // Hide the result box
      }
    });
  }
});
