function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
}); 
  
var ctx = document.getElementById('myChart').getContext('2d');

/* eslint-disable */
//margin for chart legend
Chart.Legend.prototype.afterFit = function () {
  this.height = this.height + 80;
};

const chart = new Chart(ctx, {

  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
        // 4
        label: 'Signups',
        // 5
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        // 6
        data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        // 7
        hidden: true,
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      labels: {
        fontSize: 14,
        usePointStyle: true,
        padding: 50,
      }
    }
  }
});