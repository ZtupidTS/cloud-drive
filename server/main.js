import Koa from 'koa'
import koaBody from 'koa-body'
import serve from 'koa-static'
import router from './router.js'

const app = new Koa()

app.use(koaBody({multipart: true}))

app.use(serve(__dirname + '/data', {hidden: true}))

app.use(async (ctx, next) => {
  ctx.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': ctx.request.get('Access-Control-Request-Headers'),
    'Access-Control-Allow-Methods': 'DELETE'

  })
  await next()
})

app.use(router.routes())

app.use(router.allowedMethods())

app.listen(3000)