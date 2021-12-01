import Orm from "../model/orm";

class ReservationsController {

    static getAll(req, res, next) {
        return new Orm().getOrm().reservationModel.getAll(req.query)
            .then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static getById(req, res, next) {
        return new Orm().getOrm().reservationModel
            .getById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static getForLoggedUser(req, res, next) {
        return new Orm().getOrm().reservationModel
            .getById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static create(req, res, next) {
        req.body.status = 'unpaid'
        if (req.session.loggedToken) {
            return new Orm().getOrm().userModel
                .getUserByAuthToken(req.session.loggedToken)
                .then((row, err) => {
                    let user = row.toJSON()
                    req.body.user_id = user.id
                    return new Orm().getOrm().reservationModel
                        .create(req.body).then((row) => {
                            res.status(200).send(row.toJSON())
                        } )
                        .catch(err => res.status(500).send(err));
                })
                .catch((err) => {
                    console.log(err)
                    if(err.message == "EmptyResponse") {
                        res.status(404).send("User not found");
                    }
                });
        } else {
            return new Orm().getOrm().reservationModel
                .create(req.body).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
        }
    }


    static editById(req, res, next) {
        if(req.session.loggedToken) {
            return new Orm().getOrm().userModel
                .getUserByAuthToken(req.session.loggedToken)
                .then((row, err) => {
                    let loggedUser = row.toJSON();
                    return new Orm().getOrm().reservationModel
                        .getById(req.params.id)
                        .then((row, err) => {
                            let reservation = row.toJSON();
                            if (loggedUser.role !== 'user') {
                                return new Orm().getOrm().reservationModel
                                    .update(req.body)
                                    .then((row) => {
                                        let updReservation = row.toJSON();
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
                                res.status(404).send("Reservation not found");
                            }
                        })
                });
        } else {
            res.status(403).send('User not logged in');
        }
    }

    static getByRouteId(req, res, next) {
        return new Orm().getOrm().reservationModel
            .getByRouteId(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static getByUserId(req, res, next) {
        return new Orm().getOrm().reservationModel
            .getByUserId(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static removeById(req, res, next) {
        if(req.session.loggedToken) {
            return new Orm().getOrm().userModel
                .getUserByAuthToken(req.session.loggedToken)
                .then((row, err) => {
                    let loggedUser = row.toJSON();
                    if (loggedUser.role !== 'user') {
                        //...
                        return new Orm().getOrm().reservationModel
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

export default ReservationsController;
