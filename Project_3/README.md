Project Introduction
In Project 2: Private Blockchain, you solved the challenge of how to persist our blockchain dataset.
Your next challenge is to build a RESTful API using a Node.js framework that will interfaces with the
private blockchain By configuring an API for your private blockchain you expose functionality that can
be consumed by several types of web clients ranging from desktop, mobile, and IoT devices. For your next
project, you will be creating a RESTful web API for your private blockchain. The API project will require
two endpoints:
	GET block
	POST block
    
Why this project?
This project introduces you to the fundamentals of web APIs with Node.js frameworks. Using your own
private blockchain to create a web API is a huge first step toward developing your own web applications
that are consumable by a variety of web clients. Later in this program, you’ll be programming blockchain
technologies that utilize these similar features using smart contracts.

What will I learn?
You will learn to create and manage a web API with a Node.js framework to interact with your private
blockchain. You’ll get first hand experience generating API endpoints and configuring the endpoints
response that can be consumable by many types of web clients. This project helps build on the skills
you’ve learned so far an allow you to apply these skills using real world technologies to get hands
on with the tools used to create web APIs.

Framework used
	Express.js
    
Getting started
	Open a terminal and install node.js framework.
    Install crypto.js, level.js, express.js and body-parser.js framworks.
    
    npm install crypto-js --save
    npm install level --save
    npm install express --save
    npm install body-parser --save
    
Testing
	Run the server using

	node index.js
    
Use software like postman or simple CURL on the terminal to send the requests to the server using
url http://localhost:8000 with one of the below supported endpoints:

GET /block/{BLOCK_HEIGHT}
example using curl:
	curl http://localhost:8000/block/0
    
POST /block
example using curl:
	curl -X POST http://localhost:8000/block -H 'Content-Type: application/json' -d $'{"body":"Test Block 1"}'