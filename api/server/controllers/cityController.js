import Orm from "../model/orm";

class CityController {

    static getAll(req, res, next) {
        return new Orm().getOrm().cityModel.getAll()
            .then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static get(req, res, next) {
        return new Orm().getOrm().cityModel
            .getById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static create(req, res, next) {
        return new Orm().getOrm().cityModel
            .create({...req.query}).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) )
    }

}

export default PostsController;
