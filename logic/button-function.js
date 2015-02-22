(function() {
	$(document).ready(function () {
		$('.music').on('click', function() {
			$('.music-window').fadeIn();
		})
		$('.fa-times').on('click', function() {
			$(this).parent().fadeOut();
		})
		$('.more').on('click', function() {
			$('.more-window').fadeIn();
		})

		$(document).on('keypress', function(e) {
			var code = e.keyCode;
			if (code === 49) {
				playRight();
				one++;
			} else if (code === 50) {
				playAmong();
				two++;
			} else if (code === 51) {
				playTeller();
				three++;
			}
		})
	})

	var one = 0, two = 0, three = 0;

	function playRight() {
		if (one % 2 === 0) {
			$('#theRight')[0].volume = 1;
			$('#theRight')[0].load();
			$('#theRight')[0].play();
		} else {
			$('#theRight')[0].pause();
		}
	}

	function playAmong() {
		if (two % 2 === 0) {
			$('#among')[0].volume = 1;
			$('#among')[0].load();
			$('#among')[0].play();
		} else {
			$('#among')[0].pause();
		}
	}

	function playTeller() {
		if (three % 2 === 0) {
			$('#teller')[0].volume = 1;
			$('#teller')[0].load();
			$('#teller')[0].play();
		} else {
			$('#teller')[0].pause();
		}
	}

})();