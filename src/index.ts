import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as json  from 'koa-json';

import { config } from './config';
import DB from './connection';

import cart from './routes/cart';

const app = new Koa();
const PORT = config.port;

app.use(json());
app.use(logger());


DB.connect({mongo_uri: config.mongoUrl});

app.use(cart.routes());

app.listen(PORT, () => {
    console.log("Koa Started");
    
})
