let board = [];


function generateBlock(row, column) {
	return {
		row: row,
		column: column,
	}
}

$(function() {
	for(let i = 0; i < 8; i++) {

		board [i] = [];

		if(i % 2 == 0) {
			for(let j = 0; j < 8; j++) {

				if(j % 2  == 0) {
					board [i][j] = generateBlock(i, j);

				}
				else {
					board [i][j] = generateBlock(i, j);
				}
			}
		}
		else {
			for(let j = 0; j < 8; j++) {

				if(j % 2 == 0) {
					board [i][j] = generateBlock(i, j);
				}
				else {
					board [i][j] = generateBlock(i, j);
				}
			}
		}
	}


});