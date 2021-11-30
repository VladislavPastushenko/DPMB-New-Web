import BaseModel from './baseModel';

export default class ReservationModel extends BaseModel {
    constructor({orm, modelName, tableName, options = {}}) {
        super({orm, modelName, tableName, options});

        this.model = this.model.extend({
            trip() {
                return this.belongsTo('Trip', "trip_id", "id");
            },
            user() {
                return this.belongsTo('User', "user_id", "id");
            },
        })
    }


    getAll(query = null) {
        return this.model.query(function(qb) {
            qb.select('reservations.*')

            if (query.user_id) qb.where('reservations.user_id', query.user_id)
        }).fetchAll({
            withRelated: [{
                'trip': function(qb) {},
                'user': function(qb) {},
            }]
        });
    }


    getById(id){
        return this.model.query(function(qb) {
            qb.where('reservations.id', id)
        }).fetch({
            withRelated: [{
                'trip': function(qb) {},
                'user': function(qb) {},
            }]
        });
    }

    getByRouteId(routeId){
        return this.model.query(function(qb) {
            qb.where('reservations.route_id', routeId)
        }).fetchAll({
            withRelated: [{
                'trip': function(qb) {},
                'user': function(qb) {},
            }]
        });
    }

    getByUserId(userId){
        return this.model.query(function(qb) {
            qb.where('reservations.user_id', userId)
        }).fetchAll({
            withRelated: [{
                'trip': function(qb) {},
                'user': function(qb) {},
            }]
        });
    }
}
