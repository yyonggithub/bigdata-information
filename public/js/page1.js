require.config({
	paths: {
		template: 'lib/artTemplate/template-debug',
		socket: 'lib/socket.io-client/socket.io',
		echarts: 'lib/echarts',
		domReady: 'lib/domReady/domReady'
	},
	shim: {
	}
})

require([
	'require',
	'domReady!',
	'template',
	'echarts',
	'echarts/chart/bar',
	'echarts/chart/line',
	'echarts/chart/pie',
	'echarts/chart/funnel',
	'echarts/chart/gauge'
], function (require, domReady, template, echarts) {
	// 光网端口覆盖率
	var lightNetwork = echarts.init(document.getElementById('js-light-network'));
	var dataStyle = {
		normal: {
			label: { show: false },
			labelLine: { show: false }
		}
	};
	var placeHolderStyle = {
		normal: {
			color: 'rgba(0,0,0,0)',
			label: { show: false },
			labelLine: { show: false }
		},
		emphasis: {
			color: 'rgba(0,0,0,0)'
		}
	};
	var lnOption = {
		title: {
			text: '75%',
			x: 'center',
			y: 'center',
			itemGap: 20,
			textStyle: {
				color: 'rgba(30,144,255,0.8)',
				fontFamily: '微软雅黑',
				fontSize: 35,
				fontWeight: 'bolder'
			}
		},
		series: [
			{
				name: '1',
				type: 'pie',
				clockWise: false,
				radius: [75, 85],
				itemStyle: dataStyle,
				data: [
					{
						value: 100,
						name: '68%的人表示过的不错'
					},
					{
						value: 0,
						name: 'invisible',
						itemStyle: placeHolderStyle
					}
				]
			},
			{
				name: '2',
				type: 'pie',
				clockWise: false,
				radius: [90, 95],
				itemStyle: dataStyle,
				data: [
					{
						value: 75,
						name: '29%的人表示生活压力很大'
					},
					{
						value: 25,
						name: 'invisible',
						itemStyle: placeHolderStyle
					}
				]
			}
		]
	};

	lightNetwork.setOption(lnOption);


	//移动开机用户数
	var mobileOpenNumber = echarts.init(document.getElementById('js-mobile-open-number'));
	var monOption = {
		tooltip: {
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [
			{
				name: '移动开机用户数',
				type: 'gauge',
				startAngle: 180,
				endAngle: 0,
				center: ['50%', '95%'],    // 默认全局居中
				radius: 105,
				axisLine: {            // 坐标轴线
					// show: false,
					lineStyle: {       // 属性lineStyle控制线条样式
						color: [
							[0.3, '#37a8b8'],
							[0.7, '#639e92'],
							// [0.1,'#639e92']
						],
						width: 60
					}
				},
				axisTick: {            // 坐标轴小标记
					// splitNumber: 10,   // 每份split细分多少段
					// length: 12,        // 属性length控制线长
				},
				pointer: {
					width: 12,
					length: '90%',
					color: 'rgba(255, 255, 255, 0.8)'
				},
				title: {
					show: false,
					offsetCenter: [0, '-60%'],       // x, y，单位px
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						color: '#fff',
						fontSize: 14
					}
				},
				detail: {
					show: true,
					backgroundColor: 'rgba(0,0,0,0)',
					borderWidth: 0,
					// borderColor: '#ccc',
					width: 100,
					height: 40,
					offsetCenter: [0, -40],       // x, y，单位px
					formatter: '{value}%',
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontSize: 18
					}
				},
				data: [{ value: 70, name: '完成率' }]
			}
		]
	};
	mobileOpenNumber.setOption(monOption);
	
	//客服服务平均通话时长
	var serviceCall = echarts.init(document.getElementById('js-fixed-network-service'));
	var scOption = {
		tooltip: {
			// trigger: 'item',
			// axisPointer:{
			// 	type:'none'
			// 	}
		},
		// calculable: true,
		grid: {
			// x: '15%',
			y: '5%',
			// x2: '15%',
			y2: '45%',
			borderWidth: "0"
		},
		itemStyle: {
			color: {
				seriesIndex: "#0ca19b"
			}
		},
		xAxis: [
			{
				type: 'value',
				boundaryGap: [0],
				axisLabel: {
					textStyle: {
						color: "#7BC2A4"
					}
				},
				splitLine: {
					show: false
				}
				// splitArea:{
				// 	show:true
				// }
			}
		],
		yAxis: [
			{
				type: 'category',
				data: [
					{
						value: '本地',
						textStyle: {
							color: '#7BC2A4'
						},
					},
					{
						value: '国内',
						textStyle: {
							color: '#EB6F99'
						},
					},
					{
						value: '港澳台',
						textStyle: {
							color: '#E9D13A'
						},
					},
					{
						value: '国际',
						textStyle: {
							color: '#38ACC6'
						},
					},
				],
				axisLabel: {
					textStyle: {
						color: "#7BC2A4"
					}
				},
				splitLine: {
					show: false
				}
			}
		],
		series: [
			{
				name: '固网业务量',
				type: 'bar',
				data: [24584, 57821, 39578, 40125]
			}
		]
	};
	serviceCall.setOption(scOption);
	
	//客服服务投诉量
	var serviceComplaint = echarts.init(document.getElementById('js-service-complaint'));
	var scpOption = {
		tooltip: {
			// trigger: 'axis'
		},
		// calculable: true,
		grid: {
			// x: '15%',
			y: '5%',
			// x2: '15%',
			y2: '45%',
			borderWidth: "0"
		},
		xAxis: [
			{
				type: 'value',
				boundaryGap: [0],
				axisLabel: {
					textStyle: {
						color: "#7BC2A4"
					}
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				}
			}
		],
		yAxis: [
			{
				type: 'category',
				axisLabel: {
					textStyle: {
						color: "#7BC2A4"
					}
				},
				splitLine: {
					show: false
				},
				data: ['差评', '较好', '满意']
			}
		],
		series: [
			{
				name: '2012年',
				type: 'bar',
				data: [30, 50, 50]
			}
		]
	}
	serviceComplaint.setOption(scpOption);
})