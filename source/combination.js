
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
}

//module.exports = nextCombination;

/*1 2 3
1 2 4
1 2 5
1 3 4
1 3 5
1 4 5
2 3 4
2 3 5
2 4 5
3 4 5 */

var a = [3, 0, 4];
nextCombination(5, 3, a);

