const completionPercentage3 = 59;
const remainingPercentage3 = 100 - completionPercentage3;

const data3 = {
  datasets: [{
    data: [completionPercentage3, remainingPercentage3],
    backgroundColor: ['rgb(34, 214, 170)', 'transparent'],
    borderColor: ['transparent', 'rgb(211, 247, 238)'],
    borderWidth: 2,
  }, ],
};

const options3 = {
  cutout: '65%',
  responsive: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Me',
      color: '#a9a9a9',
      position: 'bottom',
      align: 'center',
      font: {
        family: 'Roboto'
      },
      padding: 8,
      fullSize: true,
    },
    datalabels: {
      display: true,
      align: 'center',
      backgroundColor: '#ccc',
      borderRadius: 3,
      font: {
        size: 18,
      },
    },
  },
};
const ctx3 = document.getElementById('borderPieChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
  type: 'pie',
  data: data3,
  options: options3,
});