import BaseModel from './baseModel';

export default class TripModel extends BaseModel {
    constructor({orm, modelName, tableName, options = {}}) {
        super({orm, modelName, tableName, options});

        this.model = this.model.extend({
            routeItems() {
                return this.hasMany('RouteItem', 'trip_id')
            },
            carrier() {
                return this.belongsTo('Carrier', "carrier_id", "id");
            },

        });
    }


    getAll() {
        return this.model.query(function(qb) {
            qb.select('trips.*')
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
