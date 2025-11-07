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

