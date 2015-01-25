$(document).ready(function () {
	changeContainer();
})

function changeContainer() {
	$(event.currentTarget).on('click', function() {
		var id = event.currentTarget.id;
		$(event.currentTarget).parent().hide();
		if (id === 'home') {
			$('.container1').siblings().hide();
			$('.container1').show();
		} else if (id === 'me') {
			$('.container2').siblings().hide();
			$('.container2').show();
		} else if (id === 'portfolio') {
			$('.container3').siblings().hide();
			$('.container3').show();
		} else if (id === 'contact') {
			$('.container4').siblings().hide();
			$('.container4').show();
		}
	})
}

		// switch (id) {
		// 	case "home":
		// 	$('.container1').show();
		// 	break;
		// 	case "me":
		// 	$('.container2').show();
		// 	break;
		// 	case "portfolio":
		// 	$('.container3').show();
		// 	break;
		// 	case "contact":
		// 	$('.container4').show();
		// 	break;
