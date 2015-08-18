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

  	winningMove: function () {
  		var win = [	[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [ 1, 4, 7], [2, 5, 8], [1, 4, 8], [2, 4, 6]	];
 
  	},

  	allIndexesOfX: function () {
  		for (var i = 0; i < this.board.length; i++){
  			if (this.board[i] === "X") {
  				this.player1.push(i);
  			}
  			//removes all the duplicate elements from the player1 array
  			$('#dvallElements').html(this.player1.join("<br />"));
   	 		this.player1 = $.unique(this.player1);
    		$('#dvUniqueItems').html(this.player1.sort().join("<br />"));

  		}
  	},
	




  	allIndexesOfO: function () {
  		for (var i = 0; i < this.board.length; i++){
  			if (this.board[i] === "O") {
  				this.player2.push(i);
  			}
  			//removes all duplicate elements from the player2 array
  			$('#dvallElements').html(this.player2.join("<br />"));
   	 		this.player2 = $.unique(this.player2);
    		$('#dvUniqueItems').html(this.player2.sort().join("<br />"));
  		}
  	},


  	

	


  	init: function () {
    // jQuery stuff goes here
   		var turnCount = 0;
		$('button').on('click', function(){
		var id = parseInt( $(this).attr('id') );
		//.attr()will find the attribute
		if (turnCount%2 === 0) {
			$(this).text('X').addClass('X');
			ticTacToe.board[id] = "X";

			//$('button.X');
		} else {
			$(this).text('O').addClass('O');
			ticTacToe.board[id] = "O";
			$('button.O');
			
		}
		//console.log(ticTacToe.player1.push($('button.X').attr('id')));
		ticTacToe.allIndexesOfX();
		ticTacToe.allIndexesOfO();
		console.log(ticTacToe.player1);
		console.log(ticTacToe.player2);
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

