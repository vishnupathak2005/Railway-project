document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#pnrForm3');
  const resultBox = document.querySelector('.resultBox3');
  const errorBox = document.querySelector('.errorBox3');

  form.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent form submission and page reload

      const pnrNumber = document.querySelector('#PNRNo3').value.trim();
      if (pnrNumber === '') {
          errorBox.textContent = 'Please enter a valid PNR number.';
          errorBox.style.display = 'block';
          resultBox.style.display = 'none';
          return;
      }

      // Clear error box if input is valid
      errorBox.style.display = 'none';

      // Sample Data (Replace with actual API data)
      const pnrData = {
          trainNumber: '17221',
          trainName: 'COA LTT EXPRESS',
          status: 'CNF',
          berth: '55',
          coach: 'B5',
          bookingDate: '27-08-2022',
          departureDate: '03-09-2022',
          departureTime: '09:08',
          arrivalDate: '03-09-2022',
          arrivalTime: '20:20',
          journeyDuration: '11:12',
          platformNumber: '1',
          bookingFare: '855',
          ticketFare: '855'
      };

      // Update the result box with the data
      document.getElementById('trainNumber3').textContent = pnrData.trainNumber;
      document.getElementById('trainName3').textContent = pnrData.trainName;
      document.getElementById('currentStatus3').textContent = pnrData.status;
      document.getElementById('berthNumber3').textContent = pnrData.berth;
      document.getElementById('coachId3').textContent = pnrData.coach;
      document.getElementById('bookingDate3').textContent = pnrData.bookingDate;
      document.getElementById('departureDate3').textContent = pnrData.departureDate;
      document.getElementById('departureTime3').textContent = pnrData.departureTime;
      document.getElementById('arrivalDate3').textContent = pnrData.arrivalDate;
      document.getElementById('arrivalTime3').textContent = pnrData.arrivalTime;
      document.getElementById('journeyDuration3').textContent = pnrData.journeyDuration;
      document.getElementById('platformNumber3').textContent = pnrData.platformNumber;
      document.getElementById('bookingFare3').textContent = pnrData.bookingFare;
      document.getElementById('ticketFare3').textContent = pnrData.ticketFare;

      // Show the result box
      resultBox.style.display = 'block';
  });
});
