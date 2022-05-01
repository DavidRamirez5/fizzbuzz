
class ExplorerService{
    static filterbyMission(explorers,mission){
        const explorersInNode = explorers.filter(explorer=>explorer.mission== 'node')
        return explorersInNode
    }
}

module.exports= ExplorerService