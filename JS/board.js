function PCEINDEX(pce , pceNum){
        return (pce*10 + pceNum);
        // pceindex is the index sused to find a pieces's postion inside the picelist quickly
}

var GameBoard = {};

GameBoard.pieces = new Array(BRD_SQ_NUM);
GameBoard.side = COLOURS.WHITE;
GameBoard.fiftyMove = 0;

//number of half moves made by player (white move + black move = 1 complete move)
GameBoard.hisPly = 0;

//number of half moves made by the search tree
GameBoard.ply = 0;

/*
 0001 - White king castle
 0010 - white queen castle
 0100 - black king castle
 1000 - black queen castle

 1010 - (=10 in digits) means black can castle
         queen side and white can 
         also castle on the queen side
         
 0000 (default =0) - means no one can castle anywhere.
*/

GameBoard.castlePerm = 0;
GameBoard.material = new Array(2); //white, black material of pieces

GameBoard.pceNum = new Array(13);  // a names list of pice constants, so that arrays can index by piece type.
GameBoard.pList = new Array(14 * 10); //for each piece type a list of the squares where pieces of that type currently sit.

