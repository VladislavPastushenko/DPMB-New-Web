import Orm from "../model/orm";

class RouteItemsController {

    static getAll(req, res, next) {
        return new Orm().getOrm().routeItemModel.getAll()
            .then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static createMultiple(req, res, next) {
        return new Orm().getOrm().routeItemModel
            .createMultiple(req.body).then((row, err) => (err) ? err.toJSON():  res.send("OK") )
    }

    static removeById(req, res, next) {
        if(req.session.loggedToken) {
            return new Orm().getOrm().userModel
                .getUserByAuthToken(req.session.loggedToken)
                .then((row, err) => {
                    let loggedUser = row.toJSON();
                    if (loggedUser.role !== 'user') {
                        //...
                        return new Orm().getOrm().routeItemModel
                            .removeById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send("OK") )
                    } else {Number
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

export default RouteItemsController;
