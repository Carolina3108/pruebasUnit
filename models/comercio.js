var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ComercioSchema = new Schema({
    nombre:String,
    direccion:String
})

ComercioSchema.statics.Constructor=function(nombre,direccion){
    return new this({
        nombre:nombre,
        direccion:direccion
    })
}

ComercioSchema.statics.todos = function(cb){
    return this.find({},cb);
}


ComercioSchema.statics.guardar = function(comercio, cb){
    return comercio.save(cb);
}

ComercioSchema.statics.actualizar = function (id, comercio, cb) {
    return this.findByIdAndUpdate(id, { "$set": comercio }, { returnOriginal: false }, cb);
}

ComercioSchema.statics.buscar = function (prop, value, cb) {
    return this.find({ [prop]: value }, cb)
}

ComercioSchema.statics.eliminar = function (id, cb) {
    return this.findByIdAndDelete(id, {}, cb);
}



module.exports= mongoose.model('Comercio',ComercioSchema)
