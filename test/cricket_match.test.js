
const assert = require('assert');
const  CricketScoreKeeper = require('../cricket_match');

describe('cricket_match', function(){

    const cricketMatch = CricketScoreKeeper();

     it('should return 5 when the user entered "1-11-2" ', function(){
        cricketMatch.addScore('1-11-2');
        assert.equal(1, cricketMatch.totalScore());
     });

     it('should return 1 then the user entered "1-----" ', function(){
    
        cricketMatch.addScore('1-----');
        assert.equal(2, cricketMatch.totalScore());
     });
    
     it('should not add if the user entered a dash', function(){
    
        cricketMatch.addScore('-');
        assert.equal(0, cricketMatch.addScore('-'));
     });

     it('should increament a wicked if the user entered w', function(){
    
        cricketMatch.addScore('w');
        assert.equal(1, cricketMatch.getwicket('w'));
     });
});