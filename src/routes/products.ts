import * as Router from 'koa-router';
import Product from '../model/product'
import { IProduct } from '../model/product'

const router = new Router();

router.get("/product/:id", async ctx => {    
    try {
        let product = await Product.findOne({id: ctx.params.id});
        if (!product)
            ctx.throw(404 ,'Product Not Found');
        ctx.body = product;
    }
    catch(err) {
        ctx.status = err.status || 500;
        ctx.body = {message: err.message};
        console.log(err.message + '    Name  ' + err.name);
    }
    
});

router.post("/product/list", async ctx => {    
    let limit = parseInt(ctx.request.body.limit) || 10,
        skip = parseInt(ctx.request.body.page) || 1,
        filter = ctx.request.body.filter,
        result = {
            count: 0,
            list: []
        };
       result.count = await Product.count(filter).exec();
       result.list = await Product.find(filter).skip((skip - 1) * limit).limit(limit).exec();
       ctx.body = result; 
    ctx.body = result;
    
});


export default router;