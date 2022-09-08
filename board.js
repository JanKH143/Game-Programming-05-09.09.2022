function generateBlock(solid, row, column) {
	/*Befüllt die "unter Arrays" mit Objekten*/
	return {
		solid: solid,
		row: row,
		column: column,
	}
}

function showBoard (board) {
	console.log(board.length);
	/*Zeigt das Spielfeld an*/

	for(let e = 0; e < board.length; e++){

		for(let d = 0; d < board[e].length; d++) {


			if (board[e][d].solid == true) {
				$('#spielfeld').append('<div class="solid">');
			}
			

		}

		
	}
}

function generateArray () {
	let board = [];
	for(let i = 0; i < 20; i++) {

		/*Erste for-Schleife kreirt die "unter Arrays"*/
		board [i] = [];

		if(i % 2 == 0) {
			for(let j = 0; j < 38; j++) {

				/*Zweite for-Schleife kreirt die "zweit Arrays"*/

				if(j % 2  == 0) {
					board [i][j] = generateBlock(true, i, j);

				}
				else {
					board [i][j] = generateBlock(false, i, j);
				}
			}
		}
		else {
			for(let j = 0; j < 38; j++) {

				/*Dritte for-Schleife kreirt auch "zweit Arrays"*/

				if(j % 2 == 0) {
					board [i][j] = generateBlock(false, i, j);
				}
				else {
					board [i][j] = generateBlock(true, i, j);
				}
			}
		}
	}

	return board;

}


showBoard(generateArray());

