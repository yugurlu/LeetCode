
function createCounter(n) {
    var x = 0;
    return function() {
        return(n + x++)
    };
};
