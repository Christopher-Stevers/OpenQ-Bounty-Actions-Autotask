
const ADD_TO_BOUNTY = require('./addToBounty');
const ADD_TO_VALUE_CLAIMED = require("./addToValueClaimed");
const CREATE_BOUNTY = require('./createBounty');
const CREATE_REPOSITORY = require('./createRepository');
const GET_CATEGORY = require('./getCategory');

module.exports = { CREATE_BOUNTY, ADD_TO_BOUNTY, GET_CATEGORY, ADD_TO_VALUE_CLAIMED, CREATE_REPOSITORY };