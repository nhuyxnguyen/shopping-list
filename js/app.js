$(document).ready(function () {
	$('.add').click(function() {
		if($('input').val()) {
			$('.list').append('<p class="item">' + $('input').val() + '<button class="remove">X</button>' + '</p>');
			$('input').val('');
		}

		else{
			alert('Type in an item before you press Add.')
		}
	});

	$(document).on('click', '.item', function() {
		$(this).toggleClass('purchased');
	});

	$(document).on('click', '.remove', function () {
		$(this).closest('p').fadeOut('fast');
		$(this).hideClass('.purchased');
	});

	$(document).keydown(function (event) {
		if(event.which == 13) {
		if($('input').val()) {
			$('.list').append('<p class="item">' + $('input').val() + '<button class="remove">X</button>' + '</p>');
			$('input').val('');
		}
		else{
			alert('Type in an item before you press Enter.')
		}
		
		}

	});
});