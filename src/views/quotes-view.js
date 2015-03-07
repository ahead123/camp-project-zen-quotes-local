var QuoteStorage = require('../stores/quote-storage');

var $newQuote;
var $addQuoteButton;
var $clearAllQuotesButton;
var $quoteList;

var renderQuote = function(quote) {
  quoteHTML = $("<li class='list-group-item'>" + quote + "</li>")
  $quoteList.append(quoteHTML)
}

var renderQuoteList = function(){
  $quoteList.html('')
  var quotes = QuoteStorage.load();
  for(var i=0; i < quotes.length; i++){
    quote = quotes[i];
    renderQuote(quote);
  }
}

var saveUserQuote = function(quote){
  QuoteStorage.push(quote);
  renderQuote(quote);
}

var hiClearQuoteList = function(event){
  QuoteStorage.clear();
  renderQuoteList();
}

var hiSaveUserQuote = function(event){
  var quote = $newQuote.val();
  saveUserQuote(quote);
  $newQuote.val('');
}

initialize = function() {
  $newQuote = $('input.new-quote');
  $addQuoteButton = $('button.add-quote');
  $clearAllQuotesButton = $('button.clear-all-quotes');
  $quoteList = $('ul.quote-list');

  $addQuoteButton.click(hiSaveUserQuote);
  $clearAllQuotesButton.click(hiClearQuoteList);
  renderQuoteList();
}

QuoteView = {
  initialize: initialize
}

module.exports = QuoteView;