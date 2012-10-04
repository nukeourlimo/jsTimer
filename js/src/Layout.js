/**
* We Are nukeourlimo
*
* @author  Luke Mourino
* General layout js for jstimer
*
*/

/**
 * Single global namespace
 * @type {Object}
 */
var jstimer = jstimer || {};
var utils = jstimer.utils;

/**
 * Create re-usable 'Layout' class
 * @return {object} Layout
 */
jstimer.Layout = (function() {

	/**
	* Start
	* @constructor
	* @return {GeneralLayout}
	*/
	function Layout() {
		this.init();
		return this;
	}

	/**
	* Create a reference to Layout.prototype for neatness
	* @type {object}
	*/
	var LayoutProto = Layout.prototype;

	LayoutProto.init = function(){
		

		return this;
	};


	return Layout;

})();