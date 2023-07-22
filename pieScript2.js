const completionPercentage2 = 95;
const remainingPercentage2 = 100 - completionPercentage2;

const data2 = {
  datasets: [{
    data: [completionPercentage2, remainingPercentage2],
    backgroundColor: ['rgb(34, 214, 170)', 'transparent'],
    borderColor: ['transparent', 'rgb(211, 247, 238)'],
    borderWidth: 2,
  }, ],
};

const options2 = {
  cutout: '65%',
  responsive: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Top',
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
const ctx2 = document.getElementById('borderPieChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
  type: 'pie',
  data: data2,
  options: options2,
});