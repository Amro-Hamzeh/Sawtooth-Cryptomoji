import * as requests from './request';

requests.getCollections('publickeystring')
  .then(collection => {
    console.log(collection);
    // { returns collections of one user
    //   key: 'publickeystring',
    //   moji: [{ dna: 'abcde', ... }]
    // }
  });

requests.getCollections()
  .then(collections => {
    console.log(collections);
    // [ returns all collections
    //   { key: 'publickeystring', moji: [] },
    //   { key: 'otherkeystring', moji: [] }
    // ]
  });


/*requests.getMoji('addressstring');
requests.getMoji();

requests.getSires('publickeystring');
requests.getSires();

requests.submitPayloads('privatekey', [{pay: 'load'}]); */