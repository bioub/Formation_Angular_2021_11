const { interval } = require('rxjs');
const { delay, filter, map, take } = require('rxjs/operators');

interval(1000)
  .pipe(
    delay(500),
    filter((val) => val % 2 === 0),
    map((val) => val * 2),
    take(2),
  )
  .subscribe((val) => {
    console.log(val);
  });

// Marble graphs (1 tiret === 250ms) :
// ----(0)----(1)----(2)----(3)----(4)----(5)----...
// delay(500)
// ------(0)----(1)----(2)----(3)----(4)----(5)----...
// filter((val) => val % 2 === 0)
// ------(0)----   ----(2)----   ----(4)----   ----...
// map((val) => val * 2)
// ------(0)----   ----(4)----   ----(8)----   ----...
// take(2)
// ------(0)----   ----(4)|
