const ExplorerController = require('./controllers/ExplorerController')
const express = require('express');
const { response } = require('express');
const res = require('express/lib/response');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/',(req,res)=>{
    res.json({message:"FizzBuzz Api welcome!"});
})

app.get("/v1/explorers/:mission",(req,res)=>{
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorerByMission(mission)
    res.json(explorersInMission)
})

app.get('/v1/explorers/amount/:mission',(req,res) =>{
    const mission =req.params.mission;
    const Amount= ExplorerController.getExplorersAmonutByMission(mission)
    res.json({mission:mission,quantity:Amount})
})

app.get('/v1/explorers/usernames/:mission',(req,res)=>{
    const mission= req.params.mission
    const usernames = ExplorerController.getExplorersUsernamesByMission(mission)
    res.json(usernames)
})
app.get('/v1/fizzbuzz/:score',(req,res)=>{
    const score =req.params.score
    const fizzbuzz = ExplorerController.getExploerersFizzbuzz(score)
    res.json({score:score,trick:fizzbuzz})
})
app.listen(port,()=>{
    console.log(`FizzBuzz API in localhost:${port}`)
})
