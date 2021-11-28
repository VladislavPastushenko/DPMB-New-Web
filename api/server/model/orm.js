import MySQL from "../mysql";
import PostModel from "./postModel";
import UserModel from "./userModel";
import CityModel from "./cityModel";

export default class Orm {

    constructor() {
        const dotenv = require("dotenv");
        const config = dotenv.config();

        const orm = new MySQL(
            config.parsed.MYSQL_HOST,
            config.parsed.MYSQL_USER,
            config.parsed.MYSQL_PASS,
            config.parsed.MYSQL_DB
        );

        const postModel = new PostModel({orm: orm, modelName: 'Post', tableName: 'posts', options: {} })
        const userModel = new UserModel({orm: orm, modelName: 'User', tableName: 'users', options: {} })
        const cityModel = new CityModel({orm: orm, modelName: 'City', tableName: 'cities', options: {} })

        this._orm = {
            postModel: postModel,
            userModel: userModel,
            cityModel: cityModel,
        };

    }

    getOrm() {
        return this._orm;
    }

}
