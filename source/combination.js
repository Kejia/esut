
/**

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    @license The GNU Lesser General Public License, http://www.gnu.org/licenses/lgpl-3.0.txt

    @author w.kejia

*/

/**
 * given a r-combination on [0, n), a, calculate the lexically next r-combination.
 * @param {number} n the number of elements
 * @param {number} r the number of selected elements
 * @param {Int32Array} a a r-length array on [0, n)
 * @return {Int32Array} a r-length array on [0, n)
 */
var nextCombination = function(n, r, a) {
	var i = 0;
	for (i = a.length - 1; i > -1; i--) {
		if (a[i] != n - r + i) break;
	}
	a[i] += 1;
	i++;
	while (i < a.length) {
		a[i] = a[i - 1] + 1;
		i++;
	}
	return a;
};

/**
* given a is one of n-choose-n permutations, calculate its lexically next permutation.
* @param {Array} a integer array
* @return integer array.
*/
var nextPermutation = function(a) {
	var x, i = a.length - 2;
	while (i > -1 && a[i] > a[i + 1]) i--;
	if (i > -1) {
		x = a.slice(0, i + 1);
		var y = a.slice(i + 1).sort(), j = 0;
		while (y[j] < x[i]) j++;
		[x[i], y[j]] = [y[j], x[i]];
		x = x.concat(y);
	} else x = a.slice().sort();
	return x;
};

//module.exports = nextCombination;
