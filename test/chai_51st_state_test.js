var chai = require('chai')
var chai51stState = require('..')

var should = chai.should()
chai.use(chai51stState)

describe('chai-51st-state', function() {
	describe('bollocks', function() {
		context('with a falsy value', function() {
			it('should pass', function() {
				false.should.be.bollocks
			})

			context('with emphasis', function() {
				it('should pass', function() {
					false.should.be.fucking.bollocks
				})
			})
		})

		context('with a truthy value', function() {
			it('should error', function() {
				(function() { true.should.be.bollocks }).should.throw(Error)
			})
		})
	})

	describe('dogs.bollocks', function() {
		context('with a truthy value', function() {
			it('should not error', function() {
				true.should.be.dogs.bollocks
			})

			context('with emphasis', function() {
				it('should pass', function() {
					true.should.be.the.fucking.dogs.bollocks
				})
			})
		});

		context('with a falsy value', function() {
			it('should error', function() {
				(function() { false.should.be.dogs.bollocks }).should.throw(Error)
			})
		})
	})
})