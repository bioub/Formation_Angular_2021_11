const fs = require('fs');
// fs.readFile('.editorconfig', (err, bufferEC) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile('.editorconfig.copy', bufferEC, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('Copy Async DONE');
//       }
//     });
//   }
// });

fs.promises.readFile('.editorconfig')
  .then((bufferEC) => fs.promises.writeFile('.editorconfig.copy', bufferEC))
  .then(() => console.log('Copy Async DONE'))
  .catch((err) => console.log(err));
