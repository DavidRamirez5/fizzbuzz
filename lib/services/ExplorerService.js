
class ExplorerService{
    static filterbyMission(explorers,mission){
        const explorersInNode = explorers.filter(explorer=>explorer.mission== 'node')
        return explorersInNode
    }
    static getAmountOfExplorersByMission(explorers,mission){
        const explorersInNode=ExplorerService.filterbyMission(explorers,mission)
        return explorersInNode.length
    }
}

module.exports= ExplorerService