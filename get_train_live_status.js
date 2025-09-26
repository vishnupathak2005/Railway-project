document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form5');
  const resultBox = document.querySelector('.resultBox5');
  const tableBody = document.querySelector('#tableAppend5');  // Select the tbody with id 'tableAppend5'

  // Check if the table body is found
  if (!tableBody) {
      console.error("Table body element not found!");
      return;
  }

  form.addEventListener('submit', (event) => {
      event.preventDefault();  // Prevent form submission and page reload
      
      const trainNumber = document.querySelector('#trainNumber5').value;  // Get the selected train number
      
      if (trainNumber === "number") {
          alert('Please select a valid train number.');
          return;
      }

      // Hardcoded data for the specific train number
      const data = {
          data: {
              update_time: '2025-02-05 10:30 AM',
              source: 'BJU',
              destination: 'BDTS',
              total_distance: 1500,
              distance_from_source: 1200,
              current_station_name: 'BJU',
              current_state_code: 'RUNNING',
              current_location_info: [
                  { readable_message: 'Train is on time' },
                  { readable_message: 'Arriving at next station in 30 minutes' }
              ]
          }
      };

      // Clear any existing rows from the table
      tableBody.innerHTML = '';
      
      // Populate the table with hardcoded data
      const rows = [
          ['Update Time', data.data.update_time],
          ['Source', 'Barauni Junction'],
          ['Destination', 'Bandra Terminus'],
          ['Total Distance', `${data.data.total_distance} km`],
          ['Distance from Source', `${data.data.distance_from_source} km`],
          ['Current Station', data.data.current_station_name],
          ['Current State Code', data.data.current_state_code],
          ...data.data.current_location_info.map((location, index) => [`Message ${index + 1}`, location.readable_message])
      ];

      // Add rows to the table
      rows.forEach(([label, value]) => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${label}</td>
              <td class="amount">${value}</td>
          `;
          tableBody.appendChild(row);
      });

      // Show the result box (ensure it's visible)
      resultBox.style.display = 'block';
  });
});
