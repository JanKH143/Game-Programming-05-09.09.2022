let board = generateArray();

let level1 = [{
	blocktype: 'dirt',
	solid: true,
	interactive: false,
	row: 15,
	column: 15,
}];


$(document).ready(function () {
	//arrayEditor(level1);
	showBoard(board);


});


function showBoard(board) {
	console.log(board);
	/*Zeigt das Spielfeld an*/

	for (let e = 0; e < board.length; e++) {

		for (let d = 0; d < board[e].length; d++) {
			let blocktype = board[e][d].blocktype;

			if (blocktype == 'stone') {
				$('#board').append('<div class="solid stone">' + board[e][d].row + board[e][d].column + '</div>');
			}
			else if (blocktype == 'torch') {
				$('#board').append('<div class="solid torch">' + board[e][d].row + board[e][d].column + '</div>');
			}
			else if (blocktype == 'sign') {
				$('#board').append('<div class="solid sign">' + board[e][d].row + board[e][d].column + '</div>');
			}
			else if (blocktype == 'stoneGround') {
				$('#board').append('<div class="solid stoneGround">' + board[e][d].row + board[e][d].column + '</div>');
			}
			else if (blocktype == 'dirt') {
				$('#board').append('<div class="solid dirt">' + board[e][d].row + board[e][d].column + '</div>');
			}
			else if (blocktype == 'air') {
				$('#board').append('<div>' + board[e][d].row + board[e][d].column + '</div>');
			}
			else {
				$('#board').append('<div class="notFound">' + 'Texture not found' + '</div>');
				console.log('Error: Wrong blocktype used/Texture not found')
			}


		}


	}
}

function generateArray() {
	let board = [];
	for (let i = 0; i < 20; i++) {

		/*Erste for-Schleife kreirt die "unter Arrays"*/
		board[i] = [];

		for (let j = 0; j < 38; j++) {

			/*Zweite for-Schleife kreirt die Objekte in der Array und setzt solid auf true oder false*/

			if (i > 17) {
				board[i][j] = generateBlock('stone', true, false, i, j);
			}
			else if (j == 18) {
				board[i][j] = generateBlock('stone', true, false, i, j);
			}
			else if (j == 13 && i == 17) {
				board[i][j] = generateBlock('stone', true, false, i, j);
			}

			else {
				board[i][j] = generateBlock('air', false, false, i, j);
			}
		}
	}
	return board;
}

function generateBlock(blocktype, solid, interactive, column, row) {
	/*Befüllt die "unter Arrays" mit Objekten*/
	return {
		blocktype: blocktype,
		solid: solid,
		interactive: interactive,
		column: column,
		row: row
	}
}

function arrayEditor(levelNum) {

	for (let d = 0; d < levelNum.length; d++) {
		let blocktype = levelNum[d].blocktype;

		if (blocktype == 'stone' || blocktype == 'dirt') {
			board[levelNum[d].row][levelNum[d].column] = generateBlock(blocktype, true, false, levelNum[d].row, levelNum[d].column);
			console.log('stone');
		}
		else {
			console.log('Error: ArrayEditor - not found' + levelNum[d].blocktype);
		}

	}

	return levelNum
}