const NODE_ENV = process.env.NODE_ENV as string;
const { PORT } = process.env;
const SESSION_SECRET = process.env.SESSION_SECRET as string;
const SESSION_EXPIRATION = process.env.SESSION_EXPIRATION as string;

const DATABASE_URL = process.env.DATABASE_URL as string;

const { DEPLOY_URL } = process.env;

export { NODE_ENV, PORT, SESSION_SECRET, SESSION_EXPIRATION, DATABASE_URL, DEPLOY_URL };
