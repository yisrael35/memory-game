
const rows = 5;
const cols = 6;
let moves = 0;
let matches = 0;

let img_arr = [];
img_arr.push("./images/1.png");
img_arr.push("./images/2.png");
img_arr.push("./images/3.png");
img_arr.push("./images/4.png");
img_arr.push("./images/5.png");
img_arr.push("./images/6.png");
img_arr.push("./images/7.png");
img_arr.push("./images/8.png");
img_arr.push("./images/9.png");
img_arr.push("./images/10.png");
img_arr.push("./images/11.png");
img_arr.push("./images/12.png");
img_arr.push("./images/13.png");
img_arr.push("./images/14.png");
img_arr.push("./images/15.png");

$(document).ready(function() {
 
    let game_board = $("<div></div>").attr('id',"gameBoard");  
    let upper_line = $("<div></div>").attr('id','upperLine');  
    let new_game_btn = $("<button></button>").text("New game").attr('id','newGameBtn');
    let movesTag = $("<h3></h3>").text("Moves: " + moves).attr('class',"tags");  
    let matchesTag = $("<h3></h3>").text("Matches: " + matches).attr('class',"tags");  

    for(let i = 0 ; i < rows ; i++)
    {
        
        for(let j = 0 ; j < cols ; j++)
        {

        }
    }  
    
    
    upper_line.append(new_game_btn);
    upper_line.append(movesTag);
    upper_line.append(matchesTag);
    game_board.append(upper_line);
    $("body").append(game_board);  
});

function shuffle(img_arr) {
    var j, x, i;
    for (i = img_arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = img_arr[i];
        img_arr[i] = img_arr[j];
        img_arr[j] = x;
    }
    return img_arr;
}