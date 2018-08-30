var chart;
var legend;

var chartData = [
    {country: "陆金所", value: 10},
    {country: "玖富", value: 10},
    {country: "宜人贷", value: 10},
    {country: "小赢网金", value: 10},
    {country: "人人贷", value: 10},
    {country: "拍拍贷", value: 10},
    {country: "麻袋理财", value: 5},
    {country: "爱钱进", value: 5},
    {country: "桔子理财", value: 5},
    {country: "51人品", value: 5},
    {country: "开鑫金服", value: 5},
    {country: "积木盒子", value: 5},
    {country: "微贷网", value: 5},
    {country: "信而富", value: 2},
    {country: "你我贷", value: 5},
    {country: "宜贷网", value: 2},
    {country: "有利网", value: 5},
    {country: "翼龙贷", value: 5},
    {country: "网信", value: 2},
    {country: "投哪网", value: 5},
    {country: "和信贷", value: 2},
    {country: "团贷网", value: 2},
    {country: "PPmoney理财", value: 2},
    {country: "凤凰金融", value: 5},
    {country: "铜板街", value: 5},
    {country: "点融网", value: 2}
];

AmCharts.ready(function () {
    // 饼图
    chart = new AmCharts.AmPieChart();
    chart.dataProvider = chartData;
    chart.titleField = "country";
    chart.valueField = "value";
    chart.outlineColor = "";
    chart.outlineAlpha = 0.8;
    chart.outlineThickness = 2;

    // 3D
    chart.depth3D = 20;
    chart.angle = 30;

    // 图形写入
    chart.write("chartdiv");
});