import BaseModel from './baseModel';

export default class StopModel extends BaseModel {
    constructor({orm, modelName, tableName, options = {}}) {
        super({orm, modelName, tableName, options});

        this.model = this.model.extend({
            city() {
                return this.belongsTo('City', "city_id", "id");
            },
        })
    }


    getAll() {
        return this.model.query(function(qb) {
            qb.select('stops.*')
        }).fetchAll({
            withRelated: [{
                'city': function(qb) {},
            }]
        });
    }


    getById(id){
        return this.model.query(function(qb) {
            qb.where('stops.id', id)
        }).fetch({
            withRelated: [{
                'city': function(qb) {},
            }]
        });
    }

    getByCityId(cityId){
        return this.model.query(function(qb) {
            qb.where('stops.city_id', cityId)
        }).fetchAll({
            withRelated: [{
                'city': function(qb) {},
            }]
        });
    }
}
