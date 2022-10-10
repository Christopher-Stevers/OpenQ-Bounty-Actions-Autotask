const axios = require("axios")

const GET_BOUNTY= require ("../graphql/getBounty")

const getOnChainData = async(address, subgraphUrl)=>{

const axios = require('axios');

/**
 * 
 * @param {*} sortOrder 
 * @param {skip for offset based pagination} startAt 
 * @param {barch size} quantity 
 * @returns 
 */

	return promise = new Promise(async (resolve, reject) => {
		try {
			result = await axios
				.post(
						`${subgraphUrl}`,
						{
						query: GET_BOUNTY,
						variables: { address: address },
					},
				);
			resolve(result.data);
		} catch (e) {
			console.error(e);
		
	}
	
});
}

module.exports = getOnChainData;