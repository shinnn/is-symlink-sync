/*!
 * is-symlink-sync | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-symlink-sync
*/
'use strict';

const lstatSync = require('graceful-fs').lstatSync;

module.exports = function isSymlinkSync(filePath) {
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
