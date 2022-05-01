const ExplorerService = require('./../../lib/services/ExplorerService')
const Reader = require('./../../lib/utils/Reader')
describe('Metodos ExplorerService',()=>{
    test('1. Metodo filterByMission',()=>{
        const explorers = Reader.readJsonFile("explorers.json")
        const explorersBymission= ExplorerService.filterbyMission(explorers,"node")
        expect(explorersBymission).not.toBeUndefined();
    })
})