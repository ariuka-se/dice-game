//Тоглогчийн ээлжийг хадгалах хувьсагч 
var activePlayer = 0;//1r toglogch 0 2r toglogch 1
//Тоглогчдийн оноог цуглуулах хувьсагч
var scores = [0,0];
//Тоглогчийн ээлжийн оноо
var roundScore = 0;
//Шооны талыг хадгалах хувьсагч 1С 6 оноог санамсаргүйгээр авна
//document.querySelector('#score-1').innerHTML = "<em>hhs</em>"
const diceImg = document.querySelector('.dice');
// togloom duussan esehiig shalgah tuluviin huvisagch
var isGameOver ;
//var winnerImg = document.createElement(img, src= "winner.png");
function init(){
    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";    
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove("winner");
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove("active");
    document.querySelector('.player-0-panel').classList.add("active");
    document.getElementById('name-'+activePlayer).textContent = "Player" + (activePlayer+1);
    document.querySelector('.player-'+activePlayer+'-panel').style.backgroundImage = "none";
    diceImg.style.display = "none";
    activePlayer = 0;
    scores = [0,0];
    roundScore = 0;
    isGameOver = false;
}
init();
//shoog shideh event

document.querySelector('.btn-roll').addEventListener("click", function(){
    if(!isGameOver){
        diceImg.style.display = "block";
        var dice = Math.floor(Math.random()*6)+1;
        diceImg.src = "dice-" + dice +".png";
        console.log(activePlayer);
        if(dice !== 1){
            roundScore += dice;
            document.getElementById('current-'+activePlayer).textContent = roundScore;
        }else {
            scores[activePlayer] += roundScore;
            //document.getElementById('current-' + activePlayer).textContent = roundScore;
            togglePlayer();
        }
    }
    });
    document.querySelector('.btn-hold').addEventListener("click", function(){
        scores[activePlayer] += roundScore;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        if(scores[activePlayer] >= 100){
            document.getElementById('name-'+activePlayer).textContent = "Winner!";
            document.getElementById("score-"+activePlayer).textContent = scores[activePlayer];
            document.querySelector('.player-'+activePlayer+'-panel').classList.add("winner");
            document.querySelector('.player-'+activePlayer+'-panel').style.backgroundImage = "url(winner.png)";
            roundScore = 0;
            isGameOver = true;
        }else togglePlayer();
    });
    document.querySelector('.btn-new').addEventListener("click", init);
    function togglePlayer(){
        roundScore = 0;
        document.getElementById('current-'+activePlayer).textContent = roundScore;
        document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove("active");
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add("active");
        //toggle function esreger n hiideg
        // document.querySelector('.player-0-panel').classList.toggle("active");
        // document.querySelector('.player-1-panel').classList.toggle("active");
        diceImg.style.display = 'none';
    }
