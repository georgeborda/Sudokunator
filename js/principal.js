//Create Matrix 3d for sudoku and posibilities for each position
function createMatrix3D (matriz){

    for (let i=0; i<9; i++){
        
        matriz[i] = new Array;
        
        for (let j=0; j<9; j++){
            matriz [i][j] = new Array;
        }
    }   

    return matriz;
}

//Quick test to check wrong data
function verifMatrix (matriz) {

    let verif = true;

    for (let i=0; i<9; i++){
        for (let j=0; j<9; j++){
            if ( matriz [i][j][0] === undefined){
                matriz [i][j][0] = 0;
            }
            else if (isNaN( matriz [i][j][0])) {
                verif = false;
                j = 10;
                i = 10;
            }
            else if (matriz [i][j][0] < 0 || matriz [i][j][0] > 9){
                verif = false;
            }
        }
    }

    return verif;
}



//Print matrix
function printMatrix (){

    for (var i = 0; i < 9; i++){        

        for (var j = 0; j < 9; j++){
            
            matrPrint[i][j] = document.getElementById(String(i)+"-"+String(j));
    
            matrPrint[i][j].innerText = parseInt(sudoku[i][j][0]);            
        }
    }    
}


//Check the alternatives for each position and push the options to Sudoku array
function checkAlternatives (){

    let existNumber;
    
        for (let i=0; i<9; i++){
            for (let j=0; j<9; j++){
                if (sudoku[i][j][0] == 0){
                    for (let checkedNumber=1; checkedNumber<10; checkedNumber++){
                        existNumber = checkRow(checkedNumber,i);
                        (existNumber == false) ? existNumber = checkColumn(checkedNumber,j) : 0;
                        (existNumber == false) ? existNumber = checkBox(checkedNumber,i,j) : 0;
                        (existNumber == false) ? sudoku[i][j].push(checkedNumber) : 0 ; 
                    }
                }             
            }
        } 
    }

//Check if the number exists in the row
function checkRow (checkNumber,row){
    let checkExistRow = false;
    for (let j=0; j < 9; j++){
        if (sudoku [row][j][0] == checkNumber){
            checkExistRow = true;
        } 
    }   
    return checkExistRow; 
}

//Check if the number exists in the column
function checkColumn (checkNumber,column){
    let checkExistColumn = false;
    for (let i=0; i < 9; i++){
        if (sudoku [i][column][0] == checkNumber){
            checkExistColumn = true;
        } 
    }   
    return checkExistColumn; 
}

//Check if the number exists in the 3x3 box
function checkBox (checkNumber, row, column){
    let checkExistBox = false;
    let boxRow = Math.floor(row/3) * 3;
    let boxColumn = Math.floor(column/3) * 3;

    for (let i=boxRow; i < boxRow+3; i++){
        for (let j=boxColumn; j < boxColumn+3; j++){
            if (sudoku [i][j][0] == checkNumber){
                checkExistBox = true;
            }
        } 
    }   
    return checkExistBox; 
}

//REVISAR, ESTE TRAMO SIRVE PARA ASIGNAR LOS VALORES QUE ESTAN COMO UNICA OPCION Y ELIMINAR ESTE NUMERO COMO OPCION DE LOS OTROS
function checkOnlyOption () {
    let finded = false;
    
    for (let i=0; i<9; i++){
        for (let j=0; j<9; j++){
            let prueba = 0;
            if (sudoku[i][j].length == 2) {
                finded = true;
                sudoku[i][j].shift();
                removeFoundOptions(sudoku[i][j][0], i, j);
            } 
        }
        
    }   
    (finded == true) ? checkOnlyOption() : 0 ;
    return finded;
}


function removeFoundOptions (foundNumber, row, column) {
    let boxRow = Math.floor(row/3) * 3;
    let boxColumn = Math.floor(column/3) * 3;
    let rowRelative = row - boxRow; //Row relative posicion with respect to the box
    let columnRelative = column - boxColumn; //Column relative posicion with respect to the box
    let posRelative =  rowRelative * 3 + columnRelative;  //[[0,1,2],[3,4,5],[6,7,8]] Relative position
        // if posRelative = 5, the rowRelative is 1 and columnRelative is 2 ---> [1,2]

    for (let i=0; i<9; i++){
        const found = (element) => element == foundNumber; //compare the found number with the check number
        
        //delete the options for rows
        if (i !== column && sudoku[row][i].includes(foundNumber)){ 
            sudoku[row][i].splice(sudoku[row][i].findIndex(found), 1);
        }

        //delete the options for columns
        if (i !== row && sudoku[i][column].includes(foundNumber)){ 
            sudoku[i][column].splice(sudoku[i][column].findIndex(found), 1);
        } 
        
        //delete the options for the box
        if (i !== posRelative && sudoku[boxRow + Math.floor(i/3)][boxColumn + i - Math.floor(i/3)*3].includes(foundNumber)){
            sudoku[boxRow + Math.floor(i/3)][boxColumn + i - Math.floor(i/3)*3].
            splice(sudoku[boxRow + Math.floor(i/3)][boxColumn + i - Math.floor(i/3)*3].findIndex(found), 1);
        }

    }
}


///////////////////////
///////////////////////

var sudoku = new Array;
let verification;
let matrPrint = new Array(9);

//Create matrix for print 9x9
for (var i = 0; i < matrPrint.length; i++){

    matrPrint[i] = new Array(9);
}

createMatrix3D(sudoku);
temp(sudoku);
verification = verifMatrix(sudoku);

if (verification === true) {
    checkAlternatives();
    checkOnlyOption();
}

printMatrix();















function temp(sudoku){
    sudoku [0][0][0] = 2;
    sudoku [0][1][0] = 5;
    sudoku [0][2][0] = 7;
    sudoku [0][3][0] = 4;
    sudoku [0][7][0] = 6;
    sudoku [0][8][0] = 9;
    sudoku [1][0][0] = 6;
    sudoku [1][2][0] = 1;
    sudoku [1][3][0] = 2;
    sudoku [1][6][0] = 7;
    sudoku [2][2][0] = 8;
    sudoku [2][3][0] = 9;
    sudoku [2][8][0] = 5;
    sudoku [3][0][0] = 4;
    sudoku [3][3][0] = 8;
    sudoku [3][5][0] = 7;
    sudoku [3][7][0] = 2;
    sudoku [3][8][0] = 1;
    sudoku [4][3][0] = 6;
    sudoku [4][4][0] = 3;
    sudoku [4][5][0] = 4;
    sudoku [4][6][0] = 9;
    sudoku [4][7][0] = 7;
    sudoku [4][8][0] = 8;
    sudoku [5][0][0] = 7;
    sudoku [5][2][0] = 9;
    sudoku [5][3][0] = 5;
    sudoku [5][5][0] = 2;
    sudoku [5][6][0] = 4;
    sudoku [5][8][0] = 6;
    sudoku [6][7][0] = 5;
    sudoku [6][8][0] = 2;
    sudoku [7][6][0] = 1;
    sudoku [7][7][0] = 9;
    sudoku [7][8][0] = 7;
    sudoku [8][0][0] = 9;
    sudoku [8][3][0] = 7;
    sudoku [8][5][0] = 5;
}