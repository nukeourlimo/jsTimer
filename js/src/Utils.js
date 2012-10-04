var jstimer = jstimer || {};
if (typeof console === 'undefined') {
	console = { log: function() {} };
}


jstimer.utils = {

	prefixes: ['-webkit-', '-moz-', '-ms-', '-o-', ''],

	randomBetween: function(low, high) {
		return Math.floor(Math.random()*(high-low+1)) + low;
	},

	optimiseDimensions: function(iWidth, iHeight, wWidth, wHeight){
		
		var self = this;
		var aspect = iWidth / iHeight;
		var obj = [];

		//if image height > image width
		iHeight = wHeight;
		iWidth = wHeight * aspect;

		//if our image dimensions width or height are larger than the window dimensions
		if((iHeight > wHeight) || (iWidth > wWidth)){

			//set them to be the max dimensions
			iHeight = wHeight;
			iWidth = wWidth;

			//change the dimensions of the smallest based on aspect ratio
			if(iHeight > iWidth) {
				iWidth = iHeight / aspect;
			} else {
				iHeight = iWidth / aspect;
			}

		}

		//write to return object
		obj.push(iWidth);
		obj.push(iHeight);

		return obj;
	},

	preloadImage: function(src, callback) {
		var _image;
		
		_image = $('<img />').bind("load", function() {

			callback(_image);
		
		}).attr('src', src);
	},

	queue: (function() {

		function nQueue() {
			this.queue = [];
		}

		var nQueueProto = nQueue.prototype;

		nQueueProto.push = function(fn) {
			this.queue.push(fn);
		};

		nQueueProto.execute = function(queueCallback, completeCallback) {
			var callbacksReceived = 0,
				callbacksNeeded = this.queue.length;

			if (callbacksNeeded < 1) {
				return completeCallback();
			}

			for (var i = this.queue.length - 1; i >= 0; i--) {
				var q = this.queue[i];
				q(function() {
					queueCallback.apply(this, arguments);

					if (++callbacksReceived >= callbacksNeeded) {
						completeCallback();
					}
				});
			}
		};

		return nQueue;

	})()

};