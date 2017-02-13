module.exports = `const crypto = require('crypto');

module.exports = {
  generateSha256String: function (str) {
    var sha256 = crypto.createHash('sha256');
    return sha256.update(str, 'utf-8').digest('hex');
  },
  generateMd5String: function (str) {
    var md5 = crypto.createHash('md5');
    return md5.update(str).digest('hex');
  }
};`