import Orm from "../model/orm";

class RouteItemsController {

    static createMultiple(req, res, next) {
        return new Orm().getOrm().routeItemsModel
            .createMultiple(req.body).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) )
    }

}

export default RouteItemsController;
