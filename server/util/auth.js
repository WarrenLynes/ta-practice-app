const crypto = require('crypto');

module.exports.hash = function (data) {
  const hash = crypto.createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
}

module.exports.createSessionHash = function () {
  return crypto.randomBytes(32).toString('hex');
}