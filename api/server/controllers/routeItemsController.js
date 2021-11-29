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

}

export default RouteItemsController;
