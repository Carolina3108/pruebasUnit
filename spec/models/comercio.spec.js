var mongoose = require('mongoose');
const comercio = require('../../models/comercio.js');
var Comercio = require('../../models/comercio.js')



describe('Test modelo Comercio',function(){

    beforeEach(function(done){
        var mongoDB = 'mongodb://localhost/emprendeapp';
        mongoose.connect(mongoDB, {useNewUrlParser: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection_error'));
        db.once('open', function() {
            console.log('Conectado!!');
            done();
        });
    })
    
    /*
    describe('Crear instancia',()=>{
      
        it('crear una instancia de comercio',()=>{
            var comerciotest = Comercio.Constructor("Comercio 1","Chalatenango")
            expect(comerciotest.nombre).toBe("Comercio 1")
            expect(comerciotest.direccion).toBe("Chalatenango")
        })
    })
    */
    
    /*
    describe('Comprobar si se inserto nuevo documento', ()  => {
        it('nuevo docuemnto', (done) => {
            let cantAnterior = 0, cantActual = 0;
            Comercio.todos((err,list)=>{
                 cantAnterior=list.length;
            });
            const comercioAgregar= Comercio.Constructor("Almacen Sauce ","La Palma");
            Comercio.guardar(comercioAgregar, function(err, cb){
                Comercio.todos((err,list)=>{
                    cantActual=list.length;
                    expect(cantActual).toBe(cantAnterior + 1);
                    done()
                });
                
            })
        })
    })
    */

    
    /*
    describe('Comprobar si se actualizo un documento', () => {
        it('documento actualizado', (done) => {
            let objetoA
            
            const comercioEditar= {nombre:"Hot Sauce", direccion:"La Palma, Chalatenango"};
            const id="615297551b9f803ad3be5cf2"
            Comercio.findById({_id:id},(err,objeto)=>{
                
                objetoA=objeto
            })

            Comercio.actualizar(id,comercioEditar,(err,objetoN)=>{
                const {nombre:nombreActual,direccion:direccionActual}=objetoN;
                const {nombre:nombreAnterior,direccion:direccionAnterior}=objetoA;
                expect(nombreActual).not.toBe(nombreAnterior);
                expect(direccionActual).not.toBe(direccionAnterior);
                done();
            });

        })
    })
    */
    
    
    
    /*
    describe('Buscar por nombre', ()=>{
        it('Buscar un documento usando el campo de nombre',(done)=>{
            Comercio.buscar('nombre', 'Hot Sauce',(error, list)=>{
                console.log(list);
                expect(error).withContext('Error en la consulta').toBeNull();
                expect(list.length).withContext("no hay elementos")
                .toBeGreaterThanOrEqual(1)
            done();
            })
        })
    })
    */
    
    
    describe('Eliminar', ()=>{
        it('Eliminar un documento',(done) => {
            const id = '615297551b9f803ad3be5cf2';
            comercio.findById(id, done);
            const cantA = Comercio.todos()
            Comercio.eliminar(id, (error) => {
            const cantN = cantA;
            expect(error).withContext('error en la consulta').toBeNull();
            expect(cantN).toBe(cantA - 1);
            done()
            })
        })
    })
    
    

})
