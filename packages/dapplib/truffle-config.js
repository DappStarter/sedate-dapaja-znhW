require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan rate magic around heavy another army genius'; 
let testAccounts = [
"0x60a65fde94c4bb1acb1bb29368beb7fd59cf7a21d12f19213d5221454df09d6d",
"0x087604733c4746fae5ca974de52f196ea715a2ae38f90a39805eac35663edb3c",
"0x2b144f80c3445568a7325f27c99faec37ed962364bdd6a4d16868f088ceef5f2",
"0x61ed935d476ef261aa0c88c95ede3723a1b590497f1800635aae5acf572d8c35",
"0x4b8bcdd0805cb07449c49185b81489a8f321b81424f1a22b43320ee66afec1fe",
"0x7a2a319dbe214f5a7d21b93980eb9bfee00385be6823eb2fdca0a8b06f7504f5",
"0xb76813dd7978c5986de571a29b21e4424b41d67222583a56907d2f27291050a6",
"0x8efb7e0bd94c234b6e7a8533577c23ac9fab5dbfc12801708b008151df589db7",
"0x8d581b67c05088e3de246a0cfffee8247e767382b260f820b0783aab9c06bb43",
"0x81118f1e584cb7890c06e081702e9765496d781d5b3b13dca78c4a4aeb7e54b4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


