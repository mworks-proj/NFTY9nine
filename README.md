# NFTY 9Nine Marketplace Development Guide

Welcome to the NFTY 9Nine Marketplace's development guide. Our marketplace enables the purchase & sale of NFT collections on any EVM-compatible blockchain. This README will guide you in setting up your development environment to collaborate with our team.

## Prerequisites

Before diving into the project, ensure you have the following prerequisites:

1. **Node.js**: The project runs on Node. Ensure you have the latest stable version.
2. **Yarn**: We use Yarn as our package manager. [Install Yarn here](https://classic.yarnpkg.com/en/docs/install/).
3. **Next.js**: Our project is built using the Next.js framework. A basic understanding is essential.
4. **MetaMask/Coinbase**: Required for interacting with the Ethereum network. 
    - [Download MetaMask](https://metamask.io/download/)
    - [Setup Coinbase Account/Wallet](https://tinyurl.com/coinbasew3)
5. **Solidity**: Our smart contracts are written in Solidity. Familiarity with the language is beneficial.
6. **Web3 & Ethers.js**: Our Dapp integrates with Ethereum-based networks, and we use ethers.js for this purpose.
7. **TypeScript**: The project uses TypeScript, so familiarity with it is beneficial.
8. **ThirdWeb SDK**: We integrate with the ThirdWeb SDK for specific blockchain functionalities. Having prior knowledge will be an advantage.
9. **ReactJS**: Our frontend leverages ReactJS and its ecosystem, including libraries like `react-hook-form` and `react-hot-toast`.

## Key Packages & Libraries

Here's a brief overview of some significant packages and libraries we use:

- **ThirdWeb SDK and React**: These packages (`@thirdweb-dev/sdk`, `@thirdweb-dev/react`) aid in crafting blockchain functionalities.

- **React Use Web3**: For interacting with the Ethereum blockchain `react-use-web3` is used for this purpose.
- **Ethers**: For Ethereum blockchain interactions `ethers` is used for this purpose.   
- **Next.js Progress Bar**: We use `nextjs-progressbar` to provide visual feedback during route changes.
- **React**: We use `react` for building the frontend of the application. React is a JavaScript library for building user interfaces and in this project we reference react-'components' by integrating react we can build reusable components and manage the state of the application. If you have errors realting to react you can install react.


## Project Structure
## Setting Up Your Development Environment

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/mworks-proj/NFTY9nine.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd NFTY9nine
    ```
    you dirctory should look like this
    ```bash
    NFTY9nine
    ├── components
    ├── const
    ├── pages
    ├── public
    ├── styles
    ├── utils
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierignore
    ├── LICENSE.md
    ├── next-env.s.ts
    ├── next.config.js
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    └── yarn.lock
    ```

3. **Install Dependencies**:
    With Yarn, you can set up all required packages. Run the following command to install them:
    ```bash
    yarn install
    ```

4. **Run the Development Server**:
    To start the local development server and begin working:
    ```bash
    yarn dev
    ```

5. **Linting and Code Quality**:
    We use ESLint to ensure code quality. Before committing changes, ensure your code meets our linting standards:
    ```bash
    yarn lint
    ```

6. **Building for Production**:
    When you're ready to build the application for production use, execute:
    ```bash
    yarn build
    ```

7. **Deployment**:
    After building, you can deploy the application using the following command:
    ```bash
    yarn deploy
    ```

With these steps, you should have the application running locally and be ready for development and collaboration. For any issues, consult the 'Prerequisites' section to ensure all requirements are met.

