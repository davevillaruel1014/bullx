
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract BullsxBears is ERC721URIStorage {
    
    uint256 tokenCounter;
    uint256 maxTokenSupply;
    
    constructor () ERC721 ("BullsxBears NFT", "BBNFT"){
        tokenCounter = 0;
        maxTokenSupply = 9999;
    }

    function mintNFT(address _to, string memory tokenURI) public returns (uint256) {
        
        require( tokenCounter < maxTokenSupply,'Ledger Coin Max Supply is 1,444');
        
        uint256 newItemId = tokenCounter;
        _safeMint(_to, newItemId);
        _setTokenURI(newItemId, tokenURI);
        tokenCounter = tokenCounter + 1;
        return newItemId;
    }
}