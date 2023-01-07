export const ESCROW_CONTRACT_ADDRESS = "0x16745D2B8A61D51b0Ef60d2961Dc4102649F3f2b";
export const ESCROW_ABI =  [
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "agreements",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "agreementID",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "client",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "serviceProvider",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "agreementAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "clientStake",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "serviceProviderStake",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "fundsReleased",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "completed",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_agreementId",
        "type": "uint256"
      }
    ],
    "name": "cancel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_agreementId",
        "type": "uint256"
      }
    ],
    "name": "completedWork",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_agreementId",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_client",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_serviceProvider",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "createEscrowAgreement",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "numOfAgreement",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_agreementId",
        "type": "uint256"
      }
    ],
    "name": "releaseFunds",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_agreementId",
        "type": "uint256"
      }
    ],
    "name": "stakeProviderEth",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]