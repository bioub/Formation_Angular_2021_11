const fs = require('fs');

// Sync
try {
  const bufferEC = fs.readFileSync('.editorconfig');
  fs.writeFileSync('.editorconfig.copy', bufferEC);
  console.log('Copy Sync DONE');
} catch (err) {
  console.log(err);
}

// Async : Callback Hell / Pyramid of Doom
fs.readFile('.editorconfig', (err, bufferEC) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('.editorconfig.copy', bufferEC, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy Async DONE');
      }
    });
  }
});
