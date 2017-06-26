
var assert = require('assert');
var nextCombination = require('../source/combination');

describe('combination', function() {
  describe('nextCombination()', function() {
    it('given [3, 0, 4], its next 3-5-combination should be [3, 1, 2]', function() {
		assert.deepEqual([3, 1, 2], nextCombination(5, 3, [3, 0, 4]));
    });
  });
});
