'use strict';

const {lstatSync} = require('fs');

module.exports = function isSymlinkSync(...args) {
	const arglen = args.length;

	if (arglen !== 1) {
		throw new RangeError(`Expected 1 argument, but got ${arglen || 'no'} arguments instead.`);
	}

	try {
		return lstatSync(args[0]).isSymbolicLink();
	} catch (err) {
		if (err.name === 'TypeError') {
			throw err;
		}

		return false;
	}
};
