(function () {

	var hideDivId

	eventExpand();

	transContent();

	function eventExpand() {
		$('.fs-title').click(function (e) {
			var id = $(this).attr('id');
			var showDivId = '#fs-content-' + id.split('-')[2];

			$(showDivId).slideToggle('slow');
		});
	}

	function transContent() {
		$('.fs-tab').click(function (e) {
			var id = $(this).attr('id');
			var tmp = id.split('-');
			var hideDivId = '';
			var showDivId = tmp[1] + '-' + tmp[2];

			if (tmp[2] == 'food') {
				hideDivId = tmp[1] + '-intro';
			} else {
				hideDivId = tmp[1] + '-food';
			}

			$(hideDivId).removeClass('active');
			$(showDivId).addClass('active');
		});
	}

}());
