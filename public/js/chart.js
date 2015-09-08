require.config({
	paths: {
		template: 'lib/artTemplate/template-debug',
		socket: 'lib/socket.io-client/socket.io',
		echarts: 'lib/echarts/',
		domReady: 'lib/domReady/domReady'
	},
	shim: {
	}
})

require([
	'require',
	'domReady!',
	'template',
	'socket',
	'echarts',
	'echarts/chart/bar',
	'echarts/chart/line',
	'echarts/chart/pie',
	'echarts/chart/funnel',
	// 'echarts/config'
], function (require,domReady, template, io, echarts) {
	// 'use strict';
	console.log(io);
	console.log(template);
	console.log(echarts);

	var ec = echarts;
	// console.log(ecConfig);
	var ecConfig = require('echarts/config');
    myChart = echarts.init(document.getElementById('chart'));
	var myChart1 = echarts.init(document.getElementById('chart1'));
	var myChart2 = echarts.init(document.getElementById('chart2'));
	var myChart3 = echarts.init(document.getElementById('chart3'));
	var myChart4 = echarts.init(document.getElementById('chart4'));
	var myChart5 = echarts.init(document.getElementById('chart5'));
	var myChart6 = echarts.init(document.getElementById('chart6'));
	var myChart7 = echarts.init(document.getElementById('chart7'));
	// var myChart8 = echarts.init(document.getElementById('chart8'));
	var option7 = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			x: 'left',
			data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
		},
		toolbox: {
			show: true,
			feature: {
				mark: { show: true },
				dataView: { show: true, readOnly: false },
				magicType: {
					show: true,
					type: ['pie', 'funnel']
				},
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},
		calculable: false,
		series: [
			{
				name: '访问来源',
				type: 'pie',
				selectedMode: 'single',
				radius: [0, 70],
            
				// for funnel
				x: '20%',
				width: '40%',
				funnelAlign: 'right',
				max: 1548,

				itemStyle: {
					normal: {
						label: {
							position: 'inner'
						},
						labelLine: {
							show: false
						}
					}
				},
				data: [
					{ value: 335, name: '直达' },
					{ value: 679, name: '营销广告' },
					{ value: 1548, name: '搜索引擎', selected: true }
				]
			},
			{
				name: '访问来源',
				type: 'pie',
				radius: [100, 140],
            
				// for funnel
				x: '60%',
				width: '35%',
				funnelAlign: 'left',
				max: 1048,

				data: [
					{ value: 335, name: '直达' },
					{ value: 310, name: '邮件营销' },
					{ value: 234, name: '联盟广告' },
					{ value: 135, name: '视频广告' },
					{ value: 1048, name: '百度' },
					{ value: 251, name: '谷歌' },
					{ value: 147, name: '必应' },
					{ value: 102, name: '其他' }
				]
			}
		]
	};

	var option = {
		tooltip: {
			show: true
		},
		legend: {
			data: ['销量']
		},
		xAxis: [
			{
				type: 'category',
				data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series: [
			{
				"name": "销量",
				"type": "bar",
				"data": [5, 20, 40, 10, 10, 20]
			}
		]
	};
	var opt = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['蒸发量', '降水量']
		},
		toolbox: {
			show: true,
			feature: {
				mark: { show: true },
				dataView: { show: true, readOnly: false },
				magicType: { show: true, type: ['line', 'bar'] },
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},
		calculable: true,
		xAxis: [
			{
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			}
		],
		yAxis: [
			{
				type: 'value',
				splitArea: { show: true }
			}
		],
		series: [
			{
				name: '蒸发量',
				type: 'bar',
				data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			},
			{
				name: '降水量',
				type: 'bar',
				data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
			}
		]
	};

	
	myChart.setOption(option);
	myChart.on(ecConfig.EVENT.CLICK,function(e){
		console.log(e);
	})

	myChart1.setOption(opt);
	myChart2.setOption(option);
	myChart3.setOption(opt);
	myChart4.setOption(option);
	myChart5.setOption(opt);
	myChart6.setOption(option);
	myChart7.setOption(option7);
	// myChart8.setOption(option7);
	console.log(111);
	// var socket = io('http://localhost');
	// socket.on('news', function (data) {
	// 	console.log(data);
	// 	// socket.emit('my other event', { my: 'data' });
	// 	var s = 1;
	// 	sendMessage(socket,s);
	// });
	// socket.on('event', function (e) {
	// 	console.log(e);
	// });
	// socket.on('disconnect', function () {
	// 	console.log("this socket server is disconnect!!!");
	// });

	// function sendMessage(socket,s) {
	// 	s++;
	// 	socket.emit('my other event', { my: 'data' ,s:s});
	// 	setTimeout(function () {
	// 		sendMessage(socket,s);
	// 	}, 1000);
	// }
})

define([
	'require',
	'dependency'
], function(require, factory) {
	'use strict';
	
});