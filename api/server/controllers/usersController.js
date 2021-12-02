import Orm from "../model/orm";
import Mailer from '../utils/mailer';
const dotenv = require("dotenv");
const config = dotenv.config();

class UsersController {

    static getAll(req, res, next) {
        return new Orm().getOrm().userModel
        .getUserByAuthToken(req.session.loggedToken)
            .then((row, err) => {

                let user = row.toJSON();
                if (user.role !== 'user') {
                    return new Orm().getOrm().userModel.getAll(req.query)
                        .then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) )
                }
                else {
                    res.status(403).send("User doesn't have rights to access this route");
                }
            })
            .catch((err) => {
                if (err.message == "EmptyResponse") {
                    res.status(404).send("User not found");
                }
            });
    }

    static getById(req, res, next) {
        return new Orm().getOrm().userModel
            .getById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }


    static editById(req, res, next) {
        if(req.session.loggedToken) {
            return new Orm().getOrm().userModel
                .getUserByAuthToken(req.session.loggedToken)
                .then((row, err) => {
                    let loggedUser = row.toJSON();
                    return new Orm().getOrm().userModel
                        .getById(req.params.id)
                        .then((row, err) => {
                            let user = row.toJSON();
                            req.body.id = user.id;
                            // Only admin can change role
                            if ((loggedUser.role !== 'admin')) {
                                req.body.role = user.role
                            }
                            // Carrier and personnel can change status only for customers
                            if ((loggedUser.role === 'carrier' || loggedUser.role === 'personnel') && user.role !== 'user') {
                                req.body.is_active = user.is_active
                            }
                            // Admin can edit everyone, carrier can change personnel, carrier and personnel can edit customers, customer can edit himself
                            if (
                                (loggedUser.role === 'admin') ||
                                (loggedUser.role === 'carrier' && user.role === 'personnel') ||
                                ((loggedUser.role === 'personnel' || loggedUser.role === 'carrier') && user.role === 'user') ||
                                (loggedUser.id === user.id || user.is_active === 1)
                            ) {
                                return new Orm().getOrm().userModel
                                    .update(req.body)
                                    .then((row) => {
                                        let updUser = row.toJSON();
                                        res.status(200).send('OK');
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                        res.status(500).send(err);
                                    });
                            } else {
                                res.status(403).send("User doesn't have rights to edit this user");
                            }

                        })
                        .catch(err => {
                            if(err.message == "EmptyResponse") {
                                res.status(404).send("User not found");
                            }
                        })
                });
        } else {
            res.status(403).send('User not logged in');
        }
    }


    static signup(req, res, next) {
        return new Orm().getOrm().userModel
            .register(req.body)
            .then((row, err) => {
                const bodyParams = {
                    'template': 'userVerification.html',
                    'context': {
                        'userVerificationUrl':
                            'http://' + req.hostname +
                            config.parsed.USER_VERIFICATION_URL +
                            row.toJSON().auth_token
                        }
                }

                Mailer.sendEmail(
                    config.parsed.EMAIL_FROM,
                    row.toJSON().email,
                    bodyParams,
                    (err, info) => {
                        if(err) {
                            res.status(500).send('Error: '+err.message);
                        } else {
                            res.status(200).send('OK');
                        }
                    },
                );
            })
            .catch((err) => {

                if(err.message.includes('Duplicate entry')) {
                    if(err.message.endsWith('for key \'email\'')) {
                        res.status(400).send('User with email you entered is already registered.');
                    }
                } else {
                    res.status(500).send('Error occured while registering new user');
                }
            });
    }


    static verify(req, res, next) {
        return new Orm().getOrm().userModel
            .getUserByAuthToken(req.params.authToken)
            .then((row, err) => {
                if(row.toJSON().is_active == 1) {
                    res.status(200).send('User is already verified and active');
                } else {
                    return new Orm().getOrm().userModel
                        .activateUserById(row.toJSON().id)
                        .then((row, err) => {

                            req.session.loggedToken = req.params.authToken;

                            const bodyParams = {
                                'template': 'userVerified.html',
                                'context': {}
                            }

                            Mailer.sendEmail(
                                config.parsed.EMAIL_FROM,
                                row.toJSON().email,
                                bodyParams,
                                (err, info) => {
                                    if(err) {
                                        res.status(500).send('Error: '+err.message);
                                    } else {
                                        res.status(200).send('OK');
                                    }},
                                res
                            );
                        });
                }
            }).catch((err) => {
                if(err.message == "EmptyResponse") {
                    res.status(404).send("User not found");
                }
            });
    }

    static login(req, res, next) {
        return new Orm().getOrm().userModel
            .getUserForLogin(req.body)
            .then((row, err) => {
                if(row) {
                    req.session.loggedToken = row.toJSON().auth_token;
                    res.status(200).send(row.toJSON().auth_token)
                }
            }).catch((err) => {
                if(err.message == "EmptyResponse") {
                    res.status(404).send("Invalid credentials or inactive user");
                } else {
                    console.log(err);
                    res.status(500).send('Error occured while logging in');
                }
            });
    }


    static getAuthToken(req, res, next) {
        if(req.session.loggedToken) {
        return new Orm().getOrm().userModel
            .getUserByAuthToken(req.session.loggedToken)
            .then((row, err) => {
                if(row) {
                    res.status(200).send({status: 'OK', data: req.session.loggedToken});
                }
            }).catch((err) => {
                if(err.message == "EmptyResponse") {
                    res.status(404).send("Invalid credentials or inactive user");
                }
            });
        } else {
            res.status(403).send('User is not logged in');
        }
    }

    static getLoggedUser(req, res, next) {
        return new Orm().getOrm().userModel
            .getUserByAuthToken(req.params.authToken)
            .then((row, err) => {
                req.session.loggedToken = req.params.authToken;
                (err) ? err.toJSON(): res.send(row.toJSON())
            })
            .catch((err) => {
                if(err.message == "EmptyResponse") {
                    res.status(404).send("User not found");
                }
            });
    }

    static logout(req, res, next) {
        req.session.destroy();
        res.status(200).send('OK');
    }


    // FOR TESTING
    static setSession(req, res, next) {
        return new Orm().getOrm().userModel
            .getUserByAuthToken(req.params.authToken)
            .then((row, err) => {
                req.session.loggedToken = req.params.authToken;
                (err) ? err.toJSON(): res.send('OK')
            })
            .catch((err) => {
                if(err.message == "EmptyResponse") {
                    res.status(404).send("User not found");
                }
            });
    }

    static removeById(req, res, next) {
        if(req.session.loggedToken) {
            return new Orm().getOrm().userModel
                .getUserByAuthToken(req.session.loggedToken)
                .then((row, err) => {
                    let loggedUser = row.toJSON();
                    if ((loggedUser.role === 'admin') ||
                        (loggedUser.role === 'carrier' && user.role === 'personnel') ||
                        ((loggedUser.role === 'personnel' || loggedUser.role === 'carrier') && user.role === 'user') ||
                        (loggedUser.id === user.id || user.is_active === 1)) {
                        //...
                        return new Orm().getOrm().userModel
                        .removeById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send("OK") )
                    } else {
                        res.status(403).send("User doesn't have rights edit this user");
                    }

                }).catch(err => {
                    if(err.message == "EmptyResponse") {
                        res.status(404).send("User not found");
                    }
                })
        } else {
            res.status(403).send('User not logged in');
        }
    }
}

export default UsersController;
