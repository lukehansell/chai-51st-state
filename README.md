# 51st State Style Chai Assertions

> Elmo: "Bollocks" is bad, whereas "the dog's bollocks" is good, huh? 

A plugin for chai to allow you to test what is bollocks and what is the dog's bollocks.

## Install
`npm i --save-dev chai-51st-state`

## Use
```
const chai = require('chai')
const chai51stState = require('chai-51st-state')
const should = chai.should()

chai.use(chai51stState)

it('does a test', () => {
    false.should.be.bollocks
    false.should.be.fucking.bollocks
    true.should.be.dogs.bollocks
    true.should.be.the.dogs.fucking.bollocks
})
```
