module.exports = function(chai, utils) {
  var Assertion = chai.Assertion
  var flag = utils.flag

  Assertion.addChainableMethod('bollocks', function() {
    var obj = utils.flag(this, 'object');
    this.assert(obj == false, 
      'expected #{this} to be bollocks', 
      'expected #{this} not to be bollocks'
    )
  }, function() {
    flag(this, 'bollocks', true)
  })

  Assertion.addProperty('dogs', function() {
    flag(this, 'negate', true)
  })
}
