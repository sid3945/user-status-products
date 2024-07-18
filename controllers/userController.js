const User = require('../models/user');

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

        const query = {};

        if (role) {
            query.role = role;
        }

        if (active !== undefined) {
            query.active = active === 'true';
        }

        const options = {
            skip: (parseInt(page, 10) - 1) * parseInt(limit, 10),
            limit: parseInt(limit, 10)
        };

        let sortOptions = {};
        if (sort === 'name' || sort === 'created_at') {
            sortOptions[sort] = order === 'asc' ? 1 : -1;
        } else {
            sortOptions['created_at'] = 1; // Default sorting
        }

        const users = await User.find(query)
            .sort(sortOptions)
            .skip(options.skip)
            .limit(options.limit);

        const totalUsers = await User.countDocuments(query);

        res.status(200).json({
            body: users,
            totalDocs: totalUsers,
            totalPages: Math.ceil(totalUsers / options.limit),
            page: parseInt(page, 10),
            limit: parseInt(limit, 10)
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports =  getUsers ;