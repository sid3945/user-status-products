const User = require('../models/user');

async function createUser(req, res){
    try {
        const {role, active, email, name, id} = req.body;
        const user = new User({role, active, email, name, id});
        const resUser = await user.save();
        console.log(resUser);
        res.status(201).json({body: resUser});
    } catch (error){
        console.error("Failed to create user ", error);
        res.status(500).json({message: "Internal Server Failure"});
    }
};

async function getUsers(req, res) {
    try {
        const {
            role,
            active,
            page = 1,
            limit = 10,
            sort = 'created_at',
            order = 'asc'
        } = req.query;

        console.log(active);

        const query = {};

        if (role) {
            query.role = role;
        }

        if (active !== undefined) {
            if(active === 'true'){
                query.active = true
            } else if(active === 'false'){
                query.active = false;
            }
        }

        console.log(query);

        const options = {
            skip: (parseInt(page, 10) - 1) * parseInt(limit, 10),
            limit: parseInt(limit, 10)
        };

        let sortOptions = {};
        if (sort === 'name' || sort === 'created_at') {
            sortOptions[sort] = order === 'asc' ? 1 : -1;
        } else {
            sortOptions['created_at'] = 1;
        }

        const users = await User.find(query).sort(sortOptions).skip(options.skip).limit(options.limit);
        res.status(200).json({
            body: users,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {getUsers,createUser};