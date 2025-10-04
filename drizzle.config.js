/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_kYecw5mDn0yM@ep-curly-cloud-adx3mvzg-pooler.c-2.us-east-1.aws.neon.tech/aimockinterview?sslmode=require&channel_binding=require',
  },
};
