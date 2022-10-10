const axios = require("axios");
const  GET_USER = require("../graphql/getUser")

const getOffChainData = async(address, baseUrl)=>{
return new Promise(async (resolve, reject)=>{

	try {
			const result = await axios
				.post(
					`${baseUrl}/graphql`,
					{
						query: GET_USER,
						variables: { address },
					},


				);
			return resolve(result.data.data.user);
		} catch (error) {
			console.log(JSON.stringify(error.response.data))
		}

})

}


module.exports = getOffChainData;