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
    turnCount: 0,
    winner: '',

  	welcome: function(){
      $('button.mario').click(function () {
        $('body').addClass('fun');
        marioStart.play();
        ticTacToe.funImages();
        $('.hello').css('display', 'none');
        ticTacToe.clearBoard();
        
       });
      $('button.normal').click(function () {
        $('.hello').css('display', 'none');
        ticTacToe.clearBoard();
        $('body').removeClass('fun');
          

      })
    },

    funImages: function () {
      if ($('body').hasClass('fun')) {
        $('button.cell').click(function(){
        $('span').text('');

        if (ticTacToe.turnCount%2!==0) {
            $(this).find('img.X').show();
            mario.play();
          } else {
            $(this).find('img.O').show();
            bowser.play();
          }
        });
      }
    },


    playWinningAudio: function () {
      if ( $("body").hasClass("fun") ) {
        console.log(ticTacToe.winner);
        

        if (ticTacToe.winner === 'player1') {
          console.log(ticTacToe.winner);
          winner.play();
        } else
        if (ticTacToe.winner === 'player2'){
          lose.play();
        } else {
          noWin.play();
        }

        
        
      }
    },
  	
  	winningMove: function () {
  		var win = [	[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [ 1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]	];
        for (var i = 0; i < win.length; i++) {
          

          if ( $( win[i] ).not( this.player1 ).length === 0 && (this.player1.length >= 3)) {
            
            ticTacToe.winner = 'player1';

            this.player1Wins++;
            $('.playAgain h1').text('Player1 Wins!');
            $('.moveBlock').css('display', 'inline-block');
            $('.playAgain').css('display', 'inline-block');
            ticTacToe.playWinningAudio();
            return;
            
          } else if ( $( win[i] ).not( this.player2 ).length === 0 && (this.player2.length >= 3) ) {
            
            ticTacToe.winner = 'player2';
            this.player2Wins++;
            $('.playAgain h1').text('Player2 Wins!');
            $('.moveBlock').css('display', 'inline-block');
            $('.playAgain').css('display', 'inline-block');
            ticTacToe.playWinningAudio();
            return;

          } else if (!($( win[i] ).not( this.player1 ).length === 0) && (this.player1.length ===5 ) || !($( win[i] ).not( this.player2 ).length === 0) && (this.player2.length ===5 )) {
            $('.playAgain h1').text('This is a draw!');
            $('.moveBlock').css('display', 'inline-block');
            $('.playAgain').css('display', 'inline-block');
            ticTacToe.winner = 'draw';
            ticTacToe.playWinningAudio();
            return;
          }
          


        }
        
      },

         

    clearBoard: function () {
      $('span').text('');
      $('playAgain h1').text('');
      $('.moveBlock').css('display', 'none');
      $('img').css('display', 'none');

      this.winner = '';
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
      ticTacToe.welcome();
      $('.player1Score .points').text(ticTacToe.player1Wins);
      $('.player2Score .points').text(ticTacToe.player2Wins);
      
      $('button.cell').on('click', function(){
        var id = parseInt( $(this).attr('id') );

    //stops a square from being re-assigned when it has already been clicked
    //.trim() to make sure there is no blank space in the square already
        if ($(this).find("img.O").css("display") !== 'none' || $(this).find("img.X").css("display") !== "none"){
          return;
        }
        if ($(this).text().trim() !== ''){
          return;
        }

        //.attr()will find the attribute
        if (ticTacToe.turnCount % 2 === 0) {
          //put the text in a span so that it isn't the only child in the td
          $(this).find('span').text('X');
          ticTacToe.player1.push(id);
          ticTacToe.player1.sort();
          ticTacToe.board[id] = "X";
          
        } else {
          ticTacToe.funImages();
          ticTacToe.player2.push(id);
          ticTacToe.player2.sort();
          $(this).find('span').text('O');
          ticTacToe.board[id] = "O";
        }
      
        ticTacToe.winningMove();
        ticTacToe.turnCount++;

    
    });
    
    $('button.yes').on('click', function () {
      $('.playAgain').css('display', 'none');
      ticTacToe.clearBoard(); 
    })

    $('button.no').on('click', function () {
      $('.hello').show();
      $('.playAgain').css('display', 'none');


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

