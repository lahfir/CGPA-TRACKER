const mongoose = require('mongoose');

const Sample = new mongoose.Schema(
    {
        Subject: {type: String},
        Credit : {type: String},
        Semester: {type: String}
    },
    {collection: 'Sample' }
)

var model = mongoose.model('Sample', Sample, 'Sample');
module.exports = model