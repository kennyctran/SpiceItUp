# SpiceItUp

A one-stop-shop that takes a block of text and gives you great synonyms and related words for all of them!

## Description

SpiceItUp has a couple of features:
  -  Character count
  -  Word count
  -  Paragraph count
  -  Sentence count
  -  Bigrams count
  -  Vanity count (how many times you've used I divided by sentences you've written)
  -  Submit the block of text to have every word checked for possible synonyms

The "Spice It Up?" button consumes the [Word Associations API](https://rapidapi.com/twinword/api/word-associations/), checking for related words and synonyms.
This is perfect for essays or emails that you are just hoping to spice up. No need to pick out specific words. If you input the text and see something you like, use it!

## Getting Started

### Setup && Start

* Install [node](https://nodejs.org/en/) on your machine
* Install yarn on your machine with ```npm install -g yarn```
* Clone down the repository
* Navigate into the root folder of the repository and run ```yarn``` to install dependencies
* Run ```yarn test``` to check the tests
* Run ```yarn build``` to create a bundle.js development build
* Run ```yarn start``` to launch the server on localhost:3000

## IMPORTANT

You will not be able to use the "Spice It Up?" button unless you have access to the Word Association API since its access is locked by an API key. If you don't want to sign up for RapidAPI, please contact me, and I can share the key with you.

## Author

Kenny Tran  
[@kennyctran](https://linkedin.com/in/kennyctran)
