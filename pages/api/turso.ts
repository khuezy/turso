// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {db} from '../../db'
import { sql } from 'drizzle-orm'
type Data = {
  msg: string
  avg: number,
  count: number
}
let total = 0
let count = 0
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const s = new Date().getTime()
  const r = await db.run(sql`SELECT uuid4();`)
  const t = new Date().getTime() - s
  total += t
  count++
  res.status(200).json({ msg: `Took: ${t}ms`, avg: total/count>>0, count })
}
