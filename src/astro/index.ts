import { pathToFileURL } from 'url'
import type { Request } from 'firebase-functions/v2/https'
import type { Response } from 'express'

// assumes @astrojs/node adapter with mode: "middleware" config
const serverEntry = import(`${pathToFileURL(process.cwd())}/entry.mjs`)

export const handle = async (req: Request, res: Response) => {
  const { handler } = await serverEntry
  handler(req, res)
}
