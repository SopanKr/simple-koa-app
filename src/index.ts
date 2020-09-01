import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as json  from 'koa-json';
import * as bodyparser from 'koa-bodyparser';

import { config } from './config';
import DB from './connection';

import cart from './routes/cart';
import products from './routes/products';

const app = new Koa();
const PORT = config.port;

app.use(bodyparser());
app.use(logger());

app.use(cart.routes());
app.use(products.routes());

app.listen(PORT, () => {
    DB.connect({mongo_uri: config.mongoUrl});
    console.log("Koa Started");    
})
