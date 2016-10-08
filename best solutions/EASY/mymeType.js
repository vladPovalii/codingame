var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.
var mimeTable={};
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    mimeTable[inputs[0].toLowerCase()] = inputs[1];
}
for (var i = 0; i < Q; i++) {
    var ext = readline().toLowerCase().split('.');
    if(ext.length>1 && mimeTable[ ext[ext.length-1] ]){
        print( mimeTable[ ext[ext.length-1] ]);
    }else{
        print('UNKNOWN');
    }
}