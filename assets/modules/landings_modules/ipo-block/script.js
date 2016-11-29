$('#ipoTabs a').click(function (e) {
	var thisText = $(this).text();

	e.preventDefault();

	$('#ipoTabs .active').removeClass('active');
	$(this).tab('show');
	$(this).parent().addClass('active');
	$('#ipoTabs').parent().find('.dropdown-link').text(thisText);
});