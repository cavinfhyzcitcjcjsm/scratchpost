(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    ext.request(method, url){
	   requestMethod = method.toUpperCase();
	   fetch('url',
          	{method: 'method', body: JSON.stringify(params)})
          	.catch((error) => console.log(error));
    }
    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
	    ['R', '%n from/to %s', 'request', 'GET', '255.255.255.255']
        ]
    };

    // Register the extension
    ScratchExtensions.register('ScratchPost', descriptor, ext);
})({});
