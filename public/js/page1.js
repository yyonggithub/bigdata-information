require.config({
	paths: {
		template: 'components/artTemplate/dist/template-debug',
		socket: 'components/socket.io-client/socket.io',
		echarts: 'components/echarts/build/dist',
		domReady: 'components/domReady/domReady'
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
	'echarts/chart/funnel'
], function (require, domReady, template, echarts) {
	var lightNetwork = echarts;
	var lnOption = {
		tooltip:{
			trigger:'光网端口覆盖率'
		},
		
	}
})