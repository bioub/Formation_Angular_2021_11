const fs = require('fs');

// SYNC : tant que le fichier n'a pas été lu, on
// ne passe pas à la ligne suivante
// Le code est simple à lire
// L'ordre des fichiers est garanti
// Perf pas idéales
// Le THREAD est bloqué sur le readFileSync
// const bufferEC = fs.readFileSync('.editorconfig');
// console.log(bufferEC.toString('utf-8'));

// const bufferGI = fs.readFileSync('.gitignore');
// console.log(bufferGI.toString('utf-8'));

// pile d'appel
// ^
// |
// |
// |readFileSync XXXXXXXXXX - log - readFileSync XXXXXXXXXX - log
// +-------------------------------------------------------------> temps

// ASYNC: le thread est libéré sur le readFile
// le code est plus dur à lire du fait des callbacks
// (pire avec la gestion d'erreur) -> callback hell
// L'ordre des fichiers n'est pas garanti
// Perf idéale, pendant la lecture d'un fichier on peut faire
// autre chose (pas besoin de multithread pour ça)
fs.readFile('.editorconfig', (err, bufferEC) => {
  console.log(bufferEC.toString('utf-8'));
});

fs.readFile('.gitignore', (err, bufferGI) => {
  console.log(bufferGI.toString('utf-8'));
});

// pile d'appel
// ^
// |
// |                                    lg            lg
// |readFile - readFile ............... => .......... =>
// +-------------------0-----------------------------------> temps

// file d'attente (0ms) :
// file d'attente (le fichier editorconfig a été lu) : =>
// file d'attente (le fichier gitignore a été lu) : =>
