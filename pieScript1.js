const completionPercentage = 78;
const remainingPercentage = 100 - completionPercentage;

const data1 = {
  datasets: [{
    data: [completionPercentage, remainingPercentage],
    backgroundColor: ['rgb(34, 214, 170)', 'transparent'],
    borderColor: ['transparent', 'rgb(211, 247, 238)'],
    borderWidth: 2,
  }, ],
};

const options1 = {
  cutout: '65%',
  responsive: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Average',
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
const ctx1 = document.getElementById('borderPieChart1').getContext('2d');
const myChart1 = new Chart(ctx1, {
  type: 'pie',
  data: data1,
  options: options1,
});