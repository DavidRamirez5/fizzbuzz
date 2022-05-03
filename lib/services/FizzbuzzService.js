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

    static applyValidationInNumber(number){
        if(number % 3 ===0 && number % 5 ===0){
            return  "FIZZBUZZ";
        }else if(number % 3 === 0){
            return "FIZZ";
        }else if(number % 5 ===0 ){
            return "BUZZ";
        }else{
            return number;
        }
    }

}


module.exports= FizzbuzzService;