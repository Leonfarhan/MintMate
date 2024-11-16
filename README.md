# MintMate - NFT Minting Platform

MintMate is a modern web application for creating and minting NFTs on the Ethereum Sepolia testnet. Built with Next.js, Tailwind CSS, and Thirdweb SDK, it provides a seamless and user-friendly experience for NFT creation.

## Features

- 🎨 Upload and mint NFTs with custom names
- 🖼️ View gallery of minted NFTs
- 💳 Connect with any Web3 wallet
- 🔒 Secure minting on Sepolia testnet
- 🎯 Direct IPFS integration for media storage

## Smart Contract

- Contract Address (Sepolia): `0xA895a9b5882DBa287CF359b6a722C5be46aCb675`
- [View on Etherscan](https://sepolia.etherscan.io/address/0xA895a9b5882DBa287CF359b6a722C5be46aCb675)
- [View on Thirdweb](https://thirdweb.com/sepolia/0xA895a9b5882DBa287CF359b6a722C5be46aCb675)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Leonfarhan/MintMate.git
cd MintMate
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory with your environment variables:
```env
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_client_id
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technical Stack

- **Frontend Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Web3 Integration**: Thirdweb SDK
- **Storage**: IPFS via Thirdweb Storage
- **Smart Contract Network**: Ethereum Sepolia Testnet

## Development

- `/app`: Next.js app router pages and layouts
- `/components`: React components including NFT form and gallery
- `/hooks`: Custom React hooks
- `/lib`: Utility functions and configurations
