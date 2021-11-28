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

    static getByCityId(req, res, next) {
        return new Orm().getOrm().stopModel
            .getByCityId(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static create(req, res, next) {
        return new Orm().getOrm().stopModel
            .create({...req.query}).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) )
    }

}

export default StopsController;
