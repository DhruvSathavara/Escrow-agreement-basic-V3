// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Escrow {
    struct EscrowAgreement {
        uint agreementID;
        address payable client;
        address payable serviceProvider;
        uint256 agreementAmount;
        uint256 clientStake;
        uint256 serviceProviderStake;
        bool fundsReleased;
        bool completed;
    }

    mapping(uint => EscrowAgreement) public agreements;

    uint256 public numOfAgreement;

    function createEscrowAgreement (
        uint _agreementId,
        address payable _client,
        address payable _serviceProvider,
        uint256 _amount 
    ) public payable{
        require(
            _client != address(0) && _serviceProvider != address(0),
            "Invalid client or service provider address."
        );
        require(msg.value >= _amount * 2, "Kindly provide required Stake");
    

        EscrowAgreement storage escrowAgreement = agreements[numOfAgreement];
        escrowAgreement.agreementID = _agreementId;
        escrowAgreement.client = _client;
        escrowAgreement.serviceProvider = _serviceProvider;
        escrowAgreement.agreementAmount = _amount;
        escrowAgreement.clientStake = msg.value;
        escrowAgreement.serviceProviderStake = 0;
        escrowAgreement.fundsReleased = false;
        escrowAgreement.completed = false;
      
        numOfAgreement ++;
        
    }

    function completedWork (uint256 _agreementId) public {
        require(agreements[_agreementId].serviceProvider == msg.sender,
        "Only the service provider can call this function.");

        agreements[_agreementId].completed = true;
    }

    function stakeProviderEth (uint256 _agreementId) public payable {
        require(agreements[_agreementId].serviceProvider == msg.sender,
        "Only the service provider can call this function.");

        require(agreements[_agreementId].serviceProviderStake == 0,
        "You have already provided stake.");

        require(agreements[_agreementId].fundsReleased == false,
        "can't stake after fund released !");

        agreements[_agreementId].serviceProviderStake = msg.value;
        
    }

    function releaseFunds(uint256 _agreementId) public payable {
        require(
            agreements[_agreementId].client == msg.sender,
            "Only the client can approve release of funds."
        );

        require(
            !agreements[_agreementId].fundsReleased,
            "Funds have already been released for this escrow agreement."
        );
        require(
            agreements[_agreementId].clientStake >= 0,
            "There are no funds to release."
        );
        agreements[_agreementId].fundsReleased = true;

        agreements[_agreementId].serviceProvider.transfer(agreements[_agreementId].clientStake/2);

    }

    function cancel(uint _agreementId) public {
        require(
            agreements[_agreementId].client == msg.sender,
            "Only the client can cancel the escrow agreement."
        );
        require(
            !agreements[_agreementId].fundsReleased,
            "Funds have already been released for this escrow agreement."
        );
        require(
            agreements[_agreementId].clientStake >= 0,
            "There are no funds to return."
        );
        agreements[_agreementId].client.transfer(agreements[_agreementId].clientStake);
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}
}
