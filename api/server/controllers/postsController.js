import Orm from "../model/orm";

class PostsController {

    static getAll(req, res, next) {
        return new Orm().getOrm().postModel.getAll()
            .then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static get(req, res, next) {
        return new Orm().getOrm().postModel
            .getById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static create(req, res, next) {
        return new Orm().getOrm().postModel
            .create(req.body).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) )
    }

    static removeById(req, res, next) {
        return new Orm().getOrm().postModel
            .removeById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send("OK") )
    }

}

export default PostsController;
