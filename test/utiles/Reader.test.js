const Reader = require('./../../lib/utils/Reader')

describe('Prueba de Archivos',()=>{
    test('1. Algo Random',() =>{
        file = Reader.readJsonFile("explorers.json")
        expect(file).not.toBeUndefined();
    })
})