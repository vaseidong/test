/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-07-25 19:16:36
 * @version $Id$
 */
function aaa(a) {
		var a = 5;

		function bbb() {
			alert(a);
		}
		return bbb;
	}
	var c = aaa();
	c();