// setTimeout(() => {
//   console.log('1s');
// }, 1000);

// function timeout(delayMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(); // appel de () => console.log('1s')
//     }, delayMs);
//   });
// }

// timeout(1000).then(() => console.log('1s'));

function interval(delayMs) {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve(); // appel de () => console.log('1s')
    }, delayMs);
  });
}

// Avec Promise le callback ne s'exécute qu'une seule fois
// les promesses ne fonctionnent avec des callbacks qui
// s'exécutent plusieurs fois
interval(1000).then(() => console.log('1s'));
