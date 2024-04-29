// Importing env variables
import 'dotenv/config';

// Importing configs
import express, { Express } from 'express';
import cors from 'cors';

// Importing configs
import routes from './src/routes';
import mongooseConnect from './src/configs/mongoose.config';

const port = process.env.PORT || 4000;
const app: Express = express();

mongooseConnect();

app.use(
  cors({
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${port} - ${new Date().toDateString()} / ${new Date().toLocaleTimeString()}`
  );
});
