/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Goerli } from "@thirdweb-dev/chains";
export const NETWORK = Goerli ;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x4A483b72BB0F6A0542841a3ad64036d8361Bda47";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS = "0xF444311D33D4F358dBF3Bdc84402e5eaD533eB73";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://goerli.polygonscan.com";
