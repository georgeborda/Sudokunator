function inicializacionMatriz (){

    sudokuMatriz[0][0][0] = 2;
    sudokuMatriz[0][1][0] = 5;
    sudokuMatriz[0][2][0] = 7;
    sudokuMatriz[0][3][0] = 4;
    sudokuMatriz[0][4][0] = 0;
    sudokuMatriz[0][5][0] = 0;
    sudokuMatriz[0][6][0] = 0;
    sudokuMatriz[0][7][0] = 6;
    sudokuMatriz[0][8][0] = 9;
    
    sudokuMatriz[1][0][0] = 6;
    sudokuMatriz[1][1][0] = 0;
    sudokuMatriz[1][2][0] = 1;
    sudokuMatriz[1][3][0] = 2;
    sudokuMatriz[1][4][0] = 0;
    sudokuMatriz[1][5][0] = 0;
    sudokuMatriz[1][6][0] = 7;
    sudokuMatriz[1][7][0] = 0;
    sudokuMatriz[1][8][0] = 0;

    sudokuMatriz[2][0][0] = 0;
    sudokuMatriz[2][1][0] = 0;
    sudokuMatriz[2][2][0] = 8;
    sudokuMatriz[2][3][0] = 9;
    sudokuMatriz[2][4][0] = 0;
    sudokuMatriz[2][5][0] = 0;
    sudokuMatriz[2][6][0] = 0;
    sudokuMatriz[2][7][0] = 0;
    sudokuMatriz[2][8][0] = 5;

    sudokuMatriz[3][0][0] = 4;
    sudokuMatriz[3][1][0] = 0;
    sudokuMatriz[3][2][0] = 0;
    sudokuMatriz[3][3][0] = 8;
    sudokuMatriz[3][4][0] = 0;
    sudokuMatriz[3][5][0] = 7;
    sudokuMatriz[3][6][0] = 0;
    sudokuMatriz[3][7][0] = 2;
    sudokuMatriz[3][8][0] = 1;

    sudokuMatriz[4][0][0] = 0;
    sudokuMatriz[4][1][0] = 0;
    sudokuMatriz[4][2][0] = 0;
    sudokuMatriz[4][3][0] = 6;
    sudokuMatriz[4][4][0] = 3;
    sudokuMatriz[4][5][0] = 4;
    sudokuMatriz[4][6][0] = 9;
    sudokuMatriz[4][7][0] = 7;
    sudokuMatriz[4][8][0] = 8;

    sudokuMatriz[5][0][0] = 7;
    sudokuMatriz[5][1][0] = 0;
    sudokuMatriz[5][2][0] = 9;
    sudokuMatriz[5][3][0] = 5;
    sudokuMatriz[5][4][0] = 0;
    sudokuMatriz[5][5][0] = 2;
    sudokuMatriz[5][6][0] = 4;
    sudokuMatriz[5][7][0] = 0;
    sudokuMatriz[5][8][0] = 6;

    sudokuMatriz[6][0][0] = 0;
    sudokuMatriz[6][1][0] = 0;
    sudokuMatriz[6][2][0] = 0;
    sudokuMatriz[6][3][0] = 0;
    sudokuMatriz[6][4][0] = 0;
    sudokuMatriz[6][5][0] = 0;
    sudokuMatriz[6][6][0] = 0;
    sudokuMatriz[6][7][0] = 5;
    sudokuMatriz[6][8][0] = 2;

    sudokuMatriz[7][0][0] = 0;
    sudokuMatriz[7][1][0] = 0;
    sudokuMatriz[7][2][0] = 0;
    sudokuMatriz[7][3][0] = 0;
    sudokuMatriz[7][4][0] = 0;
    sudokuMatriz[7][5][0] = 0;
    sudokuMatriz[7][6][0] = 1;
    sudokuMatriz[7][7][0] = 9;
    sudokuMatriz[7][8][0] = 7;

    sudokuMatriz[8][0][0] = 9;
    sudokuMatriz[8][1][0] = 0;
    sudokuMatriz[8][2][0] = 0;
    sudokuMatriz[8][3][0] = 7;
    sudokuMatriz[8][4][0] = 0;
    sudokuMatriz[8][5][0] = 5;
    sudokuMatriz[8][6][0] = 0;
    sudokuMatriz[8][7][0] = 0;
    sudokuMatriz[8][8][0] = 0;

    
}


function imprimirMatriz (){

    for (var i = 0; i < 9; i++){        

        for (var j = 0; j < 9; j++){
            
            matrizImprimir[i][j] = document.getElementById(String(i)+"-"+String(j));
    
            matrizImprimir[i][j].innerText = parseInt(sudokuMatriz[i][j][0]);            
        }
    }    
}



var sudokuMatriz = new Array(9);
var matrizImprimir = new Array(9);

//Creacion matriz principal de 9x9x10
for (var i = 0; i < sudokuMatriz.length; i++){
    
    sudokuMatriz[i] = new Array(9);

    for (var j = 0; j < sudokuMatriz.length; j++){

        sudokuMatriz[i][j] = new Array(10);
    }
}

//Creacion matriz para imprimir en pantalla de 9x9
for (var i = 0; i < matrizImprimir.length; i++){

    matrizImprimir[i] = new Array(9);
}

inicializacionMatriz();

imprimirMatriz();

