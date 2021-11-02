import { hello } from './hello.js';

const prenoms = ['Romain', 'Eric', 'Thomas', 'Mathilde'];

for (const prenom of prenoms) {
  console.log(hello(prenom));
}
