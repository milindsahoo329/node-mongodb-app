const Joi = require('joi');

const config = require("../config/authConfig");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {

    const schema = Joi.object().keys({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        roles: Joi.array().required()
    });

    const validation = await schema.validate(req.body);

    if(validation.error){
        res.status(422).json({
            status: 'error',
            message: 'Invalid request data',
            data: validation.error
        });
    } else {

        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        });
    
        user.save((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
    
            if (req.body.roles) {
                Role.find(
                    {
                        name: { $in: req.body.roles }
                    },
                    (err, roles) => {
                        if (err) {
                            res.status(500).send({ message: err });
                            return;
                        }
    
                        user.roles = roles.map(role => role._id);
                        user.save(err => {
                            if (err) {
                                res.status(500).send({ message: err });
                                return;
                            }
    
                            res.send({ message: "User was registered successfully!" });
                        });
                    }
                );
            } else {
                Role.findOne({ name: "user" }, (err, role) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }
    
                    user.roles = [role._id];
                    user.save(err => {
                        if (err) {
                            res.status(500).send({ message: err });
                            return;
                        }
    
                        res.send({ message: "User was registered successfully!" });
                    });
                });
            }
        });

    }

    
};

exports.signin = async (req, res) => {

    const schema = Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required()
    });

    const validation = await schema.validate(req.body);

    if(validation.error){
        res.status(422).json({
            status: 'error',
            message: 'Invalid request data',
            data: validation.error
        });
    } else {
        User.findOne({
            username: req.body.username
        })
            .populate("roles", "-__v")
            .exec((err, user) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                if (!user) {
                    return res.status(404).send({ message: "User Not found." });
                }

                var passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    user.password
                );

                if (!passwordIsValid) {
                    return res.status(401).send({
                        accessToken: null,
                        message: "Invalid Password!"
                    });
                }

                var token = jwt.sign({ id: user.id }, config.secret, {
                    expiresIn: 86400 // keeping the default 24 hours
                });

                var authorities = [];

                for (let i = 0; i < user.roles.length; i++) {
                    authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
                }
                res.status(200).send({
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    roles: authorities,
                    accessToken: token
                });
            });
    }
};