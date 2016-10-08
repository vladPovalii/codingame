[a,b,x,y]=readline().split(' ').map(function(x){return parseInt(x)});
while(true){
    e=(a<x)?1:(x<a)?-1:0;
    f=(b<y)?1:(y<b)?-1:0;
    print(("S N"[f+1]+"E W"[e+1]).trim());
    x-=e;
    y-=f;
}