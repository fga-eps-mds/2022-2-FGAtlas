const NODE_ENV = process.env.NODE_ENV as string;
const { PORT } = process.env;

const DATABASE_URL = process.env.DATABASE_URL as string;

const { DEPLOY_URL } = process.env;

export { NODE_ENV, PORT, DATABASE_URL, DEPLOY_URL };
