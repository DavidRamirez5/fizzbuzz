const Reader = require('./../utils/Reader')
const ExplorerService = require('./../services/ExplorerService')
const FizzbuezzService = require('./../services/FizzbuzzService')
class ExplorerController{

    static getExplorerByMission(mission){
        const explorers= Reader.readJsonFile("explorers.json")
        return ExplorerService.filterbyMission(explorers,mission)
    }
    static getExplorersUsernamesByMission(mission){
        const explorers=Reader.readJsonFile("explorers.json")
        return ExplorerService.getExploerersUsernamesByMission(explorers,mission)
    }
    static getExplorersAmonutByMission(mission){
        const explorers= Reader.readJsonFile("explorers.json")
        return ExplorerService.getAmountOfExplorersByMission(explorers,mission)
    }
    static getExploerersFizzbuzz(number){
        return FizzbuezzService.applyValidationInNumber(number)
    }
}

module.exports= ExplorerController