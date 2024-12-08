// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MintMate is ERC721URIStorage {
    uint256 public _tokenIdCounter;

    constructor() ERC721("MintMate Test", "MINT Test") {}

    function mintNFT(address recipient, string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 tokenId = _tokenIdCounter;
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);
        _tokenIdCounter += 1;

        return tokenId;
    }
}