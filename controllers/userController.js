const User = require('../models/user');


async function getUsers(req, res){
    const {
        role,
        active,
        page,
        limit,
        sort
    } = req.query;
    console.log(role, active, page, limit, sort);
    // console.log(req.query);
}

module.exports = getUsers;