## Demo of Babel

1. Install the dependencies for this example: `npm install`

1. Look at the `package.json`, and note that `babel-cli` and `babel-preset-es2015` are in the devDependencies

1. Once `npm install` completes...Run the following: `babel --presets es2015 source.js -o destination.js`
	* `--presets es2015`: Enables the ES2015 (aka "ES6") preset
	* `source.js`: The file to transpile
	* `-o destination.js`: Tells Babel that this is meant to be a single file, and that the result should be saved as `destination.js`
1. Compare `source.js` (ES6) and `destination.js` (ES5), and spot the differences.
