import UsersController from "./controllers/usersController";
import PostsController from "./controllers/postsController";
import CitiesController from "./controllers/citiesController";
import StopsController from "./controllers/stopsController";
import TripsController from "./controllers/tripsController";
import RouteItemsController from "./controllers/routeItemsController";
import CarriersController from "./controllers/carriersController";
import ReservationsController from "./controllers/reservationsController";

const routes = (route) => {
    route.get('/', (req, res) => {
        res.send(`Api server in running (${new Date()})`);
    });

    route.get('/isServerRunning', (req, res) => {
        res.status(200).send(true);
    });

    // USERS
    route.route('/users')
        .get(UsersController.getAll)

    route.route('/users/sign-up')
        .post(UsersController.signup)

    route.route('/users/login')
        .post(UsersController.login)

    route.route('/users/:id')
        .get(UsersController.getById)
        .post(UsersController.editById)
        .delete(UsersController.removeById)

    route.route('/users/verify/:authToken')
        .get(UsersController.verify)


    route.route('/users/logout')
        .get(UsersController.logout)

    route.route('/users/get-authToken/')
        .get(UsersController.getAuthToken)

    route.route('/users/get-logged/:authToken')
        .get(UsersController.getLoggedUser)

    route.route('/users/set-session/:authToken')
        .post(UsersController.setSession)


    // CITIES
    route.route('/cities')
        .get(CitiesController.getAll)
        .post(CitiesController.create)

    route.route('/cities/:id')
        .get(CitiesController.getById)
        .delete(CitiesController.removeById)

    // STOPS
    route.route('/stops')
        .get(StopsController.getAll)
        .post(StopsController.create)

    route.route('/stops/:id')
        .get(StopsController.getById)
        .delete(StopsController.removeById)

    route.route('/stops/get-by-city-id/:id')
        .get(StopsController.getByCityId)


    // TRIPS
    route.route('/trips')
        .get(TripsController.getAll)
        .post(TripsController.create)

    route.route('/trip/:id')
        .get(TripsController.getById)
        .post(TripsController.editById)
        .delete(TripsController.removeById)

    route.route('/trips/:from_id/:to_id')
        .get(TripsController.getByFromToIds)

    // ROUTE ITEMS
    route.route('/route-items')
        .get(RouteItemsController.getAll)
        .post(RouteItemsController.createMultiple)

    // CARRIERS
    route.route('/carrier')
        .get(CarriersController.getAll)
        .post(CarriersController.create)

    route.route('/carrier/:id')
        .get(CarriersController.getById)
        .delete(CarriersController.removeById)

    // RESERVATION
    route.route('/reservations')
        .get(ReservationsController.getAll)
        .post(ReservationsController.create)

    route.route('/reservations/get-by-route-id/:id')
        .get(ReservationsController.getByRouteId)

    route.route('/reservations/get-by-user-id/:id')
        .get(ReservationsController.getByUserId)

    route.route('/reservations/get-for-logged')
        .get(ReservationsController.getForLoggedUser)

    route.route('/reservations/:id')
        .get(ReservationsController.getById)
        .post(ReservationsController.editById)
        .delete(ReservationsController.removeById)

    // POSTS
    route.route('/posts')
        .get(PostsController.getAll)
        .post(PostsController.create)

    route.route('/posts/:id')
        .get(PostsController.get)


};

export default routes;
