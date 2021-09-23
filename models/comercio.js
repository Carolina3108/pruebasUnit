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

ComercioSchema.statics.actualizar = function(id, comercio, cb){
    
    return this.findByIdAndUpdate({_id:id},{"$set":comercio},cb);
}

ComercioSchema.statics.buscar = function(id, comercio, cb){
    
    return this.findOne({"$set":comercio},cb);
}

ComercioSchema.statics.eliminar = function(id, comercio, cb){
    
    return this.findByIdAndDelete({_id:id},{"$set":comercio},cb);
}



module.exports= mongoose.model('Comercio',ComercioSchema)