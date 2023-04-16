import React, { useState, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VideoPlayer.css';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const [completed, setCompleted] = useState(false);
  const videoRef = useRef(null);
  const contractAddress = "0x43E6767b6E60c4D76ce996B41191697632ABe720";
  const senderAddress = "0xf0fF3c953E0eB19535A59AF82B02B834d9811e59"
  

// The ABI of the MyContract smart contract
const contractAbi = [
	{
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractOwner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // Replace this with the actual ABI

const contract = new web3.eth.Contract(contractAbi, contractAddress);
// The address of the recipient
// The amount to transfer
  const handlePlayPause = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleVideoEnd = () => {
    setCompleted(true);
  };
  const handleClaim = async () => {
    const accounts = await web3.eth.getAccounts();
  const userAddress = accounts[0];

  // set the recipient address
  const recipientAddress = userAddress;

  // set the amount to transfer
  const amount = web3.utils.toWei('0.001', 'ether'); // example amount

  // call the transfer function of the contract
  await contract.methods.transfer(recipientAddress, amount).send({from:contractAddress});
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src="https://www.shutterstock.com/shutterstock/videos/1057665724/preview/stock-footage-a-seconds-countdown-introduction-with-beautiful-slick-graphics.webm"
        onEnded={handleVideoEnd}
      />
      <Button variant="primary" onClick={handlePlayPause}>
        {playing ? 'Pause' : 'Play'}
      </Button>
      {completed && (
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Claim Your Prize</Form.Label>
            <Form.Text className="text-muted">
              To claim your prize, click the button below.
            </Form.Text>
          </Form.Group>
          <Button variant="success" onClick={handleClaim}>Claim</Button>
        </Form>
      )}
    </div>
  );
}

export default VideoPlayer;
