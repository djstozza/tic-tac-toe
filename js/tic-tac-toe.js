//Tic tac toe consists of three rows of three squares
//Two players O and X
//Player selects boxes by clicking on the box and the box shows an X or a O
//



var ticTacToe = {
  	
  	//board consists of 3 rows and columns. The columns are illustrated by the row arrays
 	
  	board: [ 	null, null, null, 
  				null, null, null, 
  				null, null, null	],


  	player1: [],
  	player2: [],

  	



	


	


  	init: function () {
    // jQuery stuff goes here
   		var turnCount = 0;
   			$('button').on('click', function(){
    		var id = parseInt( $(this).attr('class') );
    		//.attr()will find the attribute
    		if (turnCount%2 === 0) {
    			$(this).text('X');
    			ticTacToe.board['class'] = "X";
    		} else {
    			$(this).text('O');
    			ticTacToe.board['class'] = "O";
    		}
    		console.log( ticTacToe.board );
    		turnCount++;
    	});
    	


   		
  	}
}

// then a minimal document ready:

$(document).ready(function () {
    ticTacToe.init();
});


  	// playerMove: function () {
  	// 	var turnCount = 0;
  	// 	$('button').find('.class').on('click', function(){
  	// 		if (turnCount%2 === 0){
  	// 			$(this).show('X');
  	// 		} else {
  	// 			$(this).text('O');
  	// 		}

  	// 		turnCount++;
  	// 	})

  	// },


	//need to switch the images once they're clicked
	// showX: function(){

	// $('button').click(function () {
	// 		$(this).find('.class').show();
	// 	});

	// },

	// showO: function () {
	// 	$('button.cell').click(function () {
	// 		$(this).find('img.O').show();
	// 	});
	// },

