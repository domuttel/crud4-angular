var mongoose = require('mongoose-q')(require('mongoose'), {
spread:true});
var Schema = mongoose.Schema;

var Tatum = new Schema ({
  movie: String,
  year: Number,
  chickflick: Boolean,
});


mongoose.connect(process.env.MONGO_URI || "mongod://localhost/tatums");




module.exports = mongoose.model('tatums', Tatum);