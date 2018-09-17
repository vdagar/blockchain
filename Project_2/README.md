Project Overview

Keeping the blockchain data in an array is costly and data stored in the blockchain is at the risk of permament loss. To avoid these pitfalls we will
store the blockchain data in levelDB which is robust DB for storing as key/value pair dataset.

In the boilerplate project data is stored in array. The array needs to be replaced with levelDB to persist blockchain data. Function that worked with
arry's should work with levelDB.

For testing the project:

1. node simpleChain.js
        This command will invoke the function contained in the simpleChain.js command.
        first it will check if the database is empty, if so then it will add the genesis block in the chain and then add 10 more blocks of test data.

        Then it will call the validateChain function to check the validatity of the BlockChain.
