import Orm from "../model/orm";

class StopsController {

    static getAll(req, res, next) {
        return new Orm().getOrm().stopModel.getAll()
            .then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static getById(req, res, next) {
        return new Orm().getOrm().stopModel
            .getById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }


    static create(req, res, next) {
        if(req.session.loggedToken) {
            return new Orm().getOrm().userModel
                .getUserByAuthToken(req.session.loggedToken)
                .then((row, err) => {
                    let loggedUser = row.toJSON();
                        //...
                    return new Orm().getOrm().stopModel
                        .create(req.body).then((row, err) => (err) ? err.toJSON():  res.send("OK") )

                }).catch(err => {
                    if(err.message == "EmptyResponse") {
                        res.status(404).send("User not found");
                    }
                })
        } else {
            res.status(403).send('User not logged in');
        }
    }

    static editById(req, res, next) {
        if(req.session.loggedToken) {
            return new Orm().getOrm().userModel // Getting logged User by Auth token
                .getUserByAuthToken(req.session.loggedToken)
                .then((row, err) => {
                    let loggedUser = row.toJSON();
                    return new Orm().getOrm().stopModel // Getting news which we will edit
                        .getById(req.params.id)
                        .then((row, err) => {
                            let stops = row.toJSON();
                            req.body.id = stops.id; // Add id to data

                            return new Orm().getOrm().stopModel // Updating
                                .update(req.body)
                                .then((row) => { // Response with OK status
                                    let updStop = row.toJSON();
                                    res.status(200).send('OK');
                                })
                                .catch((err) => { // Response with Err status if something went wrong
                                    console.log(err);
                                    res.status(500).send(err);
                                });

                        })
                        .catch(err => {
                            if(err.message == "EmptyResponse") {
                                res.status(404).send("User not found");
                            }
                        })
                });
        } else { // Error if user isn't logged in
            res.status(403).send('User not logged in');
        }
    }

    static removeById(req, res, next) {
        if(req.session.loggedToken) {
            return new Orm().getOrm().userModel
                .getUserByAuthToken(req.session.loggedToken)
                .then((row, err) => {
                    let loggedUser = row.toJSON();
                        //...
                    return new Orm().getOrm().stopModel
                        .removeById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send("OK") )

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

export default StopsController;
