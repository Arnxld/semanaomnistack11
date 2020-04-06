const crypto = require('crypto')

module.exports = function generateUniId() {
    return crypto.randomBytes(4).toString('HEX')
}