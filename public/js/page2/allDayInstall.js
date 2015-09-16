/* global echarts */
define([
	'require',
	'js/page2/theme'
], function (require,theme) {
	'use strict';
	var obj;
	var allDayInstall = {
		init: function (_elementId) {
			obj = echarts.init(document.getElementById(_elementId),theme);
		},
		setOption: function (_data) {
			var d = 100 - _data;
			var dataStyle = {
				normal: {
					label: { show: false },
					labelLine: { show: false }
				}
			};

			var aydOption = {
				title: {
					text: _data + '%',
					x: 'center',
					y: 'center',
					itemGap: 20,
					textStyle: {
						color: '#1da9a6',
						fontFamily: 'Microsoft YaHei',
						fontSize: 28,
						fontWeight: 'bolder'
					}
				},
				series: [
					{
						name: '1',
						type: 'pie',
						clockWise: false,
						radius: [0, 50],
						itemStyle: dataStyle,
						data: [
							{
								value: _data,
								name: '68%的人表示过的不错'
							},
							{
								value: d,
								name: 'invisible',
								// itemStyle: placeHolderStyle1
							}
						]
					},
					{
						name: '2',
						type: 'pie',
						clockWise: false,
						radius: [51, 60],
						itemStyle: dataStyle,
						data: [
							{
								value: _data,
								name: '68%的人表示过的不错'
							},
							{
								value: d,
								name: 'invisible',
								// itemStyle: placeHolderStyle1
							}
						]
					}
				]
			};
			obj.setOption(aydOption);
		},
	};
	return allDayInstall;
});