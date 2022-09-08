let board = generateArray();

$(document).ready(function () {
	showBoard(board);

});


function showBoard (board) {
	console.log(board);
	/*Zeigt das Spielfeld an*/

	for(let e = 0; e < board.length; e++){

		for(let d = 0; d < board[e].length; d++) {


			if (board[e][d].blocktype == 'stone') {
				$('#board').append('<div class="solid stone">'+board[e][d].row+board[e][d].column+'</div>');
			} 
			else if (board[e][d].blocktype == 'air') {
				$('#board').append('<div>'+board[e][d].row+board[e][d].column+'</div>');
			}
			else {
				$('#board').append('<div>'+ 'Texture unavailable'+'</div>');
			}


		}

		
	}
}

function generateArray () {
	let board = [];
	for(let i = 0; i < 20; i++) {

		/*Erste for-Schleife kreirt die "unter Arrays"*/
		board [i] = [];

			for(let j = 0; j < 38; j++) {

				/*Zweite for-Schleife kreirt die Objekte in der Array und setzt solid auf true oder false*/

				if(i > 17) {
					board [i][j] = generateBlock('stone', false, true, i, j);

				}
				else if(j == 0 && i > 10) {
					board [i][j] = generateBlock('stone', false, true, i, j);

				}
				else if(j == 37 && i > 15) {
					board [i][j] = generateBlock('stone', false, true, i, j);

				}
				else if((j == 16 && i > 16 )||(j == 17 && i > 16)) {
					board [i][j] = generateBlock('stone', false, true, i, j);

				}
				else {
					board [i][j] = generateBlock('air', false, false, i, j);

					
				}
			}
	}


	return board;

}

function generateEmptyArray () {
	let emptyBoard = [];
	for(let i = 0; i < 20; i++) {

		/*Erste for-Schleife kreirt die "unter Arrays"*/
		board [i] = [];

			for(let j = 0; j < 38; j++) {

				//Erstellt leeres board

					board [i][j] = generateBlock(false, i, j);

			}
	}

	return board;

}

function generateBlock(blocktype, solid, interactive, row, column) {
	/*Befüllt die "unter Arrays" mit Objekten*/
	return {
		blocktype: blocktype,
		solid: solid,
		interactive: interactive,
		row: row,
		column: column,
	}
}

function arrayEditor (levelNum) {

	let level1 = [{	solid: true,
					row: 15,
					column: 15,}];


	return levelNum


}