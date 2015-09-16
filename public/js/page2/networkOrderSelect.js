/* global echarts */
define([
	'require',
	'js/page2/theme'
], function (require, theme) {
	'use strict';
	var obj = {};
	var option = {
		title: {
			text: '宽带装机数',
			// subtext: '纯属虚构'
			textStyle: {
				color: "#1da9a6"
			}
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['意向', '预购', '成交']
		},
		grid: {
			y: "40px",
			y2: "30px",
			x2: "10px"
		},
		// calculable: true,
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series: [
			{
				name: '成交',
				type: 'line',
				smooth: true,
				itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [10, 12, 21, 54, 260, 830, 710]
			},
			{
				name: '预购',
				type: 'line',
				smooth: true,
				itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [30, 182, 434, 791, 390, 30, 10]
			},
			{
				name: '意向',
				type: 'line',
				smooth: true,
				itemStyle: { normal: { areaStyle: { type: 'default' } } },
				data: [1320, 1132, 601, 234, 120, 90, 20]
			}
		]
	};
	var networkOrderSelect = {
		init: function (_element,_title) {
			option.title.text =_title;
			obj = echarts.init(document.getElementById(_element), theme);
		},
		setOption: function (_data) {
			obj.setOption(option);
		},
	}
	return networkOrderSelect;
});