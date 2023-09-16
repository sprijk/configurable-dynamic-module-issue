export default () => ({
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  },
});
