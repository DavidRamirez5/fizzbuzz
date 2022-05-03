const ExplorerController= require('./../../lib/controllers/ExplorerController')
describe('Test para Class ExplorerController',()=>{
    test('1. Method - getExplorersByMission',()=>{
        const explorerslist= ExplorerController.getExplorerByMission('node')
        expect(explorerslist).not.toBeUndefined()
    })
})