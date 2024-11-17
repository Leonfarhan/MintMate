// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/eip/ERC721A.sol";
import "@thirdweb-dev/contracts/eip/interface/IERC721Supply.sol";

contract MintMateNFT is ERC721A {
    constructor(
        string memory _name,
        string memory _symbol
    )
        ERC721A(
            _name,
            _symbol
        )
    {}

    function totalSupply() public view virtual override returns (uint256) {
        return _totalMinted() - _totalBurned();
    }

    // Function to mint NFTs (you can customize this according to your needs)
    function mint(uint256 quantity) external {
        _mint(msg.sender, quantity);
    }
}
