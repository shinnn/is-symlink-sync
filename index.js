'use strict';

const {lstatSync} = require('fs');

module.exports = function isSymlinkSync(...args) {
	const arglen = args.length;

	if (arglen !== 1) {
		throw new RangeError(`Expected 1 argument (<string|Buffer|Uint8Array|URL>), but got ${
			arglen === 0 ? 'no' : arglen
		} arguments.`);
	}

	try {
		return lstatSync(args[0]).isSymbolicLink();
	} catch (err) {
		if (err.code && err.code.startsWith('ERR_INVALID_ARG_')) {
			throw err;
		}

		return false;
	}
};
