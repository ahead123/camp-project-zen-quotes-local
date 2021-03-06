
// display the quotes in quote-list
$(document).ready(function() {

	var $newquote;
	var $quotelist;
	var storedQuotes;

	$('button.add-quote').click(function() {
		// store the value of users input into a variable called userquote
		$newquote = $('input.new-quote').val();
		
		// and prepend quote to the quote list view
		$quotelist = $('ul.quote-list');
		$quotelist.prepend("<li>" + $newquote + "</li>");

		// clear the input value
		$('input.new-quote').val("");

		push();

	});

	if(localStorage.getItem('storedQuotes')) {
			$('ul.quote-list').html(localStorage.getItem('storedQuotes'));
		}

	function push() {
		storedQuotes = $('ul.quote-list').html();
		localStorage.setItem('storedQuotes', storedQuotes);
	}

	function clear() {
		window.localStorage.clear();
		location.reload();
		return false;
	}
	$('button.clear-all-quotes').click(clear);
	
});

