var mongoose = require('mongoose');
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
            const comercioAgregar= Comercio.Constructor("Comercio shop","Chalate");
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
            
            const comercioEditar= {nombre:"comercio Prueba", direccion:"La Laguna"};
            const id="6144f6cee9ba99999e2d7fcb"
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
    
    describe('Buscar por nombre', ()=>{
        it('comprobar lista por nombre',(done)=>{
            Comercio.buscar('nombre', 'Comercio 01 modificado',(err, list)=>{
                console.log(list);
                expect(err).withContext('Error en la consulta').toBeNull();
                expect(list.length).withContext("no hay elementos")
                .toBeGreaterThanOrEqual(1);
            done();
            })
        })
    })
    

})