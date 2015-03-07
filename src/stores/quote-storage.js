var KEY_QUOTE_LIST = 'quotes-list'

var key = function(newKey) {
  return KEY_QUOTE_LIST = newKey || KEY_QUOTE_LIST;
}

var load = function() {
  var valueJSON = localStorage.getItem(KEY_QUOTE_LIST);
  var value = JSON.parse(valueJSON) || [];
  return value;
}

var store = function(value) {
  valueJSON = JSON.stringify(value);
  localStorage.setItem(KEY_QUOTE_LIST, valueJSON);
}

var push = function(value) {
  var list = load(KEY_QUOTE_LIST) || [];
  list.push(value);
  store(list);
}

var clear = function() {
  localStorage.removeItem(KEY_QUOTE_LIST);
}

QuoteStorage = {
  key: key,
  load: load,
  push: push,
  clear: clear
};

module.exports = QuoteStorage;
