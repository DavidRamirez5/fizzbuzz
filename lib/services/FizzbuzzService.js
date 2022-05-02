class FizzbuzzService{
    static applyValidationInExplorer(exploerer){
        if(exploerer.score % 3 ===0 && exploerer.score % 5 ===0){
            //return {name:exploerer.name,score: exploerer.score,trick:'FIZZBUZZ'}
            exploerer.trick="FIZZBUZZ";
            return exploerer;
        }else if(exploerer.score % 3 === 0){
            exploerer.trick="FIZZ";
            return exploerer;
        }else if(exploerer.score % 5 ===0 ){
            exploerer.trick="BUZZ";
            return exploerer;
        }else{
            exploerer.trick=exploerer.score;
            return exploerer;
        }
    }
}


module.exports= FizzbuzzService;