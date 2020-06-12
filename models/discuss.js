var mongoose = require('mongoose')
var schema = new mongoose.Schema({
    userId: { type: mongoose.SchemaTypes.String, ref: 'user' },
    productId: { type: mongoose.SchemaTypes.String, ref: 'Shops' },
    discuss: String,
    createDate: { type: Date, default: Date() }
})
module.exports = mongoose.model('Discuss', schema);