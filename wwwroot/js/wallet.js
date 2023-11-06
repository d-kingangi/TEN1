// wallet.js

// Function to connect to a web3 wallet provider
function connectWallet() {
    if (typeof web3 !== 'undefined') {
      // Web3 provider is available, connect to it
      web3.eth.getAccounts(function (error, accounts) {
        if (!error) {
          // Wallet is connected, 'accounts' contains the connected addresses
          console.log('Connected wallet addresses:', accounts);
          // You can perform actions with the connected wallet here
        } else {
          // Handle error
          console.error('Error connecting to wallet:', error);
        }
      });
    } else {
      // Web3 provider not found, prompt the user to install a wallet
      alert('Please install a web3 wallet provider like MetaMask.');
    }
  }
  
  // Find your Wallet button element by ID and attach a click event listener
  document.getElementById('walletButton').addEventListener('click', connectWallet);
  
