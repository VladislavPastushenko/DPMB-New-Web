import MySQL from "../mysql";
import PostModel from "./postModel";

export default class Orm {

    constructor() {
        const orm = new MySQL('167.99.133.79', 'dpmb_api', 'dpmb_db_pass', 'dpmb');
        const postModel = new PostModel({orm: orm, modelName: 'Post', tableName: 'posts', options: {} })

        this._orm = {
            postModel: postModel,
        };

    }

    getOrm() {
        return this._orm;
    }

}
