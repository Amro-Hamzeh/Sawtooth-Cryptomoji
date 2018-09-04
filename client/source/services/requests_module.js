import * as requests from './requests';

requests.getCollections('publickeystring')
  .then(collection => {
    console.log(collection);
    // {
    //   key: 'publickeystring',
    //   moji: [{ dna: 'abcde', ... }]
    // }
  });

requests.getCollections()
  .then(collections => {
    console.log(collections);
    // [
    //   { key: 'publickeystring', moji: [] },
    //   { key: 'otherkeystring', moji: [] }
    // ]
  });

requests.getMoji('addressstring');
requests.getMoji();

requests.getSires('publickeystring');
requests.getSires();

requests.submitPayloads('privatekey', [{pay: 'load'}]);