import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { Hono } from 'hono'

const app = createApp()

showRoutes(app)

export type AppType = typeof app;

export default app
