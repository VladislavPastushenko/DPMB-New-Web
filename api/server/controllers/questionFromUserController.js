import Orm from "../model/orm";

class QuestionsFromUsersController {

    static getAll(req, res, next) {
        return new Orm().getOrm().questionFromUserModel.getAll()
            .then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static get(req, res, next) {
        return new Orm().getOrm().questionFromUserModel
            .getById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static create(req, res, next) {
        return new Orm().getOrm().questionFromUserModel
            .create(req.body).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) )
    }

    static removeById(req, res, next) {
        return new Orm().getOrm().questionFromUserModel
            .removeById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send("OK") )
    }

}

export default QuestionsFromUsersController;
