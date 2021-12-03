import MySQL from "../mysql";
import PostModel from "./postModel";
import UserModel from "./userModel";
import CityModel from "./cityModel";
import StopModel from "./stopModel";
import TripModel from "./tripModel";
import RouteItemModel from "./routeItemModel";
import CarrierModel from "./carrierModel";
import ReservationModel from "./reservationModel";
import QuestionFromUserModel from "./questionFromUserModel";
import NewsModel from "./newsModel";
import FAQsModel from "./faqsModel";
import LostThingsModel from "./lostThingsModel";

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
        const stopModel = new StopModel({orm: orm, modelName: 'Stop', tableName: 'stops', options: {} })
        const tripModel = new TripModel({orm: orm, modelName: 'Trip', tableName: 'trips', options: {} })
        const routeItemModel = new RouteItemModel({orm: orm, modelName: 'RouteItem', tableName: 'route_items', options: {} })
        const carrierModel = new CarrierModel({orm: orm, modelName: 'Carrier', tableName: 'carriers', options: {} })
        const reservationModel = new ReservationModel({orm: orm, modelName: 'Reservation', tableName: 'reservations', options: {} })
        const questionFromUserModel = new QuestionFromUserModel({orm: orm, modelName: 'QuestionFromUser', tableName: 'questions_from_users', options: {} })
        const newsModel = new NewsModel({orm: orm, modelName: 'NewsModel', tableName: 'novinky', options: {} })
        const faqsModel = new FAQsModel({orm: orm, modelName: 'FAQsModel', tableName: 'faqs', options: {} })
        const lostThingsModel = new LostThingsModel({orm: orm, modelName: 'LostThingsModel', tableName: 'lost_things', options: {} })
        
        

        this._orm = {
            postModel: postModel,
            userModel: userModel,
            cityModel: cityModel,
            stopModel: stopModel,
            tripModel: tripModel,
            routeItemModel: routeItemModel,
            carrierModel: carrierModel,
            reservationModel: reservationModel,
            questionFromUserModel: questionFromUserModel,
            newsModel: newsModel,
            faqsModel: faqsModel,
            lostThingsModel: lostThingsModel,
        };

    }

    getOrm() {
        return this._orm;
    }

}
