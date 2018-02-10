//-- Structure --
// Initialization of variables and grid squares
// Input
// Declaration of sorting methods
// Declaration of sorting failure
// Loops if it doesn't manage to solve and doesn't come up with sorting failure
// Checks if the Program has solved the sudoku

















// your code goes here
// your code goes here
//JavaScript-C24.2.0 (SpiderMonkey)

// Sudoku Solver 2018, Javascript version created by Gokul Menon

//------------------------------BEGINNING OF INPUT AND CREATION OF OBJECT VARIABLES--------------------------------//

// Current method of adding numbers into the sudoku table - random numbers entered by humans
// Creating the objects
   // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  var cellCycleFailure = null; // Checks for undefeatable sudoku's
  var cellFinalizer = true;    // Checks to see if program is ready to output sudoku
  var end = false;

  var newCells = function(row, column, box) { // The parent function for the creation of sudoku cells
    this.row = row; // Declares the row property as the row parameter for the newCells function
    this.column = column; // Declares the column property as the column parameter for the newCells function
    this.box = box; // Declares the box property as the box parameter for the newCells function
    this.value = 0; // Declares all the values of the sudoku cells as 0
    this.valuePossibilities = [1, 2, 3, 4]; // Declares all the value possibilities of the sudoku cells
  };
    // Some test code
    var comparisonArr = []; // Array which will contain all of the sudoku cells
    var tempBoxVal = null; // variable which will temporarily store the box value for the cell being created
    for (var tempRowVal = 0; tempRowVal < 4; tempRowVal++) { // loops through all the rows which will be created
        for (var tempColVal = 0; tempColVal < 4; tempColVal++) { // loops through all the columns which will be created
            tempBoxVal = Math.floor(tempRowVal/2)*2 + Math.floor(tempColVal/2); // determines what the box value for the current sudoku square
            var f = new newCells(tempRowVal, tempColVal, tempBoxVal); //puts the object into a variable so it can be pushed into comparisonArr
            comparisonArr.push(f); //pushes the variable with the object into the Array
        }
    }
    // INPUT //
    // Current method of input -  random numbers typed in by a human

    comparisonArr[0].value = 3;
    comparisonArr[1].value = 4;
    comparisonArr[2].value = 1;
    comparisonArr[5].value = 2;
    comparisonArr[10].value = 2;
    comparisonArr[15].value = 3;
    comparisonArr[14].value = 4;
    comparisonArr[13].value = 1;

    // CODE HAS BEEN TESTED AND WORKS FOR SURE ----------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Further development needed for the program to be able to accept variables typed in by a human dynamically
    //////////////END OF INPUT AND CREATION OF VARIABLES////////////////
  // Solving the Sudoku Solver
 function basicAlgorithm() {


 }
 //-----------------------------------------------------------------------------
 function cellChecker (a) {
    if (cellCycleFailure === true) {
        print ("Sorry, please enter a sudoku which is easily solvable boi");
        throw new Error();
    }
}
 function cellSolver (b) {
        cellCycleFailure = true; // one time cycleFailure which will detect if there is no change to the sudoku
        basicAlgorithm();
        cellChecker();
 }
  function Display (d) {

     // Makes the program finalize the sudoku if no
    for (var i = 0; i < comparisonArr.length; i++) {
        if (comparisonArr[i].value === null) {
            cellSolver();
        }
        else {
	end = true;
        }

    }

    if (end === true) {
    	for (var i = 0; i < comparisonArr.length; i++) {
    		print(comparisonArr[i].value);
    	}
    }


 }
 Display();
