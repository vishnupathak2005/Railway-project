document.addEventListener('DOMContentLoaded', () => {
  // Get form and inputs
  const classTypeInput = document.querySelector('#classType2');
  const fromCodeInput = document.querySelector('#fromCode2');
  const toCodeInput = document.querySelector('#toCode2');
  const trainNumberInput = document.querySelector('#trainNumber2');
  const dateInput = document.querySelector('#date2');
  const form = document.querySelector('#form2');
  const resultBox = document.querySelector('.resultBox2');
  const tableBody = document.querySelector('#tableAppend2');

  if (!form) {
    console.error('form2 element not found!');
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Validate the form inputs
    const classType = classTypeInput.value.trim();
    const fromCode = fromCodeInput.value.trim();
    const toCode = toCodeInput.value.trim();
    const trainNumber = trainNumberInput.value.trim();
    const date = dateInput.value.trim();
    
    if (!classType || classType === 'class' ||
        !fromCode || fromCode === 'code' ||
        !toCode || toCode === 'code' ||
        !trainNumber || trainNumber === 'number' ||
        !date || date === 'date') {
      alert('Please fill all the details');
      return;
    }

    try {
      // Hardcoded response data
      const data = {
        data: [
          {
            date: '2023-01-10',
            confirm_probability_percent: 90,
            current_status: 'CNF',
          },
          {
            date: '2023-01-11',
            confirm_probability_percent: 75,
            current_status: 'WL',
          },
          {
            date: '2023-01-12',
            confirm_probability_percent: 65,
            current_status: 'WL',
          }
        ]
      };

      console.log(data);

      // Clear previous results
      tableBody.innerHTML = '';

      // Loop through the seat availability data and update the table
      data.data.forEach(seat => {
        let probabilityClass = '';
        if (seat.confirm_probability_percent === undefined) {
          probabilityClass = 'high';
          seat.confirm_probability_percent = '100';
        } else if (seat.confirm_probability_percent >= 85) {
          probabilityClass = 'high';
        } else if (seat.confirm_probability_percent >= 75) {
          probabilityClass = 'mid';
        } else {
          probabilityClass = 'low';
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><a href="#">${seat.date}</a></td>
          <td class="amount ${probabilityClass}">${seat.confirm_probability_percent}%</td>
          <td class="amount">${seat.current_status}</td>
        `;
        tableBody.appendChild(tr);
      });

      // Show the result box if it's not already visible
      resultBox.classList.add('visible');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  });
});
