const koa = require('koa')
const fs = require('fs')
const static = require('koa-static')
const path = require('path')
const app = new koa()

app.use(static(
    path.join(__dirname,'./web')
))
app.use(async (ctx,next) => {
    await next();
    ctx.response.type = 'text/html';
    let str = fs.createReadStream('web/categories.html')
    ctx.response.body = str
})
app.listen(8080)