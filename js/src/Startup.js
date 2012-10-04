/**
* We Are nukeourlimo
*
* @author  Luke Mourino
* Start up
*
*/

/**
 * Single global namespace
 * @type {Object}
 */
var jstimer = jstimer || {};
var utils = jstimer.utils;


/**
 * Create re-usable 'Startup' class
 * @return {object} Startup
 */
jstimer.Startup = (function() {

	/**
	* Start
	* @constructor
	* @return {Gallery}
	*/
	function Startup() {

		this.init();
		
		return this;
	}

	/**
	* Create a reference to Startup.prototype for neatness
	* @type {object}
	*/
	var StartupProto = Startup.prototype;

	StartupProto.init = function(){

		jstimer.ie = !!$('html').hasClass('lt-ie9');

		jstimer.instances = {};
		jstimer.instances.layout = new jstimer.Layout();

		return this;
	};

	
	return Startup;

})();
