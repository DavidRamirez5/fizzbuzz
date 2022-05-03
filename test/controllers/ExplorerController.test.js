const ExplorerController= require('./../../lib/controllers/ExplorerController')
describe('Test para Class ExplorerController',()=>{
    test('1. Method - getExplorersByMission',()=>{
        const explorerslist= ExplorerController.getExplorerByMission('node')
        expect(explorerslist).not.toBeUndefined()
    })
    test('2. Method - getExplorerUsernamesByMission',()=>{
        const explorersUsernames= ExplorerController.getExplorersUsernamesByMission('node')
        expect(explorersUsernames).not.toBeUndefined()
    })
    test('3. Method - getExplorersAmonutByMission',()=>{
        const numExplorers= ExplorerController.getExplorersAmonutByMission('node')
        expect(numExplorers).toBe(10)
    })
})
describe("Test ExplorerController - Metodo (getExplorersFizzbuzz)",()=>{
    test('1. Numero divisible entre 3 y 5',()=>{
        const fizznumber= ExplorerController.getExploerersFizzbuzz(15);
        expect(fizznumber).toBe('FIZZBUZZ');
    })
    test('2. Numero divisible entre 3',()=>{
        const fizznumber= ExplorerController.getExploerersFizzbuzz(3);
        expect(fizznumber).toBe('FIZZ');
    })
    test('3. Numero divisible entre 5',()=>{
        const fizznumber= ExplorerController.getExploerersFizzbuzz(5);
        expect(fizznumber).toBe('BUZZ');
    })
    test('4. Numero no divisible entre 3 y 5',()=>{
        const fizznumber= ExplorerController.getExploerersFizzbuzz(1);
        expect(fizznumber).toBe(1);
    });
});