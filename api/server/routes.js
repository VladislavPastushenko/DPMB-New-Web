import PostsController from "./controllers/postsController";

const routes = (route) => {
    route.get('/', (req, res) => {
        res.send(`Api server in running (${new Date()})`);
    });

    route.get('/isServerRunning', (req, res) => {
        res.status(200).send(true);
    });

    route.route('/posts')
        .get(PostsController.getAll)
        .post(PostsController.create)

    route.route('/posts/:id')
        .get(PostsController.get)

};

export default routes;
