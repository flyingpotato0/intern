let slider = document.getElementById("range1");
let output = document.getElementById("val");
let slider2 = document.getElementById("range2");
let output2 = document.getElementById("val2");

output.innerHTML = slider.value;
output2.innerHTML = slider2.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

slider2.oninput = function() {
  output2.innerHTML = this.value;
}

const data = {
  labels: [20, 22.5, 25, 27.5, 30, 32.5, 35, 37.5, 40, 42.5, 45, 47.5, 50],
  datasets: [{
      label: 'Employer: K 73,500',
      backgroundColor: 'rgb(8, 0, 163)',
      data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
      barPercentage: 0.5,
    },
    {
      label: 'Employee: K 52,500',
      backgroundColor: 'rgb(73, 53, 255)',
      data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      barPercentage: 0.5,
    },
    {
      label: 'Total Interest: K 244.313',
      backgroundColor: 'rgb(133, 175, 255)',
      data: [60, 81, 102, 123, 143, 164, 185, 206, 227, 248, 268, 289, 310],
      barPercentage: 0.5,
    }
  ],
};


const options = {
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      ticks: {
        callback: function (value) {
          return [0, 50, 100, 150, 200, 250, 300].includes(value) ? value : '';
        }
      }
    }
  },
};

const ctx = document.getElementById('StackChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});