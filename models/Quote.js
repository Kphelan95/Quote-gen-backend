const mongoose = require('mongoose');

const QuoteSchema = mongoose.Schema({
    quote:{
        type: String,
        require:true
    },
    author:{
        type: String,
        require:true
    }
});

module.exports = mongoose.model('Quotes',QuoteSchema);