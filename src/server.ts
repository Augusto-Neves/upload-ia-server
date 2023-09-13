import { fastify } from 'fastify';

const app = fastify();

app.get('/', (_req, res) => {
  res.send('Hello world');
});

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running at port 3333');
});
