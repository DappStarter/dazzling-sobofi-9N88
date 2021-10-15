require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind hospital give kite olympic gesture'; 
let testAccounts = [
"0x469e5a6da5966e51a9be41338c2ed6cfac7b26532e9fabebf91ca4b2d142b97c",
"0xf8319ca6ba614bcbec97bb8212d24b9bdcdf44f6b37c5948b879f8b10675a5e9",
"0x0cf8c03aeca5b2475c4f8fa3476c5c36402424358aa758f323078c11835f02aa",
"0x5a93ec0c3e223b21c6391d5b4a3917752d99913aa447abfb7a49d84a15068d2f",
"0x7b73af8b1c47c21aac91ddcf6185f2802fe9947d23ea96f2f920a43766aae02c",
"0x3fca84f4fdca9b542fbd06d0484dd43e36f23c8f17a215c2fdd3bc2e6e209a50",
"0x363e5e38db92740f00bd0f6293f567c32a784f014e4a11638cf21023f24551b3",
"0xd12f419e2948230a2ddba16da0f1c66591d4a2bf8c28152f47acdfd767fec26d",
"0x3d4ef853075f74bc5cf47b1af022e02e90615d64691b41274a07118bee02f529",
"0x5e1e1d7a96a97dfa7af56debbb9146d3905fc919d13c271c77c060942e0bffac"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

