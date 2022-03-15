"use strict";
/* Indeed Interviw via Karat Engineer 3/9/22 */
/* This is a working solution! */
/* 
You are working on a logic game made up of a series of puzzles. The first type of puzzle you settle on is "sub-Sudoku", a game where the player has to position the numbers 1..N on an NxN matrix.

Your job is to write a function that, given an NxN matrix, returns true if  every row and column contains the numbers 1..N

The UI for the game does not do any validation on the numbers the player enters, so the matrix can contain any signed integer.

Examples:

[[1, 2, 3],
 [3, 1, 2],
 [2, 3, 1]]        -> True

[[1, 2, 3],
 [1, 2, 3],
 [1, 2, 3]]        -> False

[[1, 1, 1],
 [2, 2, 2],
 [3, 3, 3]]        -> False

[[1000, -1000, 6],
 [   2,     3, 1],
 [   3,     1, 2]] -> False

[[0]]              -> False

[[3, 2, 3, 2],
 [2, 3, 2, 3],
 [3, 2, 3, 2],
 [2, 3, 2, 3]]     -> False

[[2, 3, 4],
 [3, 4, 2],
 [4, 2, 3]]        -> False

[[-1,-2,-3],
 [-2,-3,-1], 
 [-3,-1,-2]]       -> False

[[1,1,1],
 [1,1,2],
 [1,2,3]]          -> False

[[1]]              -> True

n: The number of rows/columns in the matrix

*/

// True
const grid1 = [
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1]
];
// False
const grid2 = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];
// False
const grid3 = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
];
// False
const grid4 = [
    [1000, -1000, 6],
    [2, 3, 1],
    [3, 1, 2]
];
// False
const grid5 = [[0]];
// False
const grid6 = [
    [3, 2, 3, 2],
    [2, 3, 2, 3],
    [3, 2, 3, 2],
    [2, 3, 2, 3]
];
// False
const grid7 = [
    [2, 3, 4],
    [3, 4, 2],
    [4, 2, 3]
];
// False
const grid8 = [
    [-1, -2, -3],
    [-2, -3, -1],
    [-3, -1, -2]
];
// False
const grid9 = [
    [1, 1, 1],
    [1, 1, 2],
    [1, 2, 3]
];
// True
const grid10 = [[1]];

const findCorrectGrids = (grid) => {

    const correctValsList = grid.map((row, index) => {
        return index + 1
    })

    // check the rows have the right list, and no duplicates


    const booleanRows = grid.map((row) => {
        console.log('row: ', row)
        const valuesFoundInRows = []
        const booleanRow = row.map((val) => {
            if (correctValsList.includes(val) && !valuesFoundInRows.includes(val)) {
                console.log('val returning true: ', val)
                console.log('valuesFoundInRows: ', valuesFoundInRows)
                valuesFoundInRows.push(val)
                return true
            }
            else {
                valuesFoundInRows.push(val)
                return false
            }
        })
        return booleanRow
    })
    console.log('booleanRows', booleanRows)
    console.log('flattenedArray: ', booleanRows.flat())
    const rowsNotCorrect = booleanRows.flat().includes(false)

    console.log('rowsNotCorrect: ', rowsNotCorrect)
    if (rowsNotCorrect)
        return false
    else {
        // check columns: 
        // mapping over row and values in each row just for indices 
        // and then using those indices in the grid to check each column's values
        const colsNotCorrect = grid.map((row, rowIndex) => {
            const valuesFoundInCols = []
            const booleanCol = row.map((val, valIndex) => {
                if (correctValsList.includes(grid[valIndex][rowIndex]) && !valuesFoundInCols.includes(grid[valIndex][rowIndex])) {
                    valuesFoundInCols.push(grid[valIndex][rowIndex])
                    return true
                }
                else {
                    valuesFoundInCols.push(grid[valIndex][rowIndex])
                    return false
                }

            })
            console.log('booleanCol: ', booleanCol)
            return booleanCol
        }).flat().includes(false)

        console.log('colsNotCorrect: ', colsNotCorrect)
        if (colsNotCorrect) {
            return false
        }
        else
            return true
    }
}

console.log(findCorrectGrids(grid10))