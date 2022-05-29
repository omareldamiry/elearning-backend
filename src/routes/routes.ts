import express from 'express';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({ message: 'Hello world!' });
});

export default routes;
