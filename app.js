// var scores, roundScore, activePlayer, gamePlaying;

// init()


// document.querySelector('.btn-roll').addEventListener('click', function() {
//     if (gamePlaying) {

//         // 1. Random number
//         var dice = Math.floor(Math.random() * 6) + 1;

//         // 2. Display result
//         var diceDOM = document.querySelector('.dice');
//         diceDOM.style.display = 'block';
//         diceDOM.src = 'dice-' + dice + '.png';

//         // 3. Update the score if the rolled number is not one.
//         if(dice !== 1) {
//             // Add Score
//             roundScore += dice;
//             document.querySelector('#current-' + activePlayer).textContent = roundScore;
//         } 
//         else {
            
//             nextPlayer();
//         }
//     }
// });

// document.querySelector('.btn-hold').addEventListener('click', function() {
//     if(gamePlaying) {
//         // Add Current score to Global score
//         scores[activePlayer] += roundScore;
//         // Update the UI
//         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//         // Check if player won the game.
//         if (scores[activePlayer] >= 100) {
//             document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//             document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//             document.querySelector('.player-'+ activePlayer + '-panel').style.backgroundImage = "url(winner.png)";
//             gamePlaying = false;
//         }
//         else {
//             // Next Player
//             nextPlayer();
//         }
//     }
    
// });

// function nextPlayer() {
//     // Next Player
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     roundScore = 0;
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';
//     //document.querySelector('.player-0-panel').classList.remove('active');
//     //document.querySelector('.player-1-panel').classList.add('active');
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');
//     //document.querySelector('.dice').style.display = 'none';
// }

// document.querySelector('.btn-new').addEventListener('click', init);

// function init() {
//     scores = [0,0];
//     activePlayer = 0;
//     roundScore = 0;

//     gamePlaying = true;

//     document.querySelector('.dice').style.display = 'none';

//     document.getElementById('score-0').textContent = 0;
//     document.getElementById('score-1').textContent = 0;
//     document.getElementById('current-0').textContent = 0;
//     document.getElementById('current-1').textContent = 0;
//     document.getElementById('name-0').textContent = 'Player 1';
//     document.getElementById('name-1').textContent = 'Player 2';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').style.backgroundImage = "none";
//     document.querySelector('.player-1-panel').style.backgroundImage = "none";
//     document.querySelector('.player-0-panel').classList.add('active');
// }

// var modal = document.getElementById('simpleModal');
// var modalBtn = document.querySelector('.rules');
// var closeBtn = document.getElementsByClassName('closeBtn')[0];

// modalBtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);
// window.addEventListener('click', clickOutside);

// function openModal() {
//     modal.style.display = 'block';
// }

// function closeModal() {
//     modal.style.display = 'none';
// }

// function clickOutside(e) {
//     if(e.target == modal){
//         modal.style.display = 'none';
//     }
// }
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
    document.querySelector('.player-0-panel').classList.add("active");
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
            document.getElementById('current-' + activePlayer).textContent = roundScore;
           togglePlayer();
        }
    }
    });
    document.querySelector('.btn-hold').addEventListener("click", function(){
        scores[activePlayer] += roundScore;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        if(scores[activePlayer] >= 10){
            //document.getElementById('name-'+activePlayer).innerHTML = winnerImg;
            document.querySelector('.player-'+activePlayer+'-panel').classList.add("winner");
            isGameOver = true;
        }else togglePlayer();
    });
    document.querySelector('.btn-new').addEventListener("click", init);
    function togglePlayer(){
        roundScore = 0;
        
        document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove("active");
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add("active");
        //toggle function esreger n hiideg
        // document.querySelector('.player-0-panel').classList.toggle("active");
        // document.querySelector('.player-1-panel').classList.toggle("active");
        diceImg.style.display = 'none';
    }
