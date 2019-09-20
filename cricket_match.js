module.exports = function CricketScoreKeeper() {

    var currentScore = 0;
    var wicket = 0;

    function addScore(string) {
       var score = string.split('');
        for (var i = 0; i < score.length; i++) {
            const element = score[i]
            if (element === "w") {
               wicket++;
            }
            if(element === "-"){
               return 0;
            }

            currentScore += Number(element);   
        }
    }
    function totalScore(){
       return currentScore;
    }
    function getwicket(){
        return wicket ;
    }

    return {
        addScore,
        totalScore,
        getwicket
    }
}