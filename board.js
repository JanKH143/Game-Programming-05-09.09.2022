let board = [];


function generateBlock(solid, row, column) {
	return {
		solid: solid,
		row: row,
		column: column,
	}
}

$(function() {
	for(let i = 0; i < 20; i++) {

		board [i] = [];

		if(i % 2 == 0) {
			for(let j = 0; j < 38; j++) {

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

				if(j % 2 == 0) {
					board [i][j] = generateBlock(false, i, j);
				}
				else {
					board [i][j] = generateBlock(true, i, j);
				}
			}
		}
	}


});