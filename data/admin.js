const mongoCollections = require("../config/mongoCollections");
const admin = mongoCollections.admin;
const uuid = require("node-uuid");
const bcrypt = require('bcrypt-nodejs');

const adminList = [
    {
        _id: "uuid.v4()",
        "adminname": "Zijing Huang",
        "password": bcrypt.hashSync("123456")
    },
    {
        _id: "uuid.v4()",
        "adminname": "Shizhe Zhou",
        "password": bcrypt.hashSync("123456")
    },
    {
        _id: "uuid.v4()",
        "adminname": "Jiao Wang",
        "password": bcrypt.hashSync("123456")
    }
]

let exportedMethods = {
    getAdmin: (admin) => {
        if (admin == undefined) {
            return Promise.reject("No admin provided");
        }
        let adminOne = adminList.filter(x = x.adminname == admin).shift();
        if (!adminOne){
            return Promsie.reject("No admin found");
        }
        return Promise.resolve(adminOne);
    }
}

module.exports = exportedMethods;