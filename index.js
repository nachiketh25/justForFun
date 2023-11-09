 const ethers = require('ethers');
const abi = require('./abi.json');

 const provider = new ethers.JsonRpcProvider('https://rpc.ankr.com/eth')

 const etherscan = new ethers.EtherscanProvider()

 const contractAddress  ='0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

//  const contract = new ethers.Contract(contractAddress, abi.abi, provider);
 
console.log(provider.getTransactionReceipt('0x3bd1e598cea58a73ec284819bef6945ca6b70e7529e3870562fe7a608a847731').then((res) =>
{
    res.logs.forEach( (log) => {
        if (log.topics[0] == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef') {
        console.log('------')
        console.log('token address: '+log.address)
        console.log('input address: '+log.topics[1])
        console.log('output address: '+log.topics[2])
        console.log('val transferred: '+parseInt(log.data))
        }
        })
})
)
// console.log(contract)

