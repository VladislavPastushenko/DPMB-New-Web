import UsersController from "./controllers/usersController";
import PostsController from "./controllers/postsController";
import CitiesController from "./controllers/citiesController";
import StopsController from "./controllers/stopsController";
import TripsController from "./controllers/tripsController";
import RouteItemsController from "./controllers/routeItemsController";

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

    route.route('/users/customers')
        .get(UsersController.getCustomers)

    route.route('/users/personnel')
        .get(UsersController.getPersonnel)

    route.route('/users/sign-up')
        .post(UsersController.signup)

    route.route('/users/:id')
        .get(UsersController.getById)
        .post(UsersController.editById)

    route.route('/users/verify/:authToken')
        .get(UsersController.verify)

    route.route('/users/login')
        .post(UsersController.login)

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


    // STOPS
    route.route('/stops')
        .get(StopsController.getAll)
        .post(StopsController.create)

    route.route('/stops/:id')
        .get(StopsController.getById)

    route.route('/stops/get-by-city-id/:id')
        .get(StopsController.getByCityId)


    // TRIPS
    route.route('/trips')
        .get(TripsController.getAll)
        .post(TripsController.create)

    route.route('/trips/:from_id/:to_id')
        .get(TripsController.getByFromToIds)

    // ROUTE ITEMS
    route.route('/route-items')
        .get(RouteItemsController.createMultiple)

    // POSTS
    route.route('/posts')
        .get(PostsController.getAll)
        .post(PostsController.create)

    route.route('/posts/:id')
        .get(PostsController.get)

};

export default routes;
