## sentiment-multilang
#### Multilanguage AFINN-based sentiment analysis for Node.js

Sentiment is a Node.js module that uses the [AFINN-111](http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010) wordlist to perform [sentiment analysis](http://en.wikipedia.org/wiki/Sentiment_analysis) on arbitrary blocks of input text.

It supports english, french, spanish, and italian language. For languages other than english, it use a locale transposition of AFINN-111 wordlist.

### Installation
`npm install sentiment`

### Usage
```javascript
var sentiment = require('sentiment');

var r1 = sentiment('Cats are stupid.','en');
console.dir(r1);        // Vote: 'negative'

var r2 = sentiment('Cats are totally amazing!','en');
console.dir(r2);        // Vote: 'positive'

var r3 = sentiment('I gatti sono stupidi.','it');
console.dir(r3);        // Vote: 'negative'

var r4 = sentiment('I gatti sono totalmente stupendi!','it');
console.dir(r4);        // Vote: 'positive'
```

### Testing
```bash
npm test
```
