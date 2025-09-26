document.addEventListener('DOMContentLoaded', () => {
  const trainNumberInput = document.querySelector("#trainNumber1");
  const form = document.querySelector('#form1');
  const resultBox = document.querySelector('.resultBox1');
  const tableBody = document.querySelector('#tableAppend'); // Select tbody by ID

  // Check if tableBody exists
  if (!tableBody) {
    console.error('tableBody not found!');
    return;
  }

  // Hardcoded data for train classes
  const trainClassData = {
    "19038": ["2A", "3A", "SL"], // Train Number: 19038 - Avadh Express
    "12452": ["1A", "EA", "EC", "2A", "3A"], // Train Number: 12452 - Shram Shakti Express
  };

  const trainClassDescription = new Map([
    ["1A", "First AC"],
    ["EA", "Executive Anubhati"],
    ["EC", "AC Executive Class"],
    ["2A", "Second AC"],
    ["FC", "First Class"],
    ["3A", "Third AC"],
    ["3E", "Third AC Economy"],
    ["CC", "AC Chair Car"],
    ["SL", "Sleeper"]
  ]);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the selected train number
    const trainNumber = trainNumberInput.value.trim();
    if (!trainNumber || trainNumber === "number") {
      alert('Please select a valid train number');
      return;
    }

    // Check if we have hardcoded data for the selected train number
    const availableClasses = trainClassData[trainNumber];
    if (!availableClasses) {
      alert('No data available for the selected train.');
      return;
    }

    // Clear previous results
    tableBody.innerHTML = '';

    // Create table rows for each class in the hardcoded data
    availableClasses.forEach(classCode => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const nameLink = document.createElement('a');
      nameLink.href = '#';
      nameLink.textContent = classCode;
      nameCell.appendChild(nameLink);

      const descriptionCell = document.createElement('td');
      descriptionCell.textContent = trainClassDescription.get(classCode);

      row.appendChild(nameCell);
      row.appendChild(descriptionCell);
      tableBody.appendChild(row);
    });

    // Show the result box if it's not already visible
    resultBox.classList.add('visible');
  });
});
