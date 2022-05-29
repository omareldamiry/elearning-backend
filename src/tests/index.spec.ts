import app from '../index';
import supertest from 'supertest';
import * as dotenv from 'dotenv';

const request = supertest(app);

dotenv.config();

describe('Server', () => {
    test('port is 3000', () => {
        expect(parseInt(process.env.PORT as string)).toEqual(3000);
    });

    test('[GET] /', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello world!');
    });
});
