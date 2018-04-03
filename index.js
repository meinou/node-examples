var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
}

function solveRect(l,b) {
    console.log("Solving for rect with l = " + l + " and b = " + b);

    if ( l <= 0 || b <= 0) {
        console.log("Unexpected input");
    } else {
         console.log("The area of rect is " + rect.area(l,b));
    }
}

solveRect(2,4);
solveRect(5,3);
solveRect(0, 8);