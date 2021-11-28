import BaseModel from './baseModel';

export default class TripModel extends BaseModel {
    constructor({orm, modelName, tableName, options = {}}) {
        super({orm, modelName, tableName, options});

        this.model = this.model.extend({
            routeItems() {
                return this.hasMany('RouteItem', 'trip_id')
            },
            stop() {
                return this.belongsTo('Stop', "route_item:stop_id", "id");
            },
            carrier() {
                return this.belongsTo('Carrier', "carrier_id", "id");
            },

        });
    }


    getAll(req) {
        return this.model.query(function(qb) {
            qb.select('trips.*')

            if (req.query.status) {
                qb.where('trips.status', req.query.status)
            }
            if (req.query.carrier_id) {
                qb.where('trips.carrier_id', req.query.carrier_id)
            }
        }).fetchAll({
            withRelated: [{
                'carrier': function(qb) {},
                'routeItems': function(qb) {},
            }]
        });
    }


    getById(id){
        return this.model.query(function(qb) {
            qb.where('trips.id', id)
        }).fetch({
            withRelated: [{
                'carrier': function(qb) {},
                'routeItems': function(qb) {},
                'stop': function(qb) {},
            }]
        });
    }

    getByFromToIds(from_id, to_id){
        return this.model.query(function(qb) {
            qb.select('trips.*')
            qb.whereRaw(`
            EXISTS
                (SELECT * from route_items route_item1 WHERE route_item1.trip_id=trips.id AND route_item1.stop_id=${from_id} AND EXISTS
                (SELECT * from route_items route_item2 WHERE route_item2.trip_id=trips.id AND route_item2.stop_id=${to_id} AND route_item1.position < route_item2.position))
            `)
        }).fetchAll({
            withRelated: [{
                'routeItems': function(qb) {},
            }]
        });
    }
}
