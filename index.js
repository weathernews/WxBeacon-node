var Bleacon = require("bleacon");
var WxBeacon = require("./wxbeacon");

Bleacon.on('discover', function(beacon) {
	// Parse
	var data = WxBeacon.parse(beacon);

	// Output to console
	console.log(data);
});

// Start scanning
Bleacon.startScanning(WxBeacon.UUID);
