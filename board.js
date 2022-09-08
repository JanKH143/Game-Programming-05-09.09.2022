let board = generateArray();


let level1=[
{blocktype: 'stone',	solid: true,	interactive:false,	row: 17,	column:9,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 16,	column:10,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 17,	column:10,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 15,	column:11,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 16,	column:11,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 17,	column:11,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 14,	column:13,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 14,	column:14,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 14,	column:15,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 17,	column:20,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 17,	column:21,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 16,	column:21,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 17,	column:22,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 17,	column:28,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 16,	column:29,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 15,	column:30,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 15,	column:31,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 15,	column:32,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 15,	column:33,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 16,	column:34,},
{blocktype: 'stone',	solid: true,	interactive:false,	row: 17,	column:35,},
];



$(document).ready(function () {
	arrayEditor(level1);
	showBoard(board);
	

});


function showBoard (board) {
	console.log(board);
	/*Zeigt das Spielfeld an*/

	for(let e = 0; e < board.length; e++){

		for(let d = 0; d < board[e].length; d++) {
			let blocktype = board[e][d].blocktype;

			if (blocktype == 'stone') {
				$('#board').append('<div class="solid stone">'+board[e][d].row+board[e][d].column+'</div>');
			} 
			else if (blocktype == 'torch') {
				$('#board').append('<div class="solid torch">'+board[e][d].row+board[e][d].column+'</div>');
			} 
			else if (blocktype == 'sign') {
				$('#board').append('<div class="solid sign">'+board[e][d].row+board[e][d].column+'</div>');
			} 
			else if (blocktype == 'stoneGround') {
				$('#board').append('<div class="solid stoneGround">'+board[e][d].row+board[e][d].column+'</div>');
			}
			else if (blocktype == 'dirt') {
				$('#board').append('<div class="solid dirt">'+board[e][d].row+board[e][d].column+'</div>');
			}
			else if (blocktype == 'closedDoorUpper') {
				$('#board').append('<div class="solid closedDoorUpper">'+board[e][d].row+board[e][d].column+'</div>');
			}
			else if (blocktype == 'closedDoorLower') {
				$('#board').append('<div class="solid closedDoorLower">'+board[e][d].row+board[e][d].column+'</div>');
			}
			else if (blocktype == 'openedDoorUpper') {
				$('#board').append('<div class="solid openedDoorUpper">'+board[e][d].row+board[e][d].column+'</div>');
			}
			else if (blocktype == 'openedDoorLower') {
				$('#board').append('<div class="solid openedDoorLower">'+board[e][d].row+board[e][d].column+'</div>');
			}
			else if (blocktype == 'key') {
				$('#board').append('<div class="solid Key">'+board[e][d].row+board[e][d].column+'</div>');
			}
			else if (blocktype == 'air') {
				$('#board').append('<div>'+board[e][d].row+board[e][d].column+'</div>');
			}
			else {
				$('#board').append('<div class="notFound">' + 'Texture not found' + '</div>');
				console.log('Error: Wrong blocktype used/Texture not found')
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
					board [i][j] = generateBlock('stone', true, false, i, j);
				}
				
				else {
					board [i][j] = generateBlock('air', false, false, i, j);	
				}
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


		for(let d = 0; d < levelNum.length; d++) {
			let blocktype = levelNum[d].blocktype;
				
		if(blocktype == 'stone' || blocktype == 'dirt' || blocktype == 'torch' || blocktype == 'sign' || blocktype == 'stoneGround') {
			board [levelNum[d].row][levelNum[d].column] = generateBlock(blocktype, true, false, levelNum[d].row, levelNum[d].column);
		}
		else if(blocktype == 'closedDoor') {
			board [levelNum[d].row][levelNum[d].column] = generateBlock(blocktype, true, true, levelNum[d].row, levelNum[d].column);
		}
		else if(blocktype == 'openedDoor' || blocktype == 'key') {
			board [levelNum[d].row][levelNum[d].column] = generateBlock(blocktype, true, true, levelNum[d].row, levelNum[d].column);
		}
		else {
			console.log('Error: ArrayEditor - not found' + levelNum[d].blocktype);	
		}
				
	}
									
	return levelNum
}