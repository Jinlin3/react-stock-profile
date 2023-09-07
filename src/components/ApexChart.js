import Chart from 'react-apexcharts';

const ApexChart = ( data ) => {
  let dataList = [];

  data.data.map((data) => (
    dataList.push(data.vw)
  ));
  dataList = dataList.slice(0, 80);

  let changeList = [0];
  for (let i = 2; i < 80; i++) {
    changeList.push((dataList[i] - dataList[i-1]).toFixed(2));
  }
  console.log("datalist: " + dataList);
  console.log("changeList: " + changeList);


  const chartData = {
    options: {
      chart: {
        id: 'stock-prices'
      },
      xaxis: {
        categories: [
        '09:30 AM', '09:35 AM', '09:40 AM', '09:45 AM', '09:50 AM',
        '09:55 AM', '10:00 AM', '10:05 AM', '10:10 AM', '10:15 AM',
        '10:20 AM', '10:25 AM', '10:30 AM', '10:35 AM', '10:40 AM',
        '10:45 AM', '10:50 AM', '10:55 AM', '11:00 AM', '11:05 AM',
        '11:10 AM', '11:15 AM', '11:20 AM', '11:25 AM', '11:30 AM',
        '11:35 AM', '11:40 AM', '11:45 AM', '11:50 AM', '11:55 AM',
        '12:00 PM', '12:05 PM', '12:10 PM', '12:15 PM', '12:20 PM',
        '12:25 PM', '12:30 PM', '12:35 PM', '12:40 PM', '12:45 PM',
        '12:50 PM', '12:55 PM', '01:00 PM', '01:05 PM', '01:10 PM',
        '01:15 PM', '01:20 PM', '01:25 PM', '01:30 PM', '01:35 PM',
        '01:40 PM', '01:45 PM', '01:50 PM', '01:55 PM', '02:00 PM',
        '02:05 PM', '02:10 PM', '02:15 PM', '02:20 PM', '02:25 PM',
        '02:30 PM', '02:35 PM', '02:40 PM', '02:45 PM', '02:50 PM',
        '02:55 PM', '03:00 PM', '03:05 PM', '03:10 PM', '03:15 PM',
        '03:20 PM', '03:25 PM', '03:30 PM', '03:35 PM', '03:40 PM',
        '03:45 PM', '03:50 PM', '03:55 PM', '04:00 PM'],
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return "$" + value.toFixed(2);
          }
        },
        max: function (max) {
          return max + 1;
        },
        min: function (min) {
          return min - 1;
        }
      },
      colors: ["#ff2962"]
    },
    series: [{
      name: 'Price',
      data: changeList,
      colors: ['#9C27B0']
    }]
  }

  return (
    <Chart options={chartData.options} series={chartData.series} type="line" width='100%' height={320} />
  );
}
 
export default ApexChart;