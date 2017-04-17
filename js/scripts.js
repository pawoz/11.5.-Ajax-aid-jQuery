var tweetLink = 'https://twitter.com/intent/tweet?text=',
	quoteUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?';

//getQuote	
function getQuote() {
	$.getJSON(quoteUrl, createTweet);
};

//createTweet
function createTweet(input) {
	if (!input.quoteAuthor.length) {
		input.quoteAuthor = 'Unknown author';
	};
	var tweetText = 'Quote of the day - ' + input.quoteText + ' Author: ' + input.quoteAuthor;

	//checkingQouteLength
	if (tweetText.length > 140) {
		getQuote();
	} else {
		var tweet = tweetLink + encodeURIComponent(tweetText);
		$('.quote').text(input.quoteText);
		$('.author').text("Author: " + input.quoteAuthor);
		$('.tweet').attr('href', tweet);
	}
};

//getQuoteAtStart
$(document).ready(function() {
	getQuote();
	$('.trigger').click(function() {
		getQuote();
	})
});