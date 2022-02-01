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


function verifMatrix (matriz) {

    let verif;

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







///////////////////////
///////////////////////

let sudoku = new Array;
let verificacion;
let matrPrint = new Array(9);

//Create matrix for print 9x9
for (var i = 0; i < matrPrint.length; i++){

    matrPrint[i] = new Array(9);
}

createMatrix3D(sudoku);
temp(sudoku);
verificacion = verifMatrix(sudoku);

if (verificacion === false){
    console.log("No es posible resolverlo");
}
else {
    console.log("Ni idea");
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