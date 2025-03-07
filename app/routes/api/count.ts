import { Hono } from 'hono'

let initialCount = 0;

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    count: initialCount,
  })
})

app.post('/', async (c) => {
  const body = await c.req.json();
  initialCount = body.count;
  return c.json({
    count: initialCount,
  })
})

export default app