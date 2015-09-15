require.config({
	paths: {
		template: 'lib/artTemplate/template-debug',
		socket: 'lib/socket.io-client/socket.io',
		echarts: 'lib/echarts',
		domReady: 'lib/domReady/domReady'
	}
})

require([
	'require',
	'domReady!',
	'template',
	'echarts',
	'echarts/chart/bar',
	'echarts/chart/line',
	'echarts/chart/pie'
], function (require, domReady, template, echarts) {
	var allYearDeselect = echarts.init(document.getElementById("js-all-year-deselect"));
	var dataStyle = {
		normal: {
			label: { show: false },
			labelLine: { show: false }
		}
	};
	var placeHolderStyle1 = {
		normal: {
			// color: ['#ff7f50', '#87cefa', '#da70d6', '#32cd32'],
			label: { show: false },
			labelLine: { show: false }
		},
		emphasis: {
			// color: '#000000',
			label: { show: false },
			labelLine: { show: false }
		}
	};
	var placeHolderStyle2 = {
		normal: {
			// color: '#3599B1',
			// color: ['#ff7f50', '#87cefa', '#da70d6', '#32cd32'],
			label: { show: false },
			labelLine: { show: false }
		},
		emphasis: {
			// color: '#000000',
			label: { show: false },
			labelLine: { show: false }
		}
	};
	var aydOption = {
		title: {
			text: '68%',
			x: 'center',
			y: 'center',
			itemGap: 20,
			textStyle: {
				color: '#1da9a6',
				fontFamily: 'Microsoft YaHei',
				fontSize: 35,
				fontWeight: 'bolder'
			}
		},
		series: [
			{
				name: '1',
				type: 'pie',
				clockWise: false,
				radius: [0, 60],
				itemStyle: dataStyle,
				data: [
					{
						value: 68,
						name: '68%的人表示过的不错'
					},
					{
						value: 32,
						name: 'invisible',
						itemStyle: placeHolderStyle1
					}
				]
			},
			{
				name: '2',
				type: 'pie',
				clockWise: false,
				radius: [62, 75],
				itemStyle: dataStyle,
				data: [
					{
						value: 68,
						name: '29%的人表示生活压力很大'
					},
					{
						value: 32,
						name: 'invisible',
						itemStyle: placeHolderStyle2
					}
				]
			}
		]
	};
	allYearDeselect.setOption(aydOption);
})