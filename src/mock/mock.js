var home = require('./home.json');
var cart = require('./cart.json');
var list = require('./list.json');


module.exports = function() {
  return {
    'home.php': home,
    'cart.php': cart,
    'list.php': list

  }
}
