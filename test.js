'use strict';
var chai = require("chai");

function add(num1,num2){
	return num1+num2;
}

chai.should();

describe('first tests',function(){
	it("should return 10 with 5 and 5",function(){
		add(5,5).should.equal(10);
	});
});
