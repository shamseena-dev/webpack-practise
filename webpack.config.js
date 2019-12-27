const path = require('path');

module.exports = {
	mode: "development",
	devtool: "none",
	entry: "./src/app/third_depOnSecond.js",
	output: {
		filename : "main.js",
		path : path.resolve(__dirname, "dist")
	}

}