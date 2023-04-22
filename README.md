# Get tDAI while you sleep

Had to find an easier way to get tDAI to use on PulseChain Testnet v4 PulseX AMM.
Freeing my time from using the smart contract manually with MetaMask.

## Installation

# PREP

# Ubuntu 

Update the package list by running the command:

`sudo apt-get update`

Install Node.js and npm by running the command:

`sudo apt-get install nodejs npm`

This will install both Node.js and npm on your system.

Verify that Node.js and npm are installed correctly by running the commands:

`node -v`
`npm -v`

# For Windows:
Go to the Node.js website at https://nodejs.org/.

Click the "Download" button to download the Node.js installer for Windows.

Run the installer and follow the prompts to install Node.js and npm on your system.

Once the installation is complete, open a Command Prompt or PowerShell window.

Verify that Node.js and npm are installed correctly by running the commands:

`node -v`
`npm -v`

extra: install Git on Windows by following these steps:

Download the Git installer from the official Git website at https://git-scm.com/download/win.

Run the installer executable file and follow the prompts to install Git on your system.

During the installation process, you will be asked to select the components to install. You can leave the default options selected or choose to customize the installation as per your requirements.

You will also be asked to choose the default text editor to use with Git. You can leave the default option selected or choose a different text editor if you prefer.

After completing the installation, open a Command Prompt or PowerShell window and verify that Git is installed correctly by running the command:


`git --version`


# LAUNCH

1. Clone this repo: `gh repo clone PChadx/get-tDAI-Sepolia` or download it
2. Create `.env` with the environment variables listed below
3. Run `npm install` in the root folder

## Environment variables
Always use a new wallet for all of this. 

- `INFURA_API_KEY`=---replace--this-----
- `PRIVATE_KEY`=---replace--this-----
- `YOUR_ADDRESS`=0x---replace--this-----


Also, please, consider looking at `.env.sample`.

# License

MIT — use for any purpose.  
