

$( document ).ready(function() {
    var gameNumbers = {
        winNumber: 0,
        crystals: [],
        score: 0,
        wins: 0,
        loss: 0
    }
    
    function startGame(){
        
        //crystal 1-12
        //guess 18-120
        $("#wins").text("Wins: " +gameNumbers.wins);
        $("#losses").text("Losses: " +gameNumbers.loss);

        gameNumbers.score = 0;
        $("#scoreDisplay").text(gameNumbers.score)
        gameNumbers.winNumber = Math.floor(Math.random()*103)+18;
        for(var i =0; i<4; i++)
        {
            gameNumbers.crystals[i]=Math.floor(Math.random()*12)+1;
        }
        $("#winNumberDisplay").text(gameNumbers.winNumber);
    }
    
    $(".crystals").on("click", addToScore);
    
    function addToScore(){
        gameNumbers.score += gameNumbers.crystals[parseInt($(this).attr("data-name"))-1];
        $("#scoreDisplay").text(gameNumbers.score)

        if(gameNumbers.score===gameNumbers.winNumber){
            console.log("WWWIIIIIN!!!!!");
            gameNumbers.wins++;
            startGame();
        }
        else if(gameNumbers.score>gameNumbers.winNumber){
            console.log("LOOOOSSSE!!!!");
    
            gameNumbers.loss++;
            startGame();
        }
    }
    
    startGame();
});


