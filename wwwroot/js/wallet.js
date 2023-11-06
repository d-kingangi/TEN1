
function connectWallet() {
    if (typeof web3 !== 'undefined') {
      web3.eth.getAccounts(function (error, accounts) {
        if (!error) {
          console.log('Connected wallet addresses:', accounts);
        } else {
          console.error('Error connecting to wallet:', error);
        }
      });
    } else {
      alert('Please install a web3 wallet provider like MetaMask.');
    }
  }
  document.getElementById('walletButton').addEventListener('click', connectWallet);
  
