$(document).ready(function () {
	$('.add').click(function() {
		if($('input').val().trim()) {
			$('.list').append('<p class="item">' + $('input').val() + '<button class="remove">X</button>' + '</p>');
			$('input').val('');
		}

		else {
			alert('Type in an item before you press Add.')
		}			
	});

	$('.list').on('click', '.item', function() {
		$(this).toggleClass('purchased');
	});

	$('.list').on('click', '.remove', function () {
		$(this).closest('p').fadeOut('fast');
		return false;
	});

	$('#form').keydown(function (event) {
		if(event.which == 13) {
		if($('input').val().trim()) {
			$('.list').append('<p class="item">' + $('input').val() + '<button class="remove">X</button>' + '</p>');
			$('input').val('');
		}
		else{
			alert('Type in an item before you press Enter.')
		}
		
		}

	});
});