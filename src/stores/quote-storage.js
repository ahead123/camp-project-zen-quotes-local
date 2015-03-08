var KEY_QUOTE_LIST = 'quotes-list'

var key = function(newKey) {
  return KEY_QUOTE_LIST = newKey || KEY_QUOTE_LIST;
}

var load = function() {
  return null;
}

var store = function(value) {
}

var push = function(value) {
}

var clear = function() {
}

QuoteStorage = {
  key: key,
  load: load,
  push: push,
  clear: clear
};

module.exports = QuoteStorage;
