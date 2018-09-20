Project Introduction

In this course, you learned all about blockchain and transaction data models as well
as the differences between public and private blockchains. You put this knowledge to
practice by creating your own private blockchain; however, this current model has some
flaws in saving, persisting, and validating data.Your challenge in this project is to
refactor your private blockchain to securely handle this information.

Why this project?
This project introduces you to challenges faced when building out a blockchain storage methods.
So far, you’ve created a private blockchain that holds data in an array, but storing blockchain
dataset in an array is not only expensive for computer memory but also inefficient for long term storage.

A core responsibilities of a blockchain nodes is to validate the blockchain dataset. In this project
you will learn to validate the blockchain dataset by converting the current validation functions from
storing data in a chain array to leveraging the persistence library LevelDB.

By the end of the project, you will have the skills needed to create your own private blockchain ledger
that persists data and validates the blockchain ledger utilizing block hashes.

Why LevelDB?
LevelDB is a light-weight, single-purpose library for persistence with bindings to many platforms.
LevelDB was selected as the data access layer to solve this problem due to its robustness as a
key/value datastore along with its historical usage with Bitcoin.

What will I learn
This project will allow you to build and expand upon the concepts and skills you’ve gained throughout this course. With this project you will:

	Differentiate Private Blockchain and Public Blockchain
	Identify what are the basic components in a Private Blockchain
	Define what are the application Model
	Implement basics functionalities for your Private Blockchain
	Implement a method to persist your Private Blockchain
	Implement with Node.js your application
	Test the application functionalities

Getting started
	Open a terminal and install node.js framework.
    Install crypto.js, level.js,
    
    npm install crypto-js --save
    npm install level --save

Testing
	Run the server using

	node simpleChain.js
