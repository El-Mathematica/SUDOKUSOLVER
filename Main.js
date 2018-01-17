// Sudoku Solver 2018, Javascript version created by Gokul Menon
 
//------------------------------BEGINNING OF INPUT AND CREATION OF OBJECT VARIABLES--------------------------------//
 
// Current method of adding numbers into the sudoku table - random numbers entered by humans
// Creating the objects
  var cellCycleFailure = false;
	var newCells = function(row, column, box) {
		this.row = row;
		this.column = column;
		this.box = box;
		this.value = null;
		this.valuePossibilities = [1, 2, 3, 4];
	};
	// Some test code
	//var cells = Array();
	//for (var i = 0; i < 16; i++) cells.push(newCells(Math.floor(i / 4), i % 4, ))
	// Creating all the different cells in the sudoku puzzle
	var cellOne = new newCells(0, 0, 0);
	var cellTwo = new newCells(0, 1, 0);
	var cellThree = new newCells(0, 2, 1);
	var cellFour = new newCells(0, 3, 1);
	var cellFive = new newCells(1, 0, 0);
	var cellSix = new newCells(1, 1, 0);
	var cellSeven = new newCells(1, 2, 1);
	var cellEight = new newCells(1, 3, 1);
	var cellNine = new newCells(2, 0, 2);
	var cellTen = new newCells(2, 1, 2);
	var cellEleven = new newCells(2, 2, 3);
	var cellTwelve = new newCells(2, 3, 3);
	var cellThirteen = new newCells(3, 0, 2);
	var cellFourteen = new newCells(3, 1, 2);
	var cellFifteen = new newCells(3, 2, 3);
	var cellSixteen = new newCells(3, 3, 3);
 
	/* Creating an array pushing all the objects in, so i can use algorithms to compare the
	the object row by row, column by column etc. */
	var comparisonArr = [];
	comparisonArr.push(cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven, cellEight, 
	cellNine, cellTen, cellEleven, cellTwelve, cellThirteen,cellFourteen, cellFifteen, cellSixteen);
 
	// INPUT //
	// Current method of input -  random numbers typed in by a human 
 
	cellOne.value = 3;
	cellTwo.value = 4;
	cellThree.value = 1;
	cellSix.value = 2;
	cellEleven.value = 2;
	cellSixteen.value = 3;
	cellFifteen.value = 4;
	cellFourteen.value = 1;
	// Further development needed for the program to be able to accept variables typed in by a human dynamically
	//////////////END OF INPUT AND CREATION OF VARIABLES////////////////
  // Solving the Sudoku Solver
 function rowAlg (cell) {
	 for (var i = 0; i < comparisonArr.length; i++) {
		 if (comparisonArr[i].value == null) {
			 for (var j = 0; j < comparisonArr[i].valuePossibilities.length; j++) {
				 if (comparisonArr[i].row == comparisonArr.valuePossibilities[j] {
				     comparisonArr[i].valuePossibilities.splice(j, 1);
				}
		 	}
		 	if (comparisonArr[i].valuePossibilities.length == 1) { 
				comparisonArr[i].value == comparisonArr[i].valuePossibilities[0];
			}
		 }
	 } 
 }
 function columnAlg (cell) {
	 for (var i = 0; i < comparisonArr.length; i++) {
		 if (comparisonArr[i].value == null) {
			 for (var j = 0; j < comparisonArr[i].valuePossibilities.length; j++) {
				 if (comparisonArr[i].column == comparisonArr.valuePossibilities[j] {
				     comparisonArr[i].valuePossibilities.splice(j, 1);
				}
		 	}
			 if (comparisonArr[i].valuePossibilities.length == 1) { 
				comparisonArr[i].value == comparisonArr[i].valuePossibilities[0];
			}
			 }
		 }
	 } 
 }
 function boxAlg (cell) {
	 for (var i = 0; i < comparisonArr.length; i++) {
		 if (comparisonArr[i].value == null) {
			 for (var j = 0; j < comparisonArr[i].valuePossibilities.length; j++) {
				 if (comparisonArr[i].box == comparisonArr.valuePossibilities[j] {
				     comparisonArr[i].valuePossibilities.splice(j, 1);
				}
			 }
		 if (comparisonArr[i].valuePossibilities.length == 1) { 
				comparisonArr[i].value == comparisonArr[i].valuePossibilities[0];
			}
		 }
	 } 
 }

 function cellSolver (void) {
    rowAlg;
    columnAlg;
    boxAlg;
   }
print (comparisonArr[0].valuePossibilities.length)
