/*!
 * is-symlink-sync | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-symlink-sync
*/
'use strict';

const {lstatSync} = require('graceful-fs');

module.exports = function isSymlinkSync(...args) {
  const arglen = args.length;

  if (arglen !== 1) {
    throw new RangeError(`Expected 1 argument, but got ${arglen || 'no'} arguments instead.`);
  }

  const [filePath] = args;

  if (typeof filePath !== 'string') {
    throw new TypeError(
      filePath +
      ' is not a string. Argument to is-symlink-sync must be a file path.'
    );
  }

  try {
    return lstatSync(filePath).isSymbolicLink();
  } catch (e) {
    return false;
  }
};
