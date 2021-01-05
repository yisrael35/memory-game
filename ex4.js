
const rows = 6;
const cols = 5;
let moves = 0;
let matches = 0;
let turn_counter = 0;
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

let movesTag = $("<h3></h3>").text("Moves: " + moves).attr('class',"tags");
    movesTag.attr('id','moves');  
let matchesTag = $("<h3></h3>").text("Matches: " + matches).attr('class',"tags");
    matchesTag.attr('id','matches');

let all_img_array = new Array(cols*rows);
let back_side_array = new Array(cols*rows);

let loadPage = function()
{
    let game_board = $("<div></div>").attr('id',"gameBoard");  
    let upper_line = $("<div></div>").attr('id','upperLine');  
    let new_game_btn = $("<button></button>").text("New game").attr('id','newGameBtn');
    
    new_game_btn.click(initNewGame);

    for (let index = 0; index < all_img_array.length; index++) {
        if (index< all_img_array.length/2) {      
            let single_img = $("<img></img>").attr('class',img_arr[index]);  
            single_img.attr('src',img_arr[index] );
            all_img_array[index] = single_img;
        }else{
            let single_img = $("<img></img>").attr('class',img_arr[index-(rows*cols/2)]);
            single_img.attr('src',img_arr[index-(rows*cols/2)] );
            all_img_array[index] = single_img;
        }
        $(all_img_array[index]).hide();
    }
    shuffle(all_img_array);
    for(let i = 0 ; i < back_side_array.length ; i++)
    {

        let back_side_img =  $("<img></img>").attr('id',i);
        back_side_img.attr('src', "./images/back_side.jpg");
        back_side_img.click(backSideClick);
        back_side_array[i] = back_side_img ;
    }
    
    upper_line.append(new_game_btn);
    upper_line.append(movesTag);
    upper_line.append(matchesTag);
    game_board.append(upper_line);
    let counter = 0;
    for(let i = 0 ; i < rows ; i++)
    {
        for(let j = 0 ; j < cols ; j++)
        {
            game_board.append(all_img_array[counter]);
            game_board.append(back_side_array[counter]);
            counter++;
        }
        game_board.append($("<br>"));
    }  

    
    $("body").append(game_board);
};

$(document).ready( 
      loadPage
);

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

let temp_id1 = -1;
let temp_id2 = -1;
function backSideClick(event) 
{
    
    if(turn_counter == 0)
    {
        $(back_side_array[event.target.id]).hide();
        $(all_img_array[event.target.id]).show();
        temp_id1 = event.target.id;
        turn_counter++;
    }
    else if(turn_counter == 1)
    {
        $(back_side_array[event.target.id]).hide();
        $(all_img_array[event.target.id]).show();
        temp_id2 = event.target.id;
        turn_counter++;
        moves++;
        $('#moves').text("Moves: " + moves);
        if(all_img_array[temp_id1].attr('class') == all_img_array[temp_id2].attr('class'))
        {
            matches++;
            $('#matches').text("Matches: " + matches);
            temp_id2 = -1;
            temp_id1 = -1;
            turn_counter = 0;
        }
    }
    else
    {
        $(back_side_array[temp_id1]).show();
        $(all_img_array[temp_id1]).hide();        
        $(back_side_array[temp_id2]).show();
        $(all_img_array[temp_id2]).hide();  
        turn_counter = 0;
        temp_id1 = -1;      
        temp_id2 = -1;      
    }
}
function initNewGame(event)
{
    moves = 0;
    matches = 0;
    $('#moves').text("Moves: " + moves);
    $('#matches').text("Matches: " + matches);
    temp_id1 = -1;
    temp_id2 = -1;
    counter = 0;
    turn_counter = 0;
    loadPage();
}