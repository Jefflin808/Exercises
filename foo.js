var foo = {n: 1};

(function(foo){
    console.log(foo.n);
    foo.n = 3; 
    var foo = {n: 2}; 
    console.log(foo.n);
})(foo);
console.log(foo.n);

// Output
// 1 2 3
