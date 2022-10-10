const GET_BOUNTY = `
	query getBounty(
		$address: String!
	)   {
  bounty(id:$address){
    deposits{
      sender{id}
      tokenAddress
      volume
    }
  } 
}
`;

module.exports = GET_BOUNTY;
