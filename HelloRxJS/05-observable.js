const { Observable } = require('rxjs');

function timeout(delayMs) {
  return new Observable((observer) => {
    setTimeout(() => {
      observer.next(); // appel de () => console.log('1s')
      observer.complete();
    }, delayMs);
  });
}

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(); // appel de () => console.log('1s')
    }, delayMs);
  });
}

// Avec Promise le callback ne s'exécute qu'une seule fois
// les promesses ne fonctionnent avec des callbacks qui
// s'exécutent plusieurs fois
// interval(1000).subscribe({
//   next: () => console.log('1s'),
//   error: (err) => console.log('1s'),
//   complete: () => console.log('1s'),
// });

interval(1000).subscribe(() => console.log('interval 1s'));

timeout(1000).subscribe({
  next: () => console.log('timeout 1s'),
  error: (err) => console.log('timeout err'),
  complete: () => console.log('timeout end'),
});
