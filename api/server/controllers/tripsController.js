import Orm from "../model/orm";

class TripsController {

    static getAll(req, res, next) {
        return new Orm().getOrm().tripModel.getAll(req)
            .then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static getById(req, res, next) {
        return new Orm().getOrm().tripModel
            .getById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static getByFromToIds(req, res, next) {
        return new Orm().getOrm().tripModel.getByFromToIds(req.params.from_id, req.params.to_id, req.query.date)
            .then((row, err) => (err) ? err.toJSON():  res.send(row) )
            .catch(err => {
                if(err.message == "EmptyResponse") {
                    res.status(404).send("Routes Not Found");
                } else {
                    console.log(err);
                    res.status(500).send('Error occured while logging in');
                }
            });
    }

    static create(req, res, next) {
        return new Orm().getOrm().tripModel
            .create(req.body).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) )
    }

    static editById(req, res, next) {
        if(req.session.loggedToken) {
            return new Orm().getOrm().userModel
                .getUserByAuthToken(req.session.loggedToken)
                .then((row, err) => {
                    let loggedUser = row.toJSON();
                    return new Orm().getOrm().tripModel
                        .getById(req.params.id)
                        .then((row, err) => {
                            let trip = row.toJSON();
                            req.body.start_time = trip.start_time
                            req.body.end_time = trip.end_time
                            if (loggedUser.role !== 'user') {
                                return new Orm().getOrm().tripModel
                                    .update(req.body)
                                    .then((row) => {
                                        let updTrip = row.toJSON();
                                        res.status(200).send('OK');
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                        res.status(500).send(err);
                                    });
                            } else {
                                res.status(403).send("User doesn't have rights edit this user");
                            }

                        })
                        .catch(err => {
                            if(err.message == "EmptyResponse") {
                                res.status(404).send("Trip not found");
                            }
                        })
                });
        } else {
            res.status(403).send('User not logged in');
        }
    }

    static removeById(req, res, next) {
        if(req.session.loggedToken) {
            return new Orm().getOrm().userModel
                .getUserByAuthToken(req.session.loggedToken)
                .then((row, err) => {
                    let loggedUser = row.toJSON();
                    if (loggedUser.role !== 'user') {
                        //...
                        return new Orm().getOrm().tripModel
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

export default TripsController;
