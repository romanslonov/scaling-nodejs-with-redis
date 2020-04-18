import Koa from 'koa';

const app = new Koa();
const number = process.env.number || 0;

app.use(async(ctx) => {
  ctx.status = 200;
  ctx.body = `Welcome to node.js server #${number}.`;
});

app.listen(3000, () => {
  console.log('App is running on 3000.');
});