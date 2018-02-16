var wordArray= ["orange","apple", "bannana", "watermelon", "peach", "pear", "pomegranate", "cherry"]//["zelda", "mario", "solid snake", "master chief", "marcus fenix", "kratos", "pikachu", "aloy"];
var wrongLettersArray=[];
var guessWord;
var wins = 0;
var guesses;
var lettersLeft;


function setUpGame(){

  


    


    guesses=12;
    var attemptsDiv = document.getElementById("attemptsLeftDiv");
    attemptsDiv.innerHTML="Attempts Left: " + guesses;
    
    var guessSpaceDiv = document.getElementById("guessSpace");
    

    if(typeof(guessWord)!='undefined')
    {
        document.getElementById("winDisplayDiv").innerHTML="";
        document.getElementById("winDisplayDiv").removeAttribute("onclick");
        for(var i=0; i<guessWord.length; i++)
        {
            if(guessWord[i]===" ")
            {
                            document.getElementById("space").remove();

            }
            else{
                            document.getElementById("letter"+i).remove();

            }
        }


        for(var i=0; i<wrongLettersArray.length; i++)
        {
            document.getElementById("wrongLetter"+(i+1)).remove();

        }
        wrongLettersArray = [];
    }

    var newLetterSpace;
    var wordIndex = Math.floor(Math.random() * wordArray.length);
    guessWord = wordArray[wordIndex];
    lettersLeft = guessWord.replace(" ", "").length;
    for(var i=0; i<guessWord.length; i++)
    {
         newLetterSpace=document.createElement("div");
        newLetterSpace.setAttribute("class","col-md-1");
        
        if(guessWord[i]===" ")
        {
            newLetterSpace.innerHTML=" ";
            newLetterSpace.setAttribute("id", "space");
        }
        else{
            newLetterSpace.setAttribute("id", "letter"+i);
            newLetterSpace.innerHTML="_";
        }
       
        
        guessSpaceDiv.appendChild(newLetterSpace);
    }

    acceptKeyInput();

}


function displayWrongLetter(letter){
    var wrongLetterDiv = document.getElementById("wrongSpace");
    var newWrongLetter= document.createElement("div");
    newWrongLetter.setAttribute("class","col-md-1");
    newWrongLetter.setAttribute("id", "wrongLetter"+(wrongLettersArray.length));
    newWrongLetter.innerHTML=letter;
    wrongLetterDiv.appendChild(newWrongLetter);
}

function acceptKeyInput()
{
    document.addEventListener("keyup", function keyPressed(event) {
        if(/^[a-zA-Z]/.test(event.key))
        {
    
            var key = event.key.toLowerCase();
            var foundLetter = false;
            for(var i=0; i<guessWord.length; i++)
            {
                if(key===guessWord[i])
                {
                    var correctLetterDiv = document.getElementById("letter"+i);
                    correctLetterDiv.innerHTML=guessWord[i];
                    foundLetter = true;
                    lettersLeft-=1;                    
                }
            }
    
            if(lettersLeft===0)
                    {
                        //document.removeEventListener("keyup", keyPressed(event));

                        var winDisplay = document.getElementById("winDisplayDiv");
    
                        winDisplay.innerHTML="YOU WIN";
                        winDisplay.setAttribute("class", "text-center");
                        winDisplay.style.color='#ff0000';
                        winDisplay.style.fontSize='100px';
                        winDisplay.style.marginTop='100px';
                       
    
                        wins+=1;
                        document.getElementById("winCounterDiv").innerHTML= "Wins: "+wins;
                        document.getElementById("winDisplayDiv").setAttribute("onclick", "setUpGame()");
                 
    
                    }
    
            if(!foundLetter)
            {
                
                
                if(wrongLettersArray.indexOf(key)<0){
                    guesses-=1;
                    document.getElementById("attemptsLeftDiv").innerHTML="Attempts Left: " +guesses;
                    wrongLettersArray.push(key);
                    displayWrongLetter(key);
                }
                
            }
    
            if(guesses===0)
            {
                //document.removeEventListener("keyup", keyPressed(event));
                var winDisplay = document.getElementById("winDisplayDiv");
                winDisplay.innerHTML="YOU LOSE";
                winDisplay.setAttribute("class", "text-center");
                winDisplay.setAttribute("onclick", "setUpGame()");
                winDisplay.style.color='#ff0000';
                winDisplay.style.fontSize='40px';
    
            }
        }
    });
}



setUpGame();

