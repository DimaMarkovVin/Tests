var MathOp = artifacts.require("./MathOp.sol");

contract('MathOp', function(accounts) {
  it("should assert true", function(done) {
    var math_op = MathOp.deployed();
    assert.isTrue(true);
    done();
  });
  it("correctly sum?", function() {
    return MathOp.deployed().then(function(instance) {
      return instance.doSum(5,7);
    }).then(function(sum) {
      assert.equal(sum, 12, "nope");
    });
  });
  it("correctly sub?", function() {
    return MathOp.deployed().then(function(instance) {
      return instance.doSub(12,4);
    }).then(function(sub) {
      assert.equal(sub, 8, "nope");
    });
  });
  it("correctly mul?", function() {
    return MathOp.deployed().then(function(instance) {
      return instance.doMul(4,6);
    }).then(function(mul) {
      assert.equal(mul, 24, "nope");
    });
  });
});
