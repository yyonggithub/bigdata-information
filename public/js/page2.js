require.config({
	paths: {
		template: 'lib/artTemplate/template-debug',
		socket: 'lib/socket.io-client/socket.io',
		domReady: 'lib/domReady/domReady',
		zrender: 'lib/zrender/zrender',
	}
})

require([
	'require',
	'domReady!',
	'template',
	'js/page2/allDayInstall',
	'js/page2/allDayUnInstall',
	'js/page2/allYearInstallBar',
	'js/page2/allYearUnInstallBar',
	'js/page2/networkOrderSelect',
	// 'js/page2/_networkOrderUnSelect',
], function (require, domReady, template, _allYearDeselect,_allYearSelect,_allYearInstallBar,_allYearUnInstallBar,_networkOrderSelect) {

	// var allYearDeselect = _allYearDeselect;
	// allYearDeselect.init('js-all-year-deselect');
	// allYearDeselect.setOption(88);
	
	// var allYearSelect = _allYearSelect;
	// allYearSelect.init('js-all-year-select');
	// allYearSelect.setOption(17);
	
	var allYearInstallBar = _allYearInstallBar;
	allYearInstallBar.init('js-all-year-deselect-1');
	allYearInstallBar.setOption();
	
	var allYearUnInstallBar = _allYearUnInstallBar;
	allYearUnInstallBar.init('js-all-year-select-1');
	allYearUnInstallBar.setOption();
	
	var networkOrderSelect = _networkOrderSelect;
	networkOrderSelect.init('js-network-order-select','宽带装机数');
	networkOrderSelect.setOption();
	
	var networkOrderUnSelect = _networkOrderSelect;
	networkOrderUnSelect.init('js-network-order-deselect','宽带拆机数');
	networkOrderUnSelect.setOption();
})