pragma solidity ^0.4.18;

contract MathOp {
	function doSum(uint256 x, uint256 y) constant returns (uint256 sum) {
		sum = x + y;
		return sum;
	}
	function doSub(uint256 x, uint256 y) constant returns (uint256 sub) {
		require(x >= y);
		sub = x - y;
		return sub;
	}
	function doMul(uint256 x, uint256 y) constant returns (uint256 mul) {
		mul = x * y;
		return mul;
	}
}