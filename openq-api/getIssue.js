const axios = require('axios');
const { GET_CATEGORY } = require('./graphql');

const getIssue = async (bountyId) => {
	let result;

	try {
		result = await axios
			.post(
				`https://api.github.com/graphql`,
				{
					query: GET_CATEGORY,
					variables: { bountyId },
				},
				{
					headers: {
						Authorization: `Bearer ${process.env.PAT}`,
					},
				}

			);
		return result.data.data.node.labels.nodes.map(label => label.name.toLowerCase())
			.filter(label =>label === "not for profit");
	} catch (error) {
		// GraphQL errors at error.response.data.errors
		console.error('error in getIssue', error);
	}


};

module.exports = getIssue;