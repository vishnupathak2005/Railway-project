document.addEventListener('DOMContentLoaded', () => {
  const trainNumberInput = document.getElementById('trainNumber0');
  const fromCodeInput = document.getElementById('fromCode');
  const toCodeInput = document.getElementById('toCode');
  const form = document.querySelector('#form0');
  const resultBox = document.querySelector('.resultBox0');
  const tableBody = document.querySelector('#tableAppend0');

  // Hardcoded data for train fares
  const fareData = {
    "19038": { // Train Number: 19038 - Avadh Express
      "ST": { // From: Surat
        "BVI": { // To: Borivali
          "general": [
            { classType: "2A", fare: 850 },
            { classType: "3A", fare: 550 }
          ],
          "tatkal": [
            { classType: "2A", fare: 1050 },
            { classType: "3A", fare: 700 }
          ]
        },
        "CNB": { // To: Kanpur
          "general": [
            { classType: "2A", fare: 1000 },
            { classType: "SL", fare: 300 }
          ],
          "tatkal": [
            { classType: "2A", fare: 1200 },
            { classType: "SL", fare: 450 }
          ]
        }
      }
    },
    "12452": { // Train Number: 12452 - Shram Shakti Express
      "NDLS": { // From: New Delhi
        "BVI": { // To: Borivali
          "general": [
            { classType: "2A", fare: 950 },
            { classType: "SL", fare: 350 }
          ],
          "tatkal": [
            { classType: "2A", fare: 1150 },
            { classType: "SL", fare: 500 }
          ]
        },
        "CNB": { // To: Kanpur
          "general": [
            { classType: "3A", fare: 700 },
            { classType: "SL", fare: 200 }
          ],
          "tatkal": [
            { classType: "3A", fare: 850 },
            { classType: "SL", fare: 300 }
          ]
        }
      }
    }
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validate the form inputs
    const trainNumber = trainNumberInput.value.trim();
    const fromCode = fromCodeInput.value.trim();
    const toCode = toCodeInput.value.trim();
    if (!trainNumber || trainNumber === 'number' || !fromCode || fromCode === 'code' || !toCode || toCode === 'code') {
      alert('Please fill all the details');
      return;
    }

    // Check if the train number exists in the hardcoded data
    if (!fareData[trainNumber]) {
      alert('No data available for the selected train');
      return;
    }

    // Check if the selected route (from -> to) exists
    const routeData = fareData[trainNumber][fromCode]?.[toCode];
    if (!routeData) {
      alert('No fare data available for this route');
      return;
    }

    // Update the table with hardcoded data
    tableBody.innerHTML = '';
    for (let i = 0; i < routeData.general.length; i++) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><a href="#">${routeData.general[i].classType}</a></td>
        <td class="amount">${routeData.general[i].fare}</td>
        <td class="amount">${routeData.tatkal[i].fare}</td>
      `;
      tableBody.appendChild(tr);
    }

    // Show the result box if it's not already visible
    resultBox.classList.add('visible');
  });
});
