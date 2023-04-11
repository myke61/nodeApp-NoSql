const userModel = require('../../models/User/index');
const userType = require('../../enums/userTypeEnum');
const userFindService = require('../../services/userService/getUserByEmail');

module.exports.create = async(req,res) => {
    let user = await userFindService(req);
    if(user == null){
        const userObj = {
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            userType:userType.WORKER
        };
        userModel.create(userObj)
            .then(data => {
                res.send({
                    Header:{IsSuccess:true},
                    Body:data._id
                });
            })
            .catch(err => {
                res.send(err);
            });
    }else{
        res.status(404)
        .json({
            Header:{IsSuccess:false},
            Body:"User already exist with the email adress!!"
        });
    }
};