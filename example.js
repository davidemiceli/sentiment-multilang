// Require the sentiment module
var sentiment = require('./index');
 
// List of examples:
var r1 = sentiment('Cats are stupid.', 'en');
console.dir(r1);
 
var r2 = sentiment('Cats are totally amazing!', 'en');
console.dir(r2);

var r3 = sentiment('The cats is on the table', 'en');
console.dir(r3);

var r4 = sentiment('Il mare è bello', 'it');
console.dir(r4); 
 
var r5 = sentiment('Stupendo!! Sono tre cose giuste.', 'it');
console.dir(r5);

var r6 = sentiment('Male male, non vedo nulla di buono.', 'it');
console.dir(r6);

var r7 = sentiment('I gatti sono stupidi.','it');
console.dir(r7);

var r8 = sentiment('I gatti sono totalmente stupendi!','it');
console.dir(r8);

var r9 = sentiment('The sgdfa iowuhd ruuqpos!','yug');
console.dir(r9);

var r10 = sentiment('','6fe');
console.dir(r10);