import * as Router from 'koa-router';
const router = new Router();

router.get("/cart", async (ctx) => {
    ctx.body = {msg: "Pong Hello World!"};

});

export default router;