# Turso local latency

1. npm install
2. open `db.ts` and add the logical db url + token
3. npm run dev
4. go to localhost:3000/api/turso
5. keep refetching to hit the database 20+ times, note the average time
6. edit `db.ts` to point to your closest replica
7. repeat step 5 and note the average time
