import app from './index';
import * as dotenv from 'dotenv';

dotenv.config();

const port = parseInt(process.env.PORT as string) || 3000;

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
