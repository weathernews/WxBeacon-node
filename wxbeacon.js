// wxbeacon.js
//
// Copyright(C) by Weathernews Inc. 2015
// =====================================

/**
 * Value Class of WxBeacon
 */
function WxBeacon(temperature, humidity, pressure, rssi) {
	this.temperature = temperature;
	this.humidity = humidity;
	this.pressure = pressure;
	this.rssi = rssi;
}

/**
 * Creates WxBeacon from iBeacon data
 */
WxBeacon.parse = function(beacon) {
	var temperature = (((beacon.major >> 4) & 0x03ff) * 100 - 30000) / 1000.0;
	var humidity = ((beacon.major << 3) & 0x0078) | ((beacon.minor >> 13) & 0x0007);
	var pressure = Math.floor(((beacon.minor & 0x1fff) * 0.1 + 300) * 10) / 10;
	return new WxBeacon(temperature, humidity, pressure, beacon.rssi);
};

/**
 * Bluetooth LE UUID of WxBeacon
 */
WxBeacon.UUID = "c722db4c5d911801beb5001c4de7b3fd";

module.exports = WxBeacon;
