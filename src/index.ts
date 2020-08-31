import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as json  from 'koa-json';

import { config } from './config'

import cart from './routes/cart'

const app = new Koa();
const PORT = config.port;

app.use(json());
app.use(logger());


app.use(cart.routes())


app.listen(PORT, () => {
    console.log("Koa Started");
    
})
