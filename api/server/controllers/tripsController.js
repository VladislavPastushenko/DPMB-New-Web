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

}

export default TripsController;
