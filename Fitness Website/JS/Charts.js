/* code to our chart and how it will be generated  */


const ctx = document.getElementById('HoursChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saterday'],
      datasets: [{
        label: '# of Hours Excersised',
        data: [2, 3, 1, 4, 3, 1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

const ctx2 = document.getElementById('CaloriesChart').getContext('2d');
const myChart = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saterday'],
    datasets: [{
      label: 'Calories Burned',
      data: [200, 340, 400, 320, 240, 300],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1,
      pointRadius: 5
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Calories Burned'
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Calories'
        }
      }
    }
  }
});

const ctx3 = document.getElementById('ExcersisesChart').getContext('2d');
const myRadarChart = new Chart(ctx3, {
  type: 'radar',
  data: {
    labels: ['Running', 'Cycling', 'Strength Training', 'Yoga', 'Swimming'],
    datasets: [{
      label: 'Today',
      data: [1, 1, 2, 0, 0],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Previous Excersise',
      data: [1, 0, 0, 2, 1],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Excersise comparison'
      }
    }
  }
});
