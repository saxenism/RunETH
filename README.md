# RunETH | A dApp for an on-chain proof-of-workout based community 


# Video Walkthrough:



https://user-images.githubusercontent.com/32522659/124522524-35999500-de11-11eb-9b1f-a092a7a9480d.mp4

<br/>
<br/>

# Description

Please first of all visit this link for an overview:
https://drive.google.com/file/d/1ZqsDNwvelsKu3O-jeHG0Tmij53wphGDw/view?usp=sharing

This dApp is a result of my own failed fitness commitments to myself. I was always very motivated to get fit, took on a fitness challenge but dropped out in the middle more often than not. So, this dApp is an on-chain proof-of-workout dApp so that it can help you actually complete your fitness goals.

Users come onto RunETH, and explore the various challenges that people have undertaken. They can commit to a similar challenge or create a new challenge of their own and as proof of their commitment they have to stake some cryptocurrency with RunETH, which will be redeemable only after the challenge duration is over. Users will upload their proof-of-workout (fitness tracker apps from smart watches, smart phones or even time-lapse videos) onto IPFS which will serve as a global accountability system for the users.

With the successful completion, users earn bragging right, *reputation* on RunETH, and also the chance to mint their entire journey as an NFT!! Just how awesome is that, right!?? :D 

# How it's made

The crypto being deposited(currently just cDAI) by the users is being staked using the 88mph v3, currently live on RInkeby test network. Chose 88mph because safety of user's fund was of utmost importance compared to high APYs.

Daily proofs being submitted onto IPFS using pinata.cloud SDK to track daily progress of all participants as well create a system of immutable global accountability system to make sure users reach their goals.

Rarible protocol is being used to configure lazy minting options for the users of all the IPFS hash they are generating throughout the challenge. Revenue sharing being taken advantage of (using royalty option)

Backend: Node.js

Frontend: Svelte

## Diagramatic explanation of RunETH walkthrough

![RunETH Diagram](https://github.com/saxenism/RunETH/blob/8923598f121ceb22f81d01a1b8a00cb2c7fd9603/Workflow.png)

<br/>
<br/>

## Some Screenshots

![ss-4](https://user-images.githubusercontent.com/32522659/124523015-d63c8480-de12-11eb-868f-2cec90828a99.PNG)

<br/>
<br/>


![ss-3](https://user-images.githubusercontent.com/32522659/124523021-dd639280-de12-11eb-8b3c-dd03aa5db378.PNG)


<br/>
<br/>


![ss-2](https://user-images.githubusercontent.com/32522659/124523040-ea808180-de12-11eb-9806-c0ed29cce25b.PNG)


<br/>
<br/>


![ss-1](https://user-images.githubusercontent.com/32522659/124523045-ed7b7200-de12-11eb-8318-1ee282dfdb25.PNG)


<br/>
<br/>


## RoadMap:

* Twitter bot
  * To collect tweets and update the  public API about the user statistics (number of days streak went on)
* Public API
  * That will be accessed by the Oracles to verify whether the daily streak is being maintained or not

## On-going Tasks:

* Applied for a Twitter developer account. Waiting for verification. ✔️
* Explore `plumbR` to see how to create public APIs. 🚧
  * Writing the API in R, so that the twitter bot has to work in a homogeneous environment. 🤔
  * Plus, I can prototype much faster in R 🛩️
