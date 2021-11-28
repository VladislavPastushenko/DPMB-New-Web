import BaseModel from './baseModel';

export default class UserModel extends BaseModel {
    getAll(params = {}) {
        return this.model.query(function(qb) {
            qb.select('users.*')
            if(params.role)
                qb.where('role', params.role)
            if(params.limit)
                qb.limit(params.limit)
            qb.groupBy('users.id')
        })
        .fetchAll({});
    }

    register(data) {
        data.password = this.createHash(data.password,'sha1');
        data.auth_token = this.createHash(Date.now().toString(), 'sha1');
        return new this.model().save({...data});
    }

    getUserByAuthToken(authToken) {
        console.log('GETTING USER')
        return this.model.query(function(qb) {
            qb.select('*');
            qb.where('auth_token', authToken);
        }).fetch({
            withRelated: [{}]
        });
    }

    getUserForLogin(data) {
        data.password = this.createHash(data.password, 'sha1');
        return this.model.query(function(qb) {
            qb.select('id','auth_token','is_active')
            qb.where('email', data.email);
            qb.where('password', data.password);
            qb.where('is_active', 1);
        }).fetch();
    }


    activateUserById(user_id) {
        console.log('Activating user')
        return this.model
            .forge()
            .save({
                'id': user_id,
                'is_active': 1
            },{
                method: 'update',
                patch: true
            })
    }

}
