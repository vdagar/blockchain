/* Configure levelDB and define the function to get and put data into DB */

const level	= require('level');
const chainDB	= './chaindata';
const db	= level(chainDB);

/* ================== Persist data with LevelDB =================
|  Learn more: level: https://github.com/Level/level     	|
|  =============================================================*/

// Add data to levelDB with key/value pair
exports.addBlockToLevelDB = function(key, value){
	return new Promise(function(resolve, reject) {
		db.put(key, value, function(error) {
			if (error) {
				reject(error);
			}

			resolve("Added Block # " + key);
		});
	});
}

// Get data from levelDB with key
exports.getBlockFromLevelDB = function(key){
	return new Promise(function(resolve, reject) {
		db.get(key, function(error, value) {
			if (error) {
				reject(error);
			}

			resolve(value);
		});
	});
}

exports.getBlockHeightFromLevelDB = function() {
	return new Promise(function(resolve, reject) {
		let height = -1;

		db.createReadStream().on('data', function(data) {
			height++;
		}).on('error', function(error) {
			reject(error);
		}).on('close', function() {
			resolve(height);
		});
	});
}

exports.getChainFromLevelDB = function() {
	return new Promise(function(resolve, reject){
		let dataArray = [];

		db.createReadStream().on('data', function (data) {
			dataArray.push(data);
		}).on('error', function (error) {
			reject(error);
		}).on('close', function () {
			resolve(dataArray);
		});
	});
}
