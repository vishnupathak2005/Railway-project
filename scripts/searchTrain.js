document.addEventListener("DOMContentLoaded", () => {
  const trainNumberInput = document.querySelector("#trainNumber7");
  const tableCells = document.querySelectorAll('#tableAppend7 td');
  const submitForm = document.querySelector('#trainForm7');
  const resultBox = document.querySelector('.resultBox7');
  const errorBox = document.querySelector('.errorBox7');

  // Debugging: Check if elements are being selected properly
  console.log('Form element:', submitForm);
  console.log('Result Box element:', resultBox);
  console.log('Error Box element:', errorBox);

  // Check if form, result box, and error box are available
  if (!submitForm || !resultBox || !errorBox) {
    console.error("Required elements not found in the DOM!");
    return;
  }

  submitForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const trainNumber = trainNumberInput.value.trim();
    if (!trainNumber || trainNumber === 'number') {
      alert('Please select a valid train number');
      return;
    }

    // Debugging: Check if train number is valid
    console.log('Selected Train Number:', trainNumber);

    // Hardcoded data mimicking the API response
    const hardcodedData = {
      data: [
        {
          train_name: 'Avadh Express',
          route: 'Surat - Borivali',
          new_train_number: '19038'
        }
      ]
    };

    // Check if data is available
    if (!hardcodedData || !hardcodedData.data || hardcodedData.data.length === 0) {
      alert("No data found for the given train number.");
      return;
    }

    const train = hardcodedData.data[0];
    
    // Debugging: Log the train data
    console.log('Train data:', train);

    // Update table with hardcoded data
    tableCells[1].innerText = trainNumber; // Train Number
    tableCells[3].innerText = train.train_name || 'N/A'; // Train Name
    tableCells[5].innerText = train.route || 'N/A'; // Route
    tableCells[7].innerText = train.new_train_number || 'N/A'; // New Train Number

    // Show the result box (make it visible)
    resultBox.style.display = 'block';  // Using style directly to show the result box
    resultBox.classList.add('visible');

    // Hide the error box if result is found
    if (errorBox.classList.contains('visible')) {
      errorBox.classList.remove('visible');
    }
  });
});
