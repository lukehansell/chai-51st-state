# 51st State Style Chai Assertions

> Elmo: "Bollocks" is bad, whereas "the dog's bollocks" is good, huh? 

A plugin for chai to allow you to test what is bollocks and what is the dog's bollocks.

## Install
`npm i --save-dev chai-51st-state`

## Use
```
var chai = require('chai')
var chai51stState = require('chai-51st-state')

chai.use(chai51stState)

it('does a test', () => {
    false.should.be.bollocks
    true.should.be.dogs.bollocks
})
```