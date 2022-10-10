const GET_USER = `
	query getUser(
		$address: String!
	) {
  user(address: $address){  
    company
    country
    province
    address
    email    
  }
  
  
}
`;

module.exports = GET_USER;
