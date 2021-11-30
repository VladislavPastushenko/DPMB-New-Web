import BaseModel from './baseModel';

export default class TripModel extends BaseModel {
    constructor({orm, modelName, tableName, options = {}}) {
        super({orm, modelName, tableName, options});

        this.model = this.model.extend({
            routeItems() {
                return this.hasMany('RouteItem', 'trip_id')
            },
            stops() {
                return this.belongsToMany('Stop','route_items','trip_id', 'stop_id');
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
                'stops': function(qb) {},
            }]
        });
    }


    getById(id){
        return this.model.query(function(qb) {
            qb.where('trips.id', id)
        }).fetch({
            withRelated: [{
                'stops': function(qb) {},
                'routeItems': function(qb) {},
                'carrier': function(qb) {},
            }]
        });
    }

    getByFromToIds(from_id, to_id, date=null){
        return this.model.query(function(qb) {
            qb.select('trips.*')
            qb.whereRaw(`
            EXISTS
                (SELECT * from route_items route_item1 WHERE route_item1.trip_id=trips.id AND route_item1.stop_id=${from_id} AND EXISTS
                (SELECT * from route_items route_item2 WHERE route_item2.trip_id=trips.id AND route_item2.stop_id=${to_id} AND route_item1.position < route_item2.position))
            `)

            if (date) {
                qb.whereRaw(`DATE(trips.start_time) = '${date}'`)
            }
        }).fetchAll({
            withRelated: [{
                'routeItems': function(qb) {},
            }]
        });
    }
}
