// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,...
// 0, 1, 2, 3, 4, ...
function recurFib(n){
    if(n < 2) return n; 
    return recurFib(n-1) + recurFib(n-2);
}

function dynFib(n){
    if(n === 0) return 0;
    if(n === 1) return 1;

    let arr = [];
    for(let i=0; i<=n; i++){
        arr[i] = 0;
    }
    arr[0] = 0;
    arr[1] = 1;
    for(let i=2; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];   
}