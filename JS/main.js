$("#setFen").on("click",function(){
    console.log('Button Clicked & jQuery is attached, Black king is ${bK}');
    alert(`Button Clicked & jQuery is attached, Black king is ${PIECES.bK}`);
    InitFilesRanksBrd();
});

function InitFilesRanksBrd(){
    var idx=0;
    var file = FILES.FILE_A;
    var rank = RANKS.RANK_A;
    var sq = SQUARES.A1;

    for(index=0;index<BRD_SQ_NUM;index++){
        FILESBrd[index] = SQUARES.OFFBOARD;
        RANKSBrd[index] = SQUARES.OFFBOARD;
    }

    for(rank = RANKS.RANK_A; rank<=RANKS.RANK_H; rank++){
        for(file=FILES.FILE_A; file<=FILES.FILE_H; file++){
            sq = FR2SQ(file,rank);
            FILESBrd[sq] = file;
            RANKSBrd[sq] = rank;
        }
    }

    console.log(FILESBrd[20]);
}