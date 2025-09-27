const fromCodeInput = document.querySelector('#fromCode6');
const toCodeInput = document.querySelector('#toCode6');
const tableBody = document.querySelector('#tableAppend6');
const submitForm = document.querySelector('#submitForm6');
const resultBox = document.querySelector('.resultBox6');
let resultBoxVisible = false;

submitForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Validate the form inputs
  const fromCode = fromCodeInput.value.trim();
  const toCode = toCodeInput.value.trim();
  console.log('Form Submitted: From Code -', fromCode, 'To Code -', toCode);  // Debug log

  if (!fromCode || !toCode) {
    alert('Please fill in all the details');
    return;
  }

  // Hardcoded train data
  const trainData = {
    bju: {
      bdts: [
        { train_number: '12345', train_name: 'Superfast Express' },
        { train_number: '67890', train_name: 'Bandra Mail' }
      ]
    },
    // You can add more station pairs here
  };

  // Check if the from and to station codes exist in the data
  if (trainData[fromCode] && trainData[fromCode][toCode]) {
    const trains = trainData[fromCode][toCode];
    console.log('Train Data Found:', trains);  // Debug log

    // Clear the table body before adding new rows
    tableBody.innerHTML = '';
    trains.forEach(train => {
      const row = `<tr><td><a href="#">${train.train_number}</a></td><td class="amount">${train.train_name}</td></tr>`;
      tableBody.insertAdjacentHTML('beforeend', row);
    });

    // Show the result box if it's not already visible
    if (!resultBoxVisible) {
      resultBox.style.display = 'grid'; // Make the result box visible
      resultBoxVisible = true;
    }
  } else {
    console.log('No train data found for the selected stations');  // Debug log
    alert('No trains found for the selected stations');
  }
});
