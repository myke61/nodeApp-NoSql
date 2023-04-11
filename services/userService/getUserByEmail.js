const userModel = require('../../models/User/index');

const findUser = async (req) => {
    let user = await userModel.findOne({
        where:{
            email:req.body.email
        }
    });
    return user;
}

module.exports = findUser;