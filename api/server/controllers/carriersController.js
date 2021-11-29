import Orm from "../model/orm";

class CarriersController {

    static getAll(req, res, next) {
        return new Orm().getOrm().carrierModel.getAll()
            .then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static getById(req, res, next) {
        return new Orm().getOrm().carrierModel
            .getById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static create(req, res, next) {
        return new Orm().getOrm().carrierModel
            .create(req.body).then((row, err) => (err) ? err.toJSON():  res.send("OK") )
    }

}

export default CarriersController;
