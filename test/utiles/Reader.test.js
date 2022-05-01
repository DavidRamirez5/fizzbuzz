const Reader = require('./../../lib/utils/Reader')

describe('Prueba de Archivos',()=>{
    test('1. Leyendo archivos',() =>{
        file = Reader.readJsonFile("explorers.json")
        expect(file).not.toBeUndefined();
    })
})