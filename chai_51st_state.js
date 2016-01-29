module.exports = function(chai, utils) {
  var Assertion = chai.Assertion
  var flag = utils.flag

  Assertion.addProperty('bollocks', function() {
    this.assert(this._obj == false, 
      'expected #{this} to be bollocks', 
      'expected #{this} not to be bollocks'
    )
  });

  Assertion.addProperty('dogs', function() {
    flag(this, 'negate', true)
  })
}
