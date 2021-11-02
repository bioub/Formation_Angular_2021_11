import { hello } from './hello.js';
var prenoms = ['Romain', 'Eric', 'Thomas', 'Mathilde'];
for (var _i = 0, prenoms_1 = prenoms; _i < prenoms_1.length; _i++) {
    var prenom = prenoms_1[_i];
    console.log(hello(prenom));
}
