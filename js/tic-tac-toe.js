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
    player1Wins: 0,
    player2Wins: 0,
    gameCount: 0,

  	

  	
  	winningMove: function () {
  		var win = [	[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [ 1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]	];
        for (var i = 0; i < win.length; i++) {
          
          // if ( ($( win[i] ).not( this.player1 ).length !== 0) && (this.player1.length + this.player2.length === 9) && ($( win[i] ).not( this.player2).length !== 0)) {
            

          //   $('playAgain h1').text('This is a draw!');
          //   $('.playAgain').css('opacity', '1');
          //   return;
          // } else

          if ( $( win[i] ).not( this.player1 ).length === 0 && (this.player1.length >= 3)) {
            
            this.player1Wins++;
            $('.playAgain h1').text('Player1 Wins!');
            $('.moveBlock').css('display', 'inline-block');
            $('.playAgain').css('display', 'inline-block');
            return;
            
          } else if ( $( win[i] ).not( this.player2 ).length === 0 && (this.player2.length >= 3) ) {
            
            this.player2Wins++;
            $('.playAgain h1').text('Player2 Wins!');
            $('.moveBlock').css('display', 'inline-block');
            $('.playAgain').css('display', 'inline-block');
            
            return;

          } else if (!($( win[i] ).not( this.player1 ).length === 0) && (this.player1.length ===5 ) ) {
            $('.playAgain h1').text('This is a draw!');
            $('.moveBlock').css('display', 'inline-block');
            $('.playAgain').css('display', 'inline-block');
            return;
          }
          


        }
        
      },

         

    clearBoard: function () {
      $('button.cell').text('');
      $('playAgain h1').text('');
      $('.moveBlock').css('display', 'none')
      this.board = [ null, null, null, null, null, null, null, null, null ];
      this.player1 = [];
      this.player2 = [];
      this.gameCount++;
      $('.player1Score .points').text(ticTacToe.player1Wins);
      $('.player2Score .points').text(ticTacToe.player2Wins);
     
      
      
      if (this.gameCount%2 !== 0) {
        this.player1 === this.player2;
        this.player2 === this.player1;

      }
    },

  	init: function () {
    // jQuery stuff goes here
      var turnCount = 0;
      $('.player1Score .points').text(ticTacToe.player1Wins);
      $('.player2Score .points').text(ticTacToe.player2Wins);
      $('button.cell').on('click', function(){
      var id = parseInt( $(this).attr('id') );
    
    //stops a square from being re-assigned when it has already been clicked
    //.trim() to make sure there is no blank space in the square already
      if ($(this).text().trim() !== ''){
          return;
    }
      //.attr()will find the attribute
      if (turnCount%2 === 0) {
        $(this).text('X').addClass('X');
        ticTacToe.player1.push(id);
        ticTacToe.player1.sort();
        ticTacToe.board[id] = "X";
        
      } else {
        
        ticTacToe.player2.push(id);
        ticTacToe.player2.sort();
        $(this).text('O').addClass('O');
        ticTacToe.board[id] = "O";
      }
      
      ticTacToe.winningMove();
      turnCount++;

    
    });
    
    $('button.yes').on('click', function () {
      $('.playAgain').css('display', 'none');
      ticTacToe.clearBoard(); 
    })

    $('button.no').on('click', function () {
      $('.goodbye').css('display', 'inline-block');

    });
  }
}

// then a minimal document ready:

$(document).ready(function () {
    ticTacToe.init();
});



 // this won't work since  siince you can't compare arrays.
          // if ($.inArray(win[i], this.player1) !== -1 && (this.player1.length >= 3) && $.inArray(win[i], this.player2) == -1) {
          //   return alert('Player1 wins!');
    // isDraw: function () {
    //   var win = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [ 1, 4, 7], [2, 5, 8], [1, 4, 8], [2, 4, 6] ];
    //     for (var i = 0; i < win.length; i++) {
    //       if ( ($( win[i] ).not( this.player1 ).length !== 0) && ($( win[i] ).not( this.player2 ).length !== 0 ) ) {
    //         return alert( 'This is a Draw!' );
    //       }
    //     }
    // },

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

