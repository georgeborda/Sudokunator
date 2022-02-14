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


//Check the alternatives for each position
function checkOptions (){

    let findAnyNumber = false;
    let existNumber;
    
    do {
        for (let i=0; i<9; i++){
            for (let j=0; j<9; j++){
                if (sudoku[i][j][0] == 0){
                    for (let checkedNumber=1; checkedNumber<10; checkedNumber++){
                        existNumber = checkRow(checkedNumber,i);
                        if (existNumber == false){
                            existNumber = checkColumn(checkedNumber,j);
                        }
                        if (existNumber == false){
                            existNumber = checkBox(checkedNumber,i,j);
                        } 
                    }
                }             
            }
        } 
    } while (findAnyNumber);
}

function checkRow (checkNumber,row){
    let checkExistRow = false;
    for (let j=0; j < 9; j++){
        if (sudoku [row][j][0] == checkNumber){
            checkExistRow = true;;
        } 
    }   
    return checkExistRow; 
}

function checkColumn (checkNumber,column){
    let checkExistColumn = false;
    for (let i=0; i < 9; i++){
        if (sudoku [i][column][0] == checkNumber){
            checkExistColumn = true;;
        } 
    }   
    return checkExistColumn; 
}

function checkBox (checkNumber, row, column){
    let checkExistBox = false;
    let boxRow = Math.floor(row/3) * 3;
    let boxColumn = Math.floor(column/3) * 3;

    for (let i=boxRow; i < boxRow+3; i++){
        for (let j=boxColumn; j < boxColumn+3; j++){
            if (sudoku [i][j][0] == checkNumber){
                checkExistBox = true;;
            }
        } 
    }   
    return checkExistBox; 
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


if (verification === false){
    console.log("No es posible resolverlo");
}
else if (verification === true) {
    console.log("Tal vez");
}
else {
    console.log("Error");
}



printMatrix();















function temp(sudoku){
    sudoku [0][0][0] = 4;
    sudoku [0][4][0] = 2;
    sudoku [0][5][0] = 8;
    sudoku [0][6][0] = 1;
    sudoku [1][2][0] = 8;
    sudoku [1][3][0] = 3;
    sudoku [1][5][0] = 4;
    sudoku [1][7][0] = 9;
    sudoku [2][7][0] = 7;
    sudoku [2][8][0] = 8;
    sudoku [3][1][0] = 2;
    sudoku [3][3][0] = 4;
    sudoku [4][0][0] = 3;
    sudoku [4][1][0] = 5;
    sudoku [4][7][0] = 2;
    sudoku [4][8][0] = 9;
    sudoku [5][5][0] = 2;
    sudoku [5][7][0] = 8;
    sudoku [6][0][0] = 5;
    sudoku [6][1][0] = 8;
    sudoku [7][1][0] = 7;
    sudoku [7][3][0] = 2;
    sudoku [7][5][0] = 1;
    sudoku [7][6][0] = 8;
    sudoku [8][2][0] = 3;
    sudoku [8][3][0] = 6;
    sudoku [8][4][0] = 8;
    sudoku [8][8][0] = 1;
}