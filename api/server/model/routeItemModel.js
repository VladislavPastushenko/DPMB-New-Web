import BaseModel from './baseModel';

export default class RouteItemModel extends BaseModel {
    constructor({orm, modelName, tableName, options = {}}) {
        super({orm, modelName, tableName, options});

        this.model = this.model.extend({
            stop() {
                return this.belongsTo('Stop', "stop_id", "id");
            },
            trip() {
                return this.belongsTo('Trip', "trip_id", "id");
            },
        })
    }

    getAll(){
        return this.model.query(function(qb) {
            qb.select('route_items.*')
        }).fetchAll({
            withRelated: [{
                'stop': function(qb) {},
                'trip': function(qb) {},
            }]
        });
    }

    getById(id){
        return this.model.query(function(qb) {
            qb.where('route_items.id', id)
        }).fetch({
            withRelated: [{
                'stop': function(qb) {},
                'trip': function(qb) {},
            }]
        });
    }

    getByTripId(tripId){
        return this.model.query(function(qb) {
            qb.where('route_items.trip_id', tripId)
        }).fetchAll({
            withRelated: [{
                'stop': function(qb) {},
                'trip': function(qb) {},
            }]
        });
    }


    getByStopId(stopId){
        return this.model.query(function(qb) {
            qb.where('route_items.stop_id', stopId)
        }).fetchAll({
            withRelated: [{
                'stop': function(qb) {},
                'route': function(qb) {},
            }]
        });
    }
}
