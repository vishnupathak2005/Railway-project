document.addEventListener('DOMContentLoaded', function() {
  const trainNumberInput = document.querySelector('#trainNumber4');
  const form = document.querySelector('#form4');
  const resultBox = document.querySelector('.resultBox4');
  const tableBody = document.querySelector('#tableAppend4'); // Ensure this exists in your HTML

  // Check if tableBody exists
  if (!tableBody) {
    console.error('Table body element with id "tableAppend4" not found!');
    return; // Exit if table body is not found
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    console.log('Submit button clicked'); // Check if the event listener is triggered

    // Validate the form inputs
    const trainNumber = trainNumberInput.value.trim();
    if (!trainNumber || trainNumber === 'number') {
      alert('Please select a train number');
      return;
    }

    // Sample hardcoded data to simulate the API response
    const data = {
      data: {
        route: [
          { day: 'Monday', station_name: 'Surat', state_name: 'Gujarat', stop: true },
          { day: 'Tuesday', station_name: 'Vadodara', state_name: 'Gujarat', stop: true },
          { day: 'Wednesday', station_name: 'Mumbai', state_name: 'Maharashtra', stop: true },
          { day: 'Thursday', station_name: 'Bandra', state_name: 'Maharashtra', stop: true },
        ]
      }
    };

    console.log(data); // Check if data is structured correctly

    // Clear the table before adding new data
    tableBody.innerHTML = '';

    // Loop through data and populate the table
    for (let i = 0; i < data.data.route.length; i++) {
      const route = data.data.route[i];
      if (route.stop) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><a href="#">${route.day}</a></td>
          <td class="amount">${route.station_name}</td>
          <td class="amount">${route.state_name}</td>
        `;
        console.log('Row added:', tr); // Log the row to check if it's being created
        tableBody.appendChild(tr); // Append row to the table
      }
    }

    // Show the result box if it's not already visible
    resultBox.classList.add('visible');
  });
});
