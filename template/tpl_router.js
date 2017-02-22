module.exports = `const KoaRouter = require('koa-router'),
    dao = require('../dao/$option'),
    router = new KoaRouter({
        prefix: '/$option'
    });

router.get('/', async ctx => {
    var doc = {};
    var params = ctx.query;
    ctx.body = { code: 200, data: await dao.list(params) };
});

router.post('/', async ctx => {
    var data = ctx.request.body;
    await dao.create(data);
    ctx.body = { code: 200, msg: 'ok' };
});

router.put('/', async ctx => {
    var data = ctx.request.body;
    await dao.update(data);
    ctx.body = { code: 200, msg: 'ok' };
});

router.delete('/:id', async ctx => {
    var id = ctx.params.id;
    await dao.delete(id);
    ctx.body = { code: 200, msg: 'ok' };
});
router.get('/:id', async ctx => {
    var doc = await dao.get(this.params.id);
    ctx.body = { code: 200, data: doc };
});

module.exports = router;`